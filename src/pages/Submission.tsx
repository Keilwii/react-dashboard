import React, { useState, useEffect } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import './Home.css'; // <<< Import the theme from the Home page

// Define an interface for a single submission object
interface SubmissionItem {
  proofUrl: string; // Changed from imageUrl
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

const Submission = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null); // State for the preview URL
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');

  // State for submission history
  const [history, setHistory] = useState<SubmissionItem[]>([]);
  const [isHistoryLoading, setIsHistoryLoading] = useState(true);
  const [historyError, setHistoryError] = useState<string | null>(null);

  // Effect to fetch submission history on component mount
  useEffect(() => {
    const fetchHistory = async () => {
      setIsHistoryLoading(true);
      setHistoryError(null);
      try {
        // This fetch assumes the browser sends the necessary authentication cookie
        // that was set upon login.
        const response = await fetch('https://demoefekti.verecycle.vet/api/user/submission', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch history. Server responded with ${response.status}`);
        }

        const data: SubmissionItem[] = await response.json();
        setHistory(data);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        console.error('Failed to fetch submission history:', errorMessage);
        setHistoryError(errorMessage);
      } finally {
        setIsHistoryLoading(false);
      }
    };

    fetchHistory();
  }, []); // Empty dependency array means this runs once on mount

  // Effect to clean up the object URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl); // Revoke old URL before creating a new one
    }

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      // Basic check for image file type
      if (!file.type.startsWith('image/')) {
        setStatusMessage('Error: Please select an image file.');
        setMessageType('error');
        setSelectedFile(null);
        setImagePreviewUrl(null);
        return;
      }
      setSelectedFile(file);
      setImagePreviewUrl(URL.createObjectURL(file)); // Create and set the preview URL
      setStatusMessage(`Selected file: ${file.name}`);
      setMessageType('info');
    } else {
      setSelectedFile(null);
      setImagePreviewUrl(null);
    }
  };

  const handleTurnstileSuccess = (token: string) => {
    setTurnstileToken(token);
    // As requested, also store it in sessionStorage
    sessionStorage.setItem('cf-turnstile-token', token);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedFile || !turnstileToken) {
      setStatusMessage('Please select a file and complete the human verification.');
      setMessageType('error');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('Step 1: Getting upload link...');
    setMessageType('info');

    // Define fileType and fileSize from the selectedFile state
    const fileType = selectedFile.type;
    const fileSize = selectedFile.size;

    try {
      // Step 1: Get the one-time upload URL from your backend
      const uploadUrlResponse = await fetch('https://demoefekti.verecycle.vet/api/user/submission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          turnstileToken: turnstileToken,
          fileType: fileType,
          fileSize: fileSize,
        }),
        credentials: 'include',
      });

      if (!uploadUrlResponse.ok) {
        throw new Error(`Failed to get upload link. Server responded with ${uploadUrlResponse.status}`);
      }

      const { url } = await uploadUrlResponse.json();
      if (!url) {
        throw new Error('Upload URL not provided by the server.');
      }

      setStatusMessage('Step 2: Uploading image...');
      
      // Step 2: Upload the file directly to the Cloudflare URL
      // Cloudflare direct creator uploads expect a POST with form data.
      const formData = new FormData();
      formData.append('file', selectedFile);

      const imageUploadResponse = await fetch(url, {
        method: 'POST',
        body: formData, // No Content-Type header needed, browser sets it with boundary
      });
      

      if (!imageUploadResponse.ok) {
        throw new Error(`Image upload failed. Cloudflare responded with ${imageUploadResponse.status}`);
      }
      
      const result = await imageUploadResponse.json();
      console.log('Cloudflare upload result:', result);

      setStatusMessage('Submission successful! Your image has been uploaded.');
      setMessageType('success');
      setSelectedFile(null); // Clear selection on success
      setImagePreviewUrl(null); // Clear preview on success

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      console.error('Submission failed:', errorMessage);
      setStatusMessage(`Submission failed: ${errorMessage}`);
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
      // It's good practice to reset the turnstile to get a fresh token for the next submission
      // The library doesn't expose a reset function directly, but a key change would force a re-render/reset.
      // For now, we'll rely on the user re-initiating.
    }
  };

  const getStatusColor = () => {
    switch (messageType) {
      case 'success': return 'text-green-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="view welcome-view active">
      <h1 className="welcome-title">
        Create a Submission
      </h1>

      <div className="action-card">
      <h1 className="section-title">
        Make a Submission
      </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="file-upload" className="block text-sm font-medium text-gray-300 mb-2">
              Select Image to Upload
            </label>
            <input 
              id="file-upload" 
              type="file" 
              accept="image/*"
              onChange={handleFileChange}
              disabled={isSubmitting}
              className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-gray-300 hover:file:bg-gray-600"
            />
          </div>
          
          {imagePreviewUrl && (
            <div className="mt-4 text-center">
              <p className="block text-sm font-medium text-gray-300 mb-2">Image Preview:</p>
              <img src={imagePreviewUrl} alt="Selected preview" className="rounded-lg max-h-60 w-auto mx-auto border-2 border-gray-600" />
            </div>
          )}

          <div className="flex justify-center">
            <Turnstile
              siteKey="0x4AAAAAAA8OB5tuu03XRJBZ" // IMPORTANT: Replace with your real site key in production
              onSuccess={handleTurnstileSuccess}
              options={{
                theme: 'dark',
              }}
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting || !selectedFile || !turnstileToken}
            className="accent-button"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Image'}
          </button>

          {statusMessage && (
            <div className={`text-center text-sm ${getStatusColor()}`}>
              {statusMessage}
            </div>
          )}
        </form>
      </div>

      {/* Submission History Section */}
      <div className="mt-12 w-full">
        <div className="communities-card">
        <h2 className="section-title">
          Submission History
        </h2>
          {isHistoryLoading ? (
            <p className="text-center text-gray-400">Loading history...</p>
          ) : historyError ? (
            <p className="text-center text-red-400">{historyError}</p>
          ) : history.length === 0 ? (
            <p className="text-center text-gray-400">You have no submissions yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {history.map((item, index) => (
                <div key={`${item.proofUrl}-${index}`} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <img src={item.proofUrl} alt={`Submission ${index + 1}`} className="w-full h-48 object-cover" />
                  <div className="p-3">
                    <p className="text-sm text-gray-400">
                      Status: <span className={`font-semibold ${item.status === 'approved' ? 'text-green-400' : item.status === 'rejected' ? 'text-red-400' : 'text-yellow-400'}`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Submitted: {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Submission; 
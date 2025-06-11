import React, { useState, useEffect } from 'react';

// Define an interface for a single submission object
interface SubmissionItem {
  proofUrl: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

interface SubmissionHistoryProps {
  refreshTrigger?: number;
}

const SubmissionHistory: React.FC<SubmissionHistoryProps> = ({ refreshTrigger }) => {
  const [history, setHistory] = useState<SubmissionItem[]>([]);
  const [isHistoryLoading, setIsHistoryLoading] = useState(true);
  const [historyError, setHistoryError] = useState<string | null>(null);

  // Effect to fetch submission history on component mount and refresh trigger
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
  }, [refreshTrigger]); // Refetch when refreshTrigger changes

  return (
    <div className="mt-12 w-full">
      <div className="communities-card">
        <h2 className="section-title">Submission History</h2>
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
  );
};

export default SubmissionHistory; 
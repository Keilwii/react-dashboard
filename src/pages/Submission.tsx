import React, { useState } from 'react';
import './Home.css'; // <<< Import the theme from the Home page
import SubmissionForm from '../components/SubmissionForm';
import SubmissionHistory from '../components/SubmissionHistory';

const Submission = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleSubmissionSuccess = () => {
    // Increment the refresh trigger to refetch history
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <section className="view welcome-view active">
      <h1 className="welcome-title">Create a Submission</h1>
      <SubmissionForm onSubmissionSuccess={handleSubmissionSuccess} />
      <SubmissionHistory refreshTrigger={refreshTrigger} />
    </section>
  );
};

export default Submission; 
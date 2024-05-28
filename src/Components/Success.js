import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormSubmissionSuccess = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/home');
  };


  // Inline styles
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    container: {
      maxWidth: '800px',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    heading: {
      color: '#333',
    },
    paragraph: {
      color: '#666',
    },
    backButton: {
      marginTop: '20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    backButtonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Form Submission Successful</h2>
        <p style={styles.paragraph}>Thank you for submitting the form. Your information has been successfully received.</p>
        <button
          style={styles.backButton}
          onClick={goBack}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default FormSubmissionSuccess;

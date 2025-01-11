import React from 'react';

interface TestModalProps {
  show: boolean;
  onClose: () => void;
}

const TestModal: React.FC<TestModalProps> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <div style={modalStyles.topArea}>
          <label></label>
          <img style={modalStyles.topAreaLogo} src='/assets/foxpay.png' alt='logo' />
        </div>
        <h2 style={modalStyles.dialogHeading}>Zahlung #5240</h2>

        <p style={modalStyles.sumLabel}>214.24 €</p>
        <p>A5F4FDS5DS</p>

        <button style={modalStyles.submitButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    padding: '24px',
    width: '550px',
    borderRadius: '4px'
  },
  topArea: {
    display: 'grid',
    templateColumns: '1fr 100px',
    alignItems: 'center',
    marginBottom: '20px',
  },
  topAreaLogo: {
    gridColumn: '2',
    alignSelf: 'end'
  },
  dialogHeading: {
    fontSize: '30px',
    marginBottom: '20px',
    fontWeight: 'bold'
  },
  sumLabel: {
    fontSize: '25px',
    color: '#333',
    fontWeight: '700',
    marginBottom: '5px'
  },
  submitButton: {
    marginTop: '20px',
    padding: '8px 16px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default TestModal;
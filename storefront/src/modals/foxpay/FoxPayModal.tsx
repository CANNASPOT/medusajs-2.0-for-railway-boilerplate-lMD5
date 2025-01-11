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
        <p>Hier ist der QR Code</p>

        <button onClick={onClose}>Close</button>
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
    minWidth: '350px !important',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    padding: '24px',
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
    fontSize: '24px',
    marginBottom: '20px',
    fontWeight: 'bold'
  }
};

export default TestModal;
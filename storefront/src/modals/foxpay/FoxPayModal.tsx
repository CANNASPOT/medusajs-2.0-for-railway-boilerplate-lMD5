import React from 'react';

interface TestModalProps {
  show: boolean;
  amount: number;
  reference: string;
  onClose: () => void;
}

const TestModal: React.FC<TestModalProps> = ({ reference, amount, show, onClose }) => {
  if (!show) {
    return null;
  }

  const formattedAmount = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
  const requestUrl = 'https://api.foxpay.io/v1/qr';

  const generateQrRequest = () => {
    const response = fetch(requestUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Amount: amount,
        Reference: reference
      })
    });

    console.log('response', response);
  }

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <div style={modalStyles.topArea}>
          <label></label>
          <img style={modalStyles.topAreaLogo} srcSet='https://ventror.com/wp-content/uploads/2024/12/Foxpay-1024x531.png' alt="FoxPay" />
        </div>
        <h2 style={modalStyles.dialogHeading}>Zahlung #{reference}</h2>

        <p style={modalStyles.sumLabel}>{formattedAmount}</p>
        <p>A5F4FDS5DS</p>

        <button style={modalStyles.submitButton} onClick={generateQrRequest}>OK</button>
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
    width: '100%',
    templateColumns: '1fr auto',
    alignItems: 'end',
    marginBottom: '20px',
  },
  topAreaLogo: {
    gridColumn: '2',
    alignSelf: 'end',
    height: '75px',
    width: 'auto'
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
    cursor: 'pointer',
    display: 'inline-block',
    marginRight: '0.68rem'
  }
};

export default TestModal;
import React from 'react';

interface TestModalProps {
  show: boolean;
  amount: number;
  reference: string;
  title: string;
  onClose: () => void;
}

const TestModal: React.FC<TestModalProps> = ({ title, reference, amount, show, onClose }) => {
  if (!show) {
    return null;
  }

  const formattedAmount = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
  const token = "asd";
  
  const requestUrl = 'https://sellerstock.api.sellerspot.de/SellerStock/FoxPay/GeneratePaymentCode';

  const base64Image = "data:image/png;base64,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xA/Stsb911vjvu06nte2xn3bdTyvbY37r7fGfVucblDiB2lb4/7rrXHfdh3Pa1vjvu06nte2xv3XW+O+LU43KPGDtK1x//XWuG+7jue1rXHfdh3Pa1vj/uutcd8WpxuU+EHa1rj/emvct13H89rWuG+7jue1rXH/9da4b4vTDUr8IG1r3H+9Ne7bruN5bWvct13H89rWuP96a9y3xekGJX6QtjXuv94a923X8by2Ne7bruN5bWvcf7017tvidIMSP0jbGvdfb437tut4Xtsa923X8by2Ne6/3hr3bXG6QYkfpG2N+6+3xn3bdTyvbY37tut4Xtsa919vjfu2ON2gxA/Stsb911vjvu06nte2xn3bdTyvbY37r7fGfVucblDiB2lb4/7rrXHfdh3Pa1vjvu06nte2xv3XW+O+LU43KPGDtK1x//XWuG+7jue1rXHfdh3Pa1vj/uutcd8WpxuU+EHa1rj/emvct13H89rWuG+7jue1rXH/9da4b4vTDUr8IG1r3H+9Ne7b1rh/rTXuX2uN+7Y17r/eGvdtcbpBiR+kbY37r7fGfdsa96+1xv1rrXHftsb911vjvi1ONyjxg7Stcf/11rhvW+P+tda4f6017tvWuP96a9y3xekGJX6QtjXuv94a921r3L/WGvevtcZ92xr3X2+N+7Y43aDED9K2xv3XW+O+bY3711rj/rXWuG9b4/7rrXHfFqcblPhB2ta4/3pr3Letcf9aa9y/1hr3bWvcf7017tvidIMSP0jbGvdfb437tjXuX2uN+9da475tjfuvt8Z9W5xuUOIHaVvj/uutcd+2xv1rrXH/Wmvct61x//XWuG+L0w1K/CBta9x/vTXu29a4f6017l9rjfu2Ne6/3hr3bXG6QYkfpG2N+6+3xn3bGvevtcb9a61x37bG/ddb474tTjco8YO0rXH/9da4b1vj/rXWuH+tNe7b1rj/emvct8XpBiV+kLY17r/eGvdta9y/1hr3r7XGfdsa919vjfu2ON2gxA/Stsb911vjvm2N+9da4/611rhvW+P+661x3xanG5T4QdrWuP96a9y3rXH/Wmvcv9Ya921r3H+9Ne7b4nSDEj9I2xr3X2+N+7Y17l9rjfvXWuO+bY37r7fGfVucblDiB2lb4/7rrXHftsb9a61x/1pr3Letcf/11rhvi9MNSvwgbWvcf7017tvW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"; // truncated for brevity

  const generateQrRequest = () => {
    const response = fetch(requestUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
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
        <div>
          <h2 style={modalStyles.dialogHeading}>{title}</h2>

          <p style={modalStyles.sumLabel}>{formattedAmount}</p>
          <p>{reference}</p>

          <img src={base64Image} style={modalStyles.qrImage} alt="Base64 Image" />

          <button style={modalStyles.submitButton} onClick={generateQrRequest}>OK</button>
          <button style={modalStyles.submitButton} onClick={onClose}>Close</button>
        </div>
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
  qrImage: {
    display: 'flex',
    height: '200px',
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
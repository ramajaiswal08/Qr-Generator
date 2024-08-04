
import React, { useState } from 'react';
import QRCode from 'qrcode';
import './App.css';

function App() {
  const [qrCodeData , setQRCodeData] = useState('');
  const [qrCodeImage , setQRCodeImage] = useState('');

  const generateQRCode  = () => {
    QRCode.toDataURL (qrCodeData, (err,url) => {
      if(err) return console.error("Failed to generate QR cODE :" , err)
       
      setQRCodeImage(url);
    })
  }

  return (
    <div>
      <h1>Qr Code Generator</h1>

      <div>
        <input
         type='text'
         value = {qrCodeData}
         onChange={e => setQRCodeData(e.target.value)}
         placeholder='Enter data to encode'
        />
        <button onClick={generateQRCode}>Generate</button>
      </div>


      {qrCodeImage && (
      <div className='qrcode-container'>
      <img src={qrCodeImage} alt='' /> 
      <a href= {qrCodeImage} download={'qrcode.png'}>Download</a>
      </div>
      )}
    </div>
  );
}

export default App;

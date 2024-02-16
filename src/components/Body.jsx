import { useState } from 'react';
import QRCodeLink from 'qrcode';
import QRCode from 'react-qr-code';

const Body = () => {

  const [link, setLink] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, { width: 300, margin: 1 }, function (err, url) {
      setQrcodeLink(url);
    })
  }

  function handleQrcode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className="body">
      <br />
      <br />
      <h1 className="text-center m-5">QR Pronto</h1>
      <div className="containers text-center">
        <div className="container">
          <QRCode value={link} className="qrimage mt-2 mb-4 bg-light p-1" />
          <input className="w-100 qrinput form-control mb-4" id="inputqr" 
          placeholder="Insira seu link aqui..."
          value={link} onChange={(e) => handleQrcode(e)}/>
          <a className="btn btn-lg btn-success" href={qrcodeLink} download={`qrcode.png`}>Baixar QR Code</a>
        </div>
      </div>
    </div>
  )
}

export default Body


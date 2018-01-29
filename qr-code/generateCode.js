var QRCode = require('qrcode');

var opts = {
  errorCorrectionLevel: 'H',
  type: 'image/webp',
  rendererOpts: {
    quality: 0.3
  }
},
 segs = [
  { data: 'Samvedna', mode: 'string' },
  { data: '0123456', mode: 'numeric' },
  { data: '02-02-2018', mode: 'byte' },
  { data: 'Angular', mode: 'string' },
];

// QRCode.toDataURL(segs, opts, function (err, url) {
//   if (err) throw err
// console.log(url);

// });

QRCode.toFile('/Users/skaloty/Documents/hackathon-qrcodes/qr-codes.png',segs, opts, function (err) {
  if(err)
     console.log(err);
});


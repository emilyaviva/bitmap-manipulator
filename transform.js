var fs = require('fs');

function getBitmap(req) {
  fs.readFile(req, function(err, data) {
    // make sure we have a bitmap file
    if (data.toString('ascii', 0, 2) !== 'BM') {
      throw new Error('Not a bitmap image file');
    }
    var startOffset = (data.readUInt8(0x0a));
    console.log('image data starts at byte: ' + startOffset);
  });
}

getBitmap('./img/palette-bitmap.bmp');

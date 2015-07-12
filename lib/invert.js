var fs = require('fs');

exports.invertBitmap = function(input, output) {
  fs.readFile(input, function(err, data) {

    // make sure we have a bitmap file
    if (err) throw new Error;
    if (data.toString('ascii', 0, 2) !== 'BM') throw new Error('Not a bitmap image file')

    // get image size and offset where image starts
    var size = data.readUInt32LE(2);
    var start = data.readUInt32LE(10);

    // invert the color of every pixel
    for (var i = start; i < size; i++) {
      data.writeUInt8(255 - data.readUInt8(i), i);
    }

    // write out the complete file
    fs.writeFile(output, data, function(err) {
      if (err) throw new Error;
    });

  });
}

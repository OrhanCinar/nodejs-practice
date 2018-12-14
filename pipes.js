
const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();

const  readStream = fs.createReadStream('source.txt', 'utf8');
const  writeStream = fs.createWriteStream('streamwrite.txt.gz', 'utf8');



readStream.pipe(gzip).pipe(writeStream);




const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGunzip();

const  target = fs.createWriteStream('source.txt');
const  source = fs.createReadStream('streamwrite.txt.gz', 'utf8');

source.pipe(gzip).pipe(target);

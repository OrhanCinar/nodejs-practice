
const  readStream = fs.createReadStream('stream.txt', 'utf8');
const  writeStream = fs.createWriteStream('streamwrite.txt', 'utf8');



readStream.on('data', (chunk) => {
    //console.log(chunk);
    writeStream.write(chunk);
});
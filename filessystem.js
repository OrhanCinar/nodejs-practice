const fs = require('fs');

//create
fs.writeFile('example.txt', 'this is an example', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('file created');
        fs.readFile('example.txt', 'utf8', (err, file) => {
            if (err) {
                console.log(err);
            } else {
                console.log(file);
            }
        });
    }
});

//rename
fs.rename('example.txt', 'orhan.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('renamed');
    }
});

//append
fs.appendFile('example.txt', 'append this to end', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('append');
    }
});

//delete
fs.unlink('example.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('deleted');
    }
});


//dir create
fs.mkdir('nodedir', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('dir created');
    }
});

//dir delete
fs.rmdir('nodedir', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('dir deleted');
    }
});


//create dir and file inside
fs.mkdir('nodedir', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('dir deleted');

        fs.writeFile('./nodedir/example.txt', 'this is an example', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('file created');
            }
        });
    }
});

//delete all files
fs.readdir("nodedir", (err, files) => {
    if (err) {
        console.log(err);
    } else {
        for (let file of files) {
            fs.unlink('./nodedir/' + file, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
    }
});



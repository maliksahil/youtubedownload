const fs = require('fs');
const ytdl = require('ytdl-core');

if (!process.argv[2]) {
    console.log('Usage node index.js youtubeurl1, youtubeurl2, youtubeurl3 ..');
} else {
    i = 2;
    do {
        console.log(i + ':' + process.argv[i]);
        let url = process.argv[i];
        ytdl.getInfo(url, function (err, info) {
            console.log('Downloading:' + info.title);
            ytdl(url, { format: 'mp4' })
                .pipe(fs.createWriteStream(info.title + '.mp4'));
        });
        i++;
    } while (process.argv[i]);
}

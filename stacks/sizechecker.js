import fs from "fs";

function checkFileSize(fileName) {
    fs.stat(fileName, (err, stats) => {
        if (err) {
            console.log("File not found:", fileName);
            return;
        }
        const sizeMB = stats.size / (1024 * 1024);
        console.log(`${fileName} size: ${sizeMB.toFixed(2)} MB`);
        console.log(`${fileName} size: ${stats.size} bytes`);
        if (stats.size > 5 * 1024 * 1024) {
            console.log(`${fileName}: File should be less than 5MB`);
        } else {
         console.log(`${fileName}: File size is valid`);
        }
        console.log("------");
    });
}
checkFileSize("notes.txt");
checkFileSize("content.txt");1` 
`
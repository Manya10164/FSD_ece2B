const fs + require("fs");
fs.watch("notes.txt", (eventType, filename) => {
    if (eventType === "change") {
        console.log(`${filename} has been modified.`);
    }
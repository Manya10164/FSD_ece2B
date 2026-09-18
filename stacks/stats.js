import fs from 'fs'
fs.stat("notes.txt", (err,stats)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("information of[notes.txt]",stats);
    console.log("Size of the file",stats.size);
    console.log("creation of the file",stats.birthtime);
    console.log("change time of the file",stats.ctime.toISOString());
   console.log("creation time of the file",stats.birthtime.toISOString());
   console.log("is this is a file:",stats.isFile());
   console.log("is this is a directory:",stats.isDirectory());
});

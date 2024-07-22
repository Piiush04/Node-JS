// This is a demonstration of callbacks using the fs module.
const {readFile,writeFile} = require('fs');
console.log('Start');
readFile('./Module/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return ;
    }
    const first=result;
    readFile('./Module/subfolder/text.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile('./Module/subfolder/result-async.txt',`Here's the async result : ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return ;
            }
            console.log("Done with this task");
        });
    });
});
console.log('Starting the next task');
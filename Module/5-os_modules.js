// Javascript already has bunch of pre defined modules like os,path,fs,http,etc.
// We can call any module and use them in our code
const os=require("os");
const user=os.userInfo();
console.log(user);
const sys={
    name:os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem()
}
console.log(sys);
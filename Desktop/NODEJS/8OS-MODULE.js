const os = require('os');
// Info about user
const user = os.userInfo();
console.log(user);
// {
//   uid: -1,
//   gid: -1,
//   username: 'user',
//   homedir: 'C:\\Users\\user',
//   shell: null
// }

// Method returns the system uptime in sections
console.log(`The system updatime is ${os.uptime()} seconds`);
// The system updatime is 90761 seconds

// CURRENT OS
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
// console.log(currentOS);
// {
//   name: 'Windows_NT',
//   release: '10.0.19045',
//   totalMem: 17140137984,
//   freeMem: 9691537408
// }
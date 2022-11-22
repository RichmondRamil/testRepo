// Asynchonous
const { readFile, writeFile } = require('fs');

console.log("START");
readFile('./content/first.txt', 'utf8', (err, res) => {
  if (err) {
    console.log(err)
    return
  }
  const first = res;
  readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
      console.log(err)
      return
    }
    const second = res;
    writeFile('./content/result-aysnc.txt', `here is the result ${first}, ${second}`, (err, res) => {
      if (err) {
        console.log(err)
        return
      }
      console.log("DONE WITH THE TASK")
      //The res with be undefined
      //Check the content/result-async.txt file
      //You will see the content
    });
  })
});
console.log("STARTING NEXT TASK")

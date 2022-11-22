

//My platform specific separator
// console.log(path.sep)
// "\"


//Path .join method is joining the sequence of path segments using platform separator as delimiter, it returns normalize resulting path

const filePath = path.join('/content', 'subfoler', 'test.txt');
// console.log(filePath);
// "\content\subfoler\test.txt"

//method basename
// const base = path.basename(filePath)
// console.log(base);
//still gets the same
// "\content\subfoler\test.txt"

//it accepts the sequence of path or path segments and resolves it into an absolute path
const absolute = path.resolve(__dirname, 'conent', 'subfolder', 'test.txt')
console.log(absolute);
//Result
//C:\Users\user\Desktop\NODEJS\conent\subfolder\test.txt

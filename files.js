const fs =  require('fs');

// reading files
// console.log(2+3);
// fs.readFile('./docs/blog.txt', (err, data) => {
//   if(err) {
//     console.log(err);
//   }else {
//     console.log(data.toString());
//   }
// });
// console.log("last line");
// writting files

// fs.writeFile('./docs/blog.txt', "Dear Co", (e) => {
//   console.log("file was written");
// });
// director files
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    } 
    console.log('folder deleted');

  })
}
// deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  })
}
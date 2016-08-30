
const http = require('http')
const url = process.argv.slice(2);

// [ false, false ]
var isFinished = [];
// { 1: '...', 2: '...'} - empty object
var container = {};

//loops through each url 
url.forEach((file, index) =>{
  //populates isFinished array with default value of false for each 
  isFinished.push(false)
  
  http.get(file, (res) => {
    res.setEncoding('utf8');
    //creates empty string to hold results of chunk on lines 19-20
    var body = '';
    res.on('data',(chunk) => {
      body += chunk;
    });
    //when finished, changes isFinished status to true based on the index
    res.on('end', () => {
      isFinished[index] = true;
      //sets the value of the key/value pair based on index
      container[index] = body;
      //assigns var isAllFinished which is result of looping through isFinished array. Will return true only if all isFinished objects are true
      var isAllFinished = isFinished.every(function(x) {
        return x;
      })

      //if all isFinished items are true, loops through container object to get values (e.g. container[0], container[1])
      if (isAllFinished){
        for (var i = 0; i < isFinished.length; i+=1) {
            console.log(container[i]);
        }
      }
    });
  });
});

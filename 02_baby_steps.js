const myArray = process.argv.slice(2)


const result = myArray.reduce ((sum, number) => {
  return sum + (+number);
}, 0);

console.log(result);

// Exercise 1

function testNum(num) {
  return new Promise((resolve, reject) => {
    if (num >= 10) {
      resolve(console.log("Number is greater than or equal to 10"));
    } else {
      reject(console.log("Number is less than 10"));
    }
  });
}

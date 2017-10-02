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

testNum(9)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Exercise 2

let desserts = ["pie", "ice cream", "cake", "brownies", "apples", "delicious"];

function makeAllCaps(things) {
  return new Promise((resolve, reject) => {
    if (things.every(item => typeof item === "string")) {
      resolve(things.map(item => item.toUpperCase()));
    } else {
      reject(
        console.log(
          "No, the array you passed in contained an element that was not a string!"
        )
      );
    }
  });
}

const sortWords = words => words.sort();

makeAllCaps(desserts)
  .then(res => sortWords(res))
  .then(res => console.log(res))
  .catch(error => console.log(error));

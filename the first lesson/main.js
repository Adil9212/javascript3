// h / w 1
// function printArrayValues(arr, i = 0) {
//     if (i === arr.length) {
//       return;
//     }
//     console.log(arr[i], 'array');
//     printArrayValues(arr, i + 1);
//   }
  
//   printArrayValues([1, 2, 3]);

// h / w 2
//   const text = "My name 457 is Alex";
//     const nonDigits = text.match(/\D/g);
//     console.log(nonDigits);// Output: ["M", "y", " ", "n", "a", "m", "e", " ", "i", "s", " ", "A", "l", "e", "x"]

// h / m 3
// const text = "Hello\tWorld\nTest";
// const whitespaceRegex = /\s/g;
// const whitespaceMatches = text.match(whitespaceRegex);
// console.log(whitespaceMatches);   //Output: ["\t", "\n"]

// h / w 4 
// function countChar(str, char) {
//     if (str.length === 0) {
//       return 0;
//     } else {
//       let count = 0;
//       if (str[0] === char) {
//         count = 1;
//       }
//       return count + countChar(str.slice(1), char);
//     }
//   }
  
//   console.log(countChar('loremipsumdolor', 'o')); // Output: 3
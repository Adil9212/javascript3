// function printArrayValues(arr, i = 0) {
//     if (i === arr.length) {
//       return;
//     }
//     console.log(arr[i], 'array');
//     printArrayValues(arr, i + 1);
//   }
  
//   printArrayValues([1, 2, 3]);


  const text = "My name 457 is Alex";
    const nonDigits = text.match(/\D/g);
    console.log(nonDigits);
// function changeColor(color) {
//     console.log(color);
//     const button = document.getElementById(color);
//     button.style.backgroundColor = color;
//     setTimeout(function() {
//       if (color === 'red') {
//         button.style.backgroundColor = 'yellow';
//         console.log('Paint it yellow');
//       } else if (color === 'yellow') {
//         button.style.backgroundColor = 'green';
//         console.log('Paint it green');
//       } else if (color === 'green') {
//         button.style.backgroundColor = 'red';
//         console.log('Paint it red');
//       }
//     }, 3000);
//   }

//   function resetColors() {
//     const buttons = document.getElementsByTagName('button');
//     for (const i = 0; i < buttons.length; i++) {
//       buttons[i].style.backgroundColor = 'white';
//     }
//   }
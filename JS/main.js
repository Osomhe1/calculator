// // alert('hey')

// // declear click function
// function click() {
//     console.log('hey guys')
// }
// // add eventlisterner of click
// const keyPads = document.querySelector('.keypads');

// keyPads.addEventListener('click', (e) =>{
//     const { target } = event;
//     if (target.matches('button')) {
//    // Do something
//         console.log('hello!!')
// //      console.log('digit', target.value)
// //  }else{
// //      console.log('error')
//  }
// // if(!target ==)
// })

// // declear click function
// function click() {
//     console.log('hey guys')
// }


const keys = document.querySelector('.keypads')
// the calculator dispaly
// // const displayScreen = document.querySelector(".display_screen");

// keys.addEventListener('click', (e) => {
//   if (e.target.matches('button')) {
//     const key = e.target.textContent;

//     // console.log(key)
//   }
// })

// function inputDecimal(dot) {
//     if(!calculator.displayValue.includes(dot)){
//         calculator.displayValue += dot;
//     }
//     console.log(inputDecimal)
// }
// function decimaDot(){
//     if (action === 'decimal'){
//         console.log('decimal')
//     }
// }


// const keys = document.querySelector('.calculator_keys')

const display = document.querySelector('.calc-screen')
// the calculator dispaly
// const displayScreen = document.querySelector(".display_screen");

keys.addEventListener('click', (e) => {
    const { target } = event
  if (target.matches('button')) {
    const key = e.target

    const action = key.dataset.action

    const keyContent = key.textContent

    const displayNumber = display.textContent

    // console.log(keyContent);
// key value to be display here
    // if (!action) {
    //   if (displayNumber === '0') {
    //     display.textContent = keyContent
    //   } else {
    //     display.textContent = displayNumber + keyContent
    //   }
    // }
// decimal
    // if (action === "decimal"){
    // display.textContent = displayNumber + ".";
    // }

    if (target.classList.contains('operator')) {
    //   console.log('operator', target.value)
      return
    }

    if (target.classList.contains('decimal')) {
    //   console.log('decimal', target.value)
      return
    }

    if (target.classList.contains('delete')) {
      console.log('clear', target.value)
      return
    }

    // console.log('digit', target.value)
  }
})

function handleOperator(nextOperator){

}

const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
}

function updateDisplay() {
  const display = document.querySelector('.calc-screen')

  display.value =calculator.displayValue
}

updateDisplay();





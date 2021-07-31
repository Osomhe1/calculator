
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
}


function updateDisplay() {
  const display = document.querySelector('.calc-screen')

  display.value = calculator.displayValue
}

updateDisplay();

const Keys = document.querySelector('.keypads')

Keys.addEventListener('click', (e)=>{
    const target = e.target
    const {value} = target


     if (!target.matches('button')) {
       return
     }

     switch (value){
         case '+':
         case '-':
        case '*':
        case '/':
        case '=':
            handleOperator(value)
            break;
        case '.':
            inputDecimal(value)
            break;
        case 'reset':
            resetCalculator();
            break;
        default:
            if(Number.isInteger(parseFloat(value))) {
                inputDigit(value)
            }
            
     }
       updateDisplay()


    //  if(target.classList.contains('operator')){
    //     //  console.log('operator', target.value);
    //      handleOperator(target.value)
    //      updateDisplay()
    //      return;
    //  }

    //   if (target.classList.contains('decimal')) {
    //     // console.log('decimal', target.value)
    //     inputDecimal(target.value)
    //     updateDisplay()

    //     return
    //   }

    //    if (target.classList.contains('reset')) {
    //      console.log('reset', target.value)
    //      resetCalculator()
    //      updateDisplay()

    //      return
    //    }

    // //    console.log('digit', target.value)
    //    inputDigit(target.value)
    //    updateDisplay();
    //    handleOperator(target.value)



})

function inputDigit(digit) {

    const { displayValue, waitingForSecondOperand } = calculator;
    if(waitingForSecondOperand === true){
        calculator.displayValue = digit
        calculator.waitingForSecondOperand === false
    }else{
    calculator.displayValue =
      displayValue === '0' ? digit : displayValue + digit

    }
}
console.log(calculator)


function inputDecimal(dot){

    if (calculator.waitingForSecondOperand === true){
        calculator.displayValue = '0.'
        calculator.waitingForSecondOperand === false;
        return
    }


    if(!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot;
    }
}

 const calculate = (firstOperand, operator, secondOperand) => {
        
           if(operator === '+' ){
            //    result = parseFloat(firstOperand) + parseFloat(secondOperand)
            return firstOperand + secondOperand
           }
           else if(operator === '-' ){
            //    result = parseFloat(firstOperand) - parseFloat(secondOperand)
            return firstOperand - secondOperand
           }
           else if(operator === '/' ){
            //    result = parseFloat(firstOperand) / parseFloat(secondOperand)
            return firstOperand / secondOperand
           }
           else if(operator === '*' ){
            //    result = parseFloat(firstOperand) * parseFloat(secondOperand)
            return firstOperand * secondOperand
           }

           return secondOperand;
       }

function handleOperator(nextOperator) {
 const { firstOperand, displayValue, operator } = calculator;
 const inputValue = parseFloat(displayValue)

 if (operator && calculator.waitingForSecondOperand) {
   calculator.operator = nextOperator
   console.log(calculator)
   return
 }

 if(firstOperand === null & !isNaN(inputValue)){
     calculator.firstOperand = inputValue
 }else if(operator){
         const result = calculate(firstOperand, inputValue, operator);

        //  calculator.displayValue = String(result)
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`
         calculator.firstOperand = result;
     
 }

 calculator.waitingForSecondOperand = true;
 calculator.operator = nextOperator;
 console.log(calculator);
}

function resetCalculator() {
  calculator.displayValue = '0'
  calculator.firstOperand = null
  calculator.waitingForSecondOperand = false
  calculator.operator = null
  console.log(calculator)
}


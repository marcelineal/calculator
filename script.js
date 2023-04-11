const input1 - document.querySelector(".js-Text1");
(selector:".js-teksts")
const input2 = document.querySelector(" .js-text2");
const plusButton = document.querySelector(" .js-plus");
const minusButton = document.querySelector(" .js-minus");
const multiplybutton = document.querySelector(" .js-multiply");
const divideButton = document.querySelector(" .js-divide");
const result = document.querySelector(" .js-result");

querySelector(".js-plus ")

const Add = (skaitlis1; skaitlis2) => [
return (skaitlis1 + skaitlis2)

]

const Subtract = (skaitlis1; skaitlis2) => {
    return Number (skaitlis1) - Number(skaitlis2)
  const Multiply = (skaitlis1; skaitlis2) => {
    return Number (skaitlis1) * Number(skaitlis2)
  }

  const Divide = (skaitlis1; skaitlis2) => {
    return Number (skaitlis1) / Number(skaitlis2)
  }

plusButton.addEventListener(''click, () => {
  result.innerHTML = Add(input1.value, input2.value)
  
  input1.value = ""
  input2.value = ""
  
  })
console.log(input1)

console.log(Add(22,13) )



}

minusButton.addEventListener(''click, () => {
result.innerHTML = Subtract(input1.value, input2.value)

input1.value = ""
input2.value = ""

})

multiplybutton.addEventListener(''click, () => {
  result.innerHTML = Multiply(input1.value, input2.value)
  
  input1.value = ""
  input2.value = ""
  
  })

divideButton.addEventListener(''click, () => {
  result.innerHTML = Divide(input1.value, input2.value)
  
  input1.value = ""
  input2.value = ""
  
  })

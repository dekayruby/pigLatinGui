


const pigLatin = (word) => {
 
    let string = word.trim().toLowerCase();
    
    let positionOfFirstVowel = () => {
      
    for (let i = 0 ; i < string.length ; i++){
      let letter = string[i];
      if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
      return i }
      
      }
  return -1
  }
  let index = positionOfFirstVowel(string)
  
  if(index === -1){
    return string += 'ay'
  
  } else if (index === 0) {
  return string += 'yay'
  }
  else {
    let slicey = string.slice(index) + string.slice(0,index) + 'ay';
    return slicey
  }
  }

let button = document.getElementById("inputButton")
button.addEventListener("click", function() {
 
console.log("button clicked")

let input = document.getElementById("inputBox")
let text = pigLatin(input.value)

console.log("word translated: " , text)


let p = document.createElement("p")
let div = document.getElementById("inputDiv")
div.appendChild(p)

p.innerText = text
input.value = ""

})


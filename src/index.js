const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};


//console.log(messageConverted.join(""));
function decode(expr) {
  let arr = [];
  let res = [];
  let strLen = expr.length / 10;
  for (let i = 0; i < strLen; i++) {
    //arr[i]=new Array(expr.slice(i*10, (i+1)*10))
    arr.push(expr.slice(i * 10, (i + 1) * 10))
    if (arr[i] === "**********") {
      arr[i] = " "
    }
  }
  for(let i=0; i<arr.length; i++){
    arr[i]=arr[i].split("");
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < 10; j++) {
      if (arr[i][j] == "1" && arr[i][j + 1] == "0") {
        arr[i].splice(j, 2, ".");
      }
      if (arr[i][j] == "1" && arr[i][j + 1] == "1") {
        arr[i].splice(j, 2, "-");
      }
    }
  }
  for (let i = 0; i < arr.length; i++){
    arr[i]=arr[i].filter(item=>item!="0");
    arr[i]=arr[i].join("");
  }
  for(let i=0; i<arr.length; i++){
    for(let key in MORSE_TABLE){
      if(key==arr[i]){
        
  arr.splice(i,1,MORSE_TABLE[key])
  }
  }
  }
  return arr.join("");
}

module.exports = {
  decode
}
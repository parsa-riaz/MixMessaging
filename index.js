let leftArray = [
  "All our dreams can come true so",
  "Don't let limits bound you and",
  "Your passion is waiting for your courage to catch up so",
  "Work hard for what you want and",
];
let rightArray = [
  "Don't give up",
  "Be patience",
  "Knock diffrent doors until you get the one to success",
  "Make progress slowly but steadily",
];

let leftRandomNumber = Math.floor(Math.random() * 4);
let rightRandomNumber = Math.floor(Math.random() * 4);

console.log(
  getQuote(leftArray[leftRandomNumber], rightArray[rightRandomNumber])
);

function getQuote(msg1, msg2) {
  return msg1 + " " + msg2;
}

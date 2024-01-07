const collectiveWisdom = {
  signInfo: ["star", "moon", "sun", "comet"],
  luckyNumber: "",
  fortuneOutput: [
    "terrible luck",
    "bad luck",
    "ok luck",
    "good luck",
    "great luck",
  ],
  advice: ["go out and eat", "not read this", "play more", "trust no one"],
};

function generateRandomNumber(index) {
  return Math.floor(Math.random() * index);
}

function getLuckyNumber() {
  let number = "";
  console.log(number);
  do {
    let digit = generateRandomNumber(10);
    number = number + digit;
  } while (number.length < 4);
  return number;
}

const luckyNumber = getLuckyNumber();

for (const prop in collectiveWisdom) {
  let randomIndex = generateRandomNumber(collectiveWisdom[prop].length);
  switch (prop) {
    case "signInfo":
      console.log(`Your sing is ${collectiveWisdom[prop][randomIndex]}`);
      break;
    case "luckyNumber":
      console.log(`Your Lucky number today is: ${luckyNumber}`);
      break;
    case "fortuneOutput":
      console.log(`You are having ${collectiveWisdom[prop][randomIndex]}`);
      break;
    case "advice":
      console.log(`You should: "${collectiveWisdom[prop][randomIndex]}"`);
      break;
  }
}

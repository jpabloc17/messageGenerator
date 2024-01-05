const collectiveWisdom = {
  signInfo: ["star", "moon", "sun", "comet"],
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

for (const prop in collectiveWisdom) {
  let randomIndex = generateRandomNumber(collectiveWisdom[prop].length);
}

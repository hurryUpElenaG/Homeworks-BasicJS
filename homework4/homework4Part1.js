function tellStory(array) {
  let name = array[0];
  let mood = array[1];
  let activity = array[2];

  return `This is ${name}. ${name} is a nice person and is feeling ${mood} today. ${name} is going to ${activity} all day.`;
}

array = ["Elena", "happy", "swim"];
console.log(tellStory(array));

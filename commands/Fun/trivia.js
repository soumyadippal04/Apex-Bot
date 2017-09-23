const request = require("snekfetch");
const Entities = require("html-entities").AllHtmlEntities;
// Used to decode the HTML encoding of the trivia API
const entities = new Entities();

const gameStatus = new Set();

exports.run = async (client, msg, [type, duration]) => {
  const reply = await msg.channel.send("```Searching for a random trivia (this can take a few seconds)```");

  // Check Game Status
  if (gameStatus.has(msg.channel.id)) {
    return reply.edit("```A game of trivia is already going on in this channel. Please wait until it's over before starting a new one.```");
  }
  gameStatus.add(msg.channel.id);


  // Duration
  if (duration) {
    if (duration < 30 || duration > 60) {
      return reply.edit(`\`\`\`The duration cannot be \`${duration}\`. It must be in between 30 and 60.\nPlease try again.\`\`\``);
    }
    const time = duration * 1000;
  } else {
    const time = 30000;
  }

  // Type
  let categoryId;
  if (type === "film") {
    categoryId = 11;
  } else if (type == "tv") {
    categoryId = 14;
  } else {
    categoryId = [11, 14][Math.floor(Math.random() * 2)];
  }

  /* Trivia */
  // Variables
  /* eslint-disable camelcase */
  let category;
  let difficulty;
  let question;
  let question_type;
  let question_display;
  let correct_answer;
  let incorrect_answers = [];
  let possible_answers = [];
  let displayed_answers = "";
  // Request
  const url = `https://opentdb.com/api.php?amount=1&category=${categoryId}`;
  const req = await request.get(url).then(data => JSON.parse(data.text));
  if (!req || !req.results || req.results.length === 0) {
    console.log(req);
    reply.edit(`\`\`\`Error:\n${JSON.stringify(req)}\`\`\``);
    gameStatus.delete(msg.channel.id);
    return null;
  }
  category = req.results[0].category;
  correct_answer = req.results[0].correct_answer;
  incorrect_answers = req.results[0].incorrect_answers;
  difficulty = req.results[0].difficulty;
  question = req.results[0].question;
  question_type = req.results[0].type;

  // Checks wether the question is boolean or not
  if (question_type === "boolean") {
    question_display = `*Difficulty: ${difficulty}*\n\n**True or false?**\n${entities.decode(question)}`;
  } else {
    for (let i = 0; i < incorrect_answers.length; i++) {
      possible_answers.push(incorrect_answers[i]);
    }
    possible_answers.push(correct_answer);
    possible_answers = client.funcs.shuffleArray(possible_answers);
    for (let i = 0; i < possible_answers.length; i++) {
      displayed_answers += `***${i + 1}.** ${possible_answers[i]}*\n`;
      possible_answers[i] = possible_answers[i].toLowerCase(); // Lower case so the message collector doesn't have to do it
    }
    question_display = `**Difficulty: ${difficulty}**\n\n${entities.decode(question)}\n\n${entities.decode(displayed_answers)}`;
  }

  /* Result */
  const embed = await new client.methods.Embed()
    .setAuthor("Trivia")
    .setTitle(category)
    .setColor(0xf37917)
    .setThumbnail("http://i.imgur.com/zPtu5aP.png")
    .setFooter("Please write the whole answer")
    .setDescription(`\n_${question_display}_\n\n`);

  await reply.edit({ embed });

  // Create a message collector
  const participants = [];
  let winner = "";
  const collector = msg.channel.createMessageCollector(
    answer => possible_answers.includes(answer.content.toLowerCase()),
    { time },
  );
  collector.on("collect", (answer) => {
    if (answer.content.toLowerCase() === correct_answer.toLowerCase() && !participants.includes(answer.author.id)) {
      gameStatus.delete(msg.channel.id); // Closes the game
      winner = msg.author;
      collector.stop(); // Closes the collector
    } else if (!participants.includes(answer.author.id)) {
      participants.push(answer.author.id);
      msg.reply(`**${answer.content}** is not the correct answer. Better luck next time!`);
    } else {
      msg.reply("You already tried! Wait for another game to start before participating again!");
    }
  });
  collector.on("end", () => {
    if (winner.length === 0) { // Nobody found
      msg.channel.send(`Seems no one got it! The right answer was **${entities.decode(correct_answer)}**`);
    } else { // We have a winner
      msg.channel.send(`We have a winner! ${winner} had a right answer with **${entities.decode(correct_answer)}**!`);
      winner = ""; // Clear the winner
    }
    // Clear the participants
    for (let i = participants.length; i > 0; i--) {
      participants.pop();
    }
    gameStatus.delete(msg.channel.id); // Closes the game
  });
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ["quizz"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: ["shuffleArray"],
};

exports.help = {
  name: "trivia",
  description: "Brings up a random trivia about movies or TV shows.",
  usage: "[film|tv] [duration:int]",
  usageDelim: " ",
};

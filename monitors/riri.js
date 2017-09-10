exports.conf = {
  enabled: true,
  // Change to true if the filter should ignore other bots
  ignoreBots: false,
  // Change to true if the filter should ignore selfBots
  ignoreSelf: false,
};

exports.run = (client, msg) => {
  // Do not delete messages from the Bot itself otherwise it will run on a loop when it sends msgs in a DM to author or reports to a channel.
  if (msg.author.bot) return;
  // Add your list of words you want to filter. This is a very powerful filter so be careful of using. For example, the word 'assign' will not be allowed if the word `ass` is present in the swear words. In other filters, they are easily breakable by typing 'ass.' but this filter will delete these types of breaks.
  const swearWords = ["riri"];

  const badWords = swearWords.filter(word => msg.content.toLowerCase().includes(word));
  if (badWords.length > 0) {
    let badWordList = [];
    for (let i = 0; i < badWords.length; i++) {
      badWordList += badWords[i];
    }
    if (msg.guild.id != '302113426233229314') return
      const ayy = client.emojis.find("name", "madman");
    msg.channel.send(`Riri LMAO ${ayy}`)
  }
};
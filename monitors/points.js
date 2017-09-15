exports.run = (client, msg) => {
  if (!msg.guild.settings.pointsSystem) return;
  if (msg.content.startsWith(msg.guild.settings.prefix) || msg.channel.type !== "text") return;
  const score = client.points.get(`${msg.guild.id}-${msg.author.id}`) || {
    points: 0, level: 0, user: msg.author.id, guild: msg.guild.id, daily: 1504120109,
  };
  score.points++;
  const curLevel = Math.floor(0.1 * Math.sqrt(score.points));
  if (score.level < curLevel) {
    msg.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
    score.level = curLevel;
  }
  client.points.set(`${msg.guild.id}-${msg.author.id}`, score);
};

exports.conf = {
  enabled: true,
  // Change to true if the filter should ignore other bots
  ignoreBots: true,
  // Change to true if the filter should ignore selfBots
  ignoreSelf: true,
};

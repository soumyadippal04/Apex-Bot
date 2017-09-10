const Discord = require("discord.js")
exports.run = (client, msgReaction, user) => {
  if (msgReaction.emoji.name === "⭐") {
    let starBoard = client.channels.find('name', 'starboard')
    if (!starBoard) return
    const embed = new Discord.RichEmbed()
    .setColor(msgReaction.message.guild.member(client.user.id).highestRole.color || 0)
    .setTitle(msgReaction.message.author.username)
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL)
    .setDescription(msgReaction.msg.content);
    return client.channels.get(starBoard.id).send({embed});
  }
}

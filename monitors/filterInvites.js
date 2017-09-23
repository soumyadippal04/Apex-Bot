
exports.conf = {
  enabled: true,
  ignoreBots: true,
  ignoreSelf: false,
};

exports.run = (client, msg) => {
   if (msg.channel.type !== 'text' || msg.guild.settings.filterInvites !== true) return null;
        if (!/(https?:\/\/)?(www\.)?(discord\.(gg|li|me|io)|discordapp\.com\/invite)\/.+/.test(msg.content)) return null;
       msg.reply("Posting invite links isn't allowed on this server..")
       return msg.delete()
            .catch(err => client.emit('log', err, 'error'));
};//

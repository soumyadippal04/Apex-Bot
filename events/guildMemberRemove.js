exports.run = (client, member) => {
   if(!member.guild.settings.leaveMessage) return
   if(!member.guild.settings.welcomeChannel) return
    const text = member.guild.settings.leaveMessage
      .replace(/%MEMBER%/g, member)
      .replace(/%MEMBERNAME%/g, member.user.username)
      .replace(/%SERVER%/g, member.guild.name);
    member.guild.channels.get(member.guild.settings.welcomeChannel).send(text)
}
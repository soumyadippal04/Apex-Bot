exports.run = (client, member) => {
  if(!member.guild.settings.welcomeMessage) return
  if(!member.guild.settings.welcomeChannel) return
    const text = member.guild.settings.welcomeMessage
      .replace(/%MEMBER%/g, member)
      .replace(/%MEMBERNAME%/g, member.user.username)
      .replace(/%SERVER%/g, member.guild.name);
    member.guild.channels.get(member.guild.settings.welcomeChannel).send(text)

    if(!member.guild.settings.autoRole) return
    member.addRole(member.guild.settings.autoRole)
}
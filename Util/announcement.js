module.exports = (msg) => {
    const announcementID = msg.guild.settings.announcementRole;
    if (announcementID === null) return msg.reply("No subscriber role configured.");
    const role = msg.guild.roles.get(announcementID);
    if (!role) return msg.reply("No subscriber role found in server roles.");
    if (role.position >= msg.guild.me.highestRole.position) return msg.reply("Can't add the role as it is as high or higher than me.");
    return role;
};
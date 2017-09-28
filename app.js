const { Client, PermLevels } = require("klasa");
const { token } = require("./config.json");
const Enmap = require("enmap");

const permStructure = new PermLevels()
  .addLevel(0, false, () => true)
  .addLevel(2, false, (client, msg) => {
    if (!msg.guild || !msg.guild.settings.modRole) return false;
    const modRole = msg.guild.roles.get(msg.guild.settings.modRole);
    return modRole && msg.member.roles.has(modRole.id);
  })
  .addLevel(3, false, (client, msg) => {
    if (!msg.guild || !msg.guild.settings.adminRole) return false;
    const adminRole = msg.guild.roles.get(msg.guild.settings.adminRole);
    return adminRole && msg.member.roles.has(adminRole.id);
  })
  .addLevel(4, false, (client, msg) => msg.guild && msg.author.id === msg.guild.owner.id)
  .addLevel(5, false, (client, msg) => msg.guild && msg.member.hasPermission("ADMINISTRATOR"))
  .addLevel(9, true, (client, msg) => msg.author.id === client.config.ownerID)
  .addLevel(10, false, (client, msg) => msg.author.id === client.config.ownerID);

class Apex extends Client {

  constructor(options) {
    super(options);
    this.points = new Enmap({ name: "points", persistent: true });
  }

}

const client = new Apex({
    clientOptions: {
        fetchAllMembers: false
    },
    prefix: '-',
    cmdEditing: true,
    cmdLogging: true,
    typing: true,
    readyMessage: (client) => `${client.user.tag}, Ready to serve ${client.guilds.size} guilds and ${client.users.size} users`
});

client.login(config.token);

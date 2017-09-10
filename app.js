const { Client, PermLevels } = require("komada");
const config = require("./config.json");

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

const client = new Client({
  ownerID: "257847417183928320",
  prefix: "-",
  permStructure,
  cmdEditing: true,
  clientOptions: {
    fetchAllMembers: false,
  },
});

client.login(config.token);

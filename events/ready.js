exports.run = async(client) => {
  client.user.setActivity(`-help | ${client.guilds.size} servers`);
  // Both `wait` and `client.log` are in `./modules/functions`.
  console.log( `Ready to spy on ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} servers.`, "Ready!");
}

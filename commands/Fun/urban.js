const request = require("snekfetch");

exports.run = async (client, msg, [search, resultNum = 0]) => {
  const url = `http://api.urbandictionary.com/v0/define?term=${search}`;
  const body = await request.get(url).then(data => JSON.parse(data.text));
  if (resultNum > 1) resultNum--;

  const result = body.list[resultNum];
  if (!result) return msg.send("No entry found.");
  const wdef = result.definition.length > 1000
    ? `${client.funcs.splitText(result.definition, 1000)}...`
    : result.definition;
  const embed = new client.methods.Embed()
    .setTitle(result.word)
    .setDescription(wdef)
    .setURL(result.permalink)
    .setColor(16586)
    .setThumbnail("http://i.imgur.com/qNTzb3k.png")
    .setFooter(`By ${result.author}`)
    .addField("Example", `*${result.example}*`);

  return msg.send({ embed });
};

exports.conf = {
  enabled: true,
  selfbot: false,
  runIn: ["text", "dm", "group"],
  aliases: ["ud"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: ["splitText"],
  requiredModules: ["snekfetch"],
};

exports.help = {
  name: "urban",
  description: "Searches the Urban Dictionary library for a definition to the search term.",
  usage: "<search:str> [resultNum:int]",
  usageDelim: ", ",
  type: "commands",
};

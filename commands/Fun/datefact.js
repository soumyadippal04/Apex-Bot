
exports.run = (client, message) => {
  require("request")("http://numbersapi.com/random/date?json",
    (err, res, body) => {
      const data = JSON.parse(body);
      if (data && data.text) {
        message.channel.send(data.text);
      }
    });
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "datefact",
  description: "Gives you math nerds a cool date fact.",
  usage: "",
  usageDelim: "",
};

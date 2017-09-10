
exports.run = (client, message) => {
  require("request")(
    "http://numbersapi.com/random/year?json",
    (err, res, body) => {
      const data = JSON.parse(body);
      if (data && data.text) {
        message.channel.send(data.text);
      }
    },
  );
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
  name: "numberfact",
  description: "Shows you geeks a random number fact.",
  usage: "",
  usageDelim: "",
};

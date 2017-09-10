exports.conf = {
  enabled: true,
  // Change to true if the filter should ignore other bots
  ignoreBots: true,
  // Change to true if the filter should ignore selfBots
  ignoreSelf: false,
};

exports.run = (client, msg) => {
    if (msg.content.toLowerCase() === "ayy") {
        msg.send("lmao")
    }
}
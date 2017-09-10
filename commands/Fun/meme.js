const AuthDetails = {
  imgflip_username: "xSoumil",
  imgflip_password: "pasiphae07",
};

const meme = {
  brace: 61546,
  mostinteresting: 61532,
  fry: 61520,
  onedoesnot: 61579,
  yuno: 61527,
  success: 61544,
  allthethings: 61533,
  doge: 8072285,
  drevil: 40945639,
  skeptical: 101711,
  notime: 442575,
  yodawg: 101716,
  awkwardpenguin: 61584,
  grumpycat: 405658,
};

exports.run = (client, msg, args) => { // eslint-disable-line no-unused-vars
  const tags = msg.content.split("\"");
  const memetype = tags[0].split(" ")[1];
  const Imgflipper = require("imgflipper");
  const imgflipper = new Imgflipper(AuthDetails.imgflip_username, AuthDetails.imgflip_password);
  imgflipper.generateMeme(meme[memetype], tags[1] ? tags[1] : "", tags[3] ? tags[3] : "", (err, image) => {
    msg.channel.send(image);
  });
};
exports.help = {
  name: "meme",
  description: "Generates a meme.",
  usage: "<memetype:str>",
  usageDelim: "",
  extendedHelp: "Meme types include brace, mostinteresting, onedoesnot, yuno, success, allthethings, doge, drevil, skeptical, notime, yodawg, awkwardpenguin, fry and grumpycat. \nExample: -meme onedoesnot \"Top text\" \"Bottom text\" ",
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

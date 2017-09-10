const DefaultObj = {
  playing: false,
  songs: [],
};
const yt = require("ytdl-core");
const getInfoAsync = require("util").promisify(yt.getInfo);
const snekfetch = require("snekfetch");

const { GOOGLE_SEARCH } = "";
const YouTubeRegExp = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/\S*(?:(?:\/e(?:mbed)?)?\/|watch\/?\?(?:\S*?&?v=))|youtu\.be\/)([\w-]{11})(?:[^\w-]|$)/;
const fetchURL = url => snekfetch.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${url}&key=${GOOGLE_SEARCH}`)
  .then(result => result.body);

const getURL = async (url) => {
  const id = YouTubeRegExp.exec(url);
  if (id) return `https://youtu.be/${id[1]}`;
  const data = await fetchURL(encodeURIComponent(url));
  const video = data.items.find(item => item.id.kind !== "youtube#channel");

  return video ? `https://youtu.be/${video.id.videoId}` : null;
};

exports.run = async (client, msg, [song]) => {
  const reply = await msg.channel.send("Searching for your song(this can take a few seconds)");
  const youtubeURL = await getURL(song);
  if (!youtubeURL) throw "Not found.";

  const info = await getInfoAsync(youtubeURL);
  if (client.queue.has(msg.guild.id) === false) client.queue.set(msg.guild.id, DefaultObj);
  client.queue.get(msg.guild.id).songs.push({
    url: youtubeURL,
    title: info.title,
    seconds: info.length_seconds,
    requester: msg.author.username,
  });

  return reply.edit(`🎵 Added **${info.title}** to the queue 🎶`);
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "add",
  description: "Adds a song the the queue.",
  usage: "<song:str>",
  usageDelim: "",
  extendedHelp: "",
};

exports.init = (client) => {
  client.queue = new client.methods.Collection();
};

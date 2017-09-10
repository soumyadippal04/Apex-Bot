const Discord = require("discord.js");
const {caseNumber} = require('../../Util/caseNumber.js');
exports.run = async (client, msg, [action, ...value]) => {
	if (msg.guild.id != "348150791703625739") return;
	if (action === "sou") {
		const modlog = client.channels.find('name', 'requests-accept-deny');
		const caseNum = await caseNumber(client, modlog);
		const embed = new Discord.RichEmbed()
		.setAuthor(msg.guild.name, msg.guild.iconURL)
		.setFooter(`Case ${caseNum}`)
        .setColor(0xffca2a)
        .setTimestamp()
		.setDescription(`**FX Request:**\n **Requestee:** ${msg.author.username}\n**Designer:** Stitch\n**Description:** ${value.join(" ")}\n Status: Pending`)
		client.channels.get("351312428551634947").send({ embed });
	} else
	if (action === "kart") {
		const modlog = client.channels.find('name', 'requests-accept-deny');
		const caseNum = await caseNumber(client, modlog);
		const embed = new Discord.RichEmbed()
		.setAuthor(msg.guild.name, msg.guild.iconURL)
		.setFooter(`Case ${caseNum}`)
        .setColor(0xffca2a)
        .setTimestamp()
		.setDescription(`**FX Request:**\n**Requestee:** ${msg.author.username}\n**Designer:** Kart\n**Description:** ${value.join(" ")}\n**Status**: Pending`)
		client.channels.get("351312428551634947").send({ embed });
	} else
		
	if (action === "bang") {
		const modlog = client.channels.find('name', 'requests-accept-deny');
		const caseNum = await caseNumber(client, modlog);
		const embed = new Discord.RichEmbed()
		.setAuthor(msg.guild.name, msg.guild.iconURL)
        .setColor(0xffca2a)
		.setFooter(`Case ${caseNum}`)
        .setTimestamp()
		.setDescription(`**FX Request:**\n**Requestee:** ${msg.author.username}\n**Designer:** BangBang\n**Description:** ${value.join(" ")}\n**Status**: Pending`)
		client.channels.get("351312428551634947").send({ embed });
	} else
		
	if (action === "carl") {
		const modlog = client.channels.find('name', 'requests-accept-deny');
		const caseNum = await caseNumber(client, modlog);
		const embed = new Discord.RichEmbed()
		.setAuthor(msg.guild.name, msg.guild.iconURL)
		.setFooter(`Case ${caseNum}`)
        .setColor(0xffca2a)
        .setTimestamp()
		.setDescription(`**FX Request:**\n**Requestee:** ${msg.author.username}\n**Designer:** Carl\n**Description:** ${value.join(" ")}\n**Status**: Pending`)
		client.channels.get("351312428551634947").send({ embed });
	} else
		
	if (action === "konan") {
		const modlog = client.channels.find('name', 'requests-accept-deny');
		const caseNum = await caseNumber(client, modlog);
		const embed = new Discord.RichEmbed()
		.setAuthor(msg.guild.name, msg.guild.iconURL)
		.setFooter(`Case ${caseNum}`)
        .setColor(0xffca2a)
        .setTimestamp()
		.setDescription(`**FX Request:**\n**Requestee:** ${msg.author.username}\n**Designer:** Konan\n**Description:** ${value.join(" ")}\n**Status**: Pending`)
		client.channels.get("351312428551634947").send({ embed });
	}
}

exports.conf = {
    enabled: true,
    selfbot: false,
    runIn: ["text"],
    aliases: ["w"],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
    requiredModules: [],
  };

  exports.help = {
    name: "request",
    description: "",
    usage: "<action:str><value:str>[...]",
    usageDelim: " ",
	extendedHelp: `Artist names are: bang, stitch, kart. Names are case sensitive.\nExample: [prefix]request stitch I need a cool logo!`,
    type: "commands",
  };

  
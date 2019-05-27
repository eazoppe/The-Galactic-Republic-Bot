const commando = require('discord.js-commando');
const Discord = require('discord.js');
class InfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'info',
            memberName: 'info',
            description: 'Says some things about the bot and the Roblox group.'
        });
    }

    async run(message, args)
    {
        let embed = new Discord.RichEmbed()
        .setTitle("Info about The Galactic Republic Bot")
        .setDescription("I am eaziooe Bot. I am made by eazoppe.")
        .addField("I was first made on 5/26/2019. I will be The Galactic Republic Custom Discord bot. From eazoppe, we hope you can help us grow and enjoy The Galactic Republic.")
        .addField("The Galactic Republic is a a group where you can roleplay as a clone trooper and be promoted to lead and host trainings.")
        .addField("If you find any bugs with me then you should tell it to eazoppe.")
        .addField("Now you know a little more about this bot.")
        .setFooter("I am only to be used in The Galactic Republic Discords. This bot is closed off for all other servers.")
        .setColor(0x0ac1ff);
        let dm = message.author;
        try {
            dm.sent(embed);
        }catch(e) {
            message.channel.send(embed)
        }
    }
}

module.exports = InfoCommand;


const commando = require('discord.js-commando');
const Discord = require('discord.js');
class InfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'rules',
            group: 'rules',
            memberName: 'rules',
            description: 'Lists the rules.'
        });
    }
    hasPermission(msg) {
        if(!msg.guild) return this.client.isOwner(msg.author);
        return msg.member.hasPermission('ADMINISTRATOR') || this.client.isOwner(msg.author);
    };

    async run(message, args)
    {
        let embed = new Discord.RichEmbed()
        .setTitle("The Galactic Republic's GCA Discord Server Rules")
        .setDescription("")
        .addField("__A.__", "First and foremost, all Roblox rules apply.",false)
        .addField("__B.__", "Not all rules are listed.",false)
        .addField("__1:__", "Advertisement of any-kind will result in removal; unless if you have permission.",false)
        .addField("__2:__", "Disrespecting or being scowling, toxic or dramatic will result in fair warning.",false)
        .addField("__3:__", "Public or private directed threats will result in ban. ",false)
        .addField("__4:__", "Public nudity will not be tolerated in any manner. (if you wouldn’t show it to your mother, dont post it here).",false)
        .addField("__5:__", "Activism or protest will not be regarded for, and will result in removal.",false)
        .addField("__6:__", "Mentioning a administrator without probable cause, is not allowed. ",false)
        .addField("__7:__", "Spamming sentences, mentions, terms, ect. will result in ban.",false)
        .setFooter("This is the offical server rules")
        .setColor(0xff0000);
        let dm = message.author;
        try {
            dm.sent(embed);
        }catch(e) {
            message.channel.send(embed)
        }
        message.delete().catch()
    }
}

module.exports = InfoCommand;


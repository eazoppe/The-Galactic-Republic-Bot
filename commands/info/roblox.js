const commando = require('discord.js-commando');
const Discord = require('discord.js');


class GroupsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'group',
            group: 'info',
            memberName: 'group',
            description: 'Shows The Roblox Group for The Galactic Republics GCA'
        });
    }

    async run(message, args)
    {
        let embed = new Discord.RichEmbed()
        .setTitle("The Offical The Galactic Republic's GCA Roblox Group")
        .setDescription("This are the Offical Group of The Galactic Republic's GCA. If you are not in the group, pend and you will be accpeted soon.")
        .addField("Roblox Group: https://www.roblox.com/groups/4579018/The-Galactic-Republics-Grand-Clone-Army")
        .setColor(0x0ddbeb);
        let dm = message.author;
        try {
            dm.sent(embed);
        }catch(e) {
            message.channel.send(embed)
        }
    }
}

module.exports = GroupsCommand;
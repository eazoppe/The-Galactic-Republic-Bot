const Commando = require('discord.js-commando');
const bot = new Commando.Client();

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('info', 'Info');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('rules', 'Rules');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.currentTeamMembers = [];
global.servers = {};

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
  setInterval(function() {
      bot.user.setActivity('Keeping The Galactic Republic running.');
  //Update every 1 seconds
  }, 1 * 1000);
  });


bot.on("guildMemberAdd", function(member)
{
    member.send("Welcome to The Galactic Republic!")
});

bot.on('error', error => { console.error(error)});
bot.login(process.env.token);


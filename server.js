//Configuration
const http = require('http');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.get("/", function(request, response) {
    response.sendFile(__dirname + '/index.html');
});
app.get("/wiki/home", function(request, response) {
    response.sendFile(__dirname + '/public/wiki/home.html');
})
app.get("/wiki/reg", function(request, response) {
    response.sendFile(__dirname + '/public/wiki/reg.html');
});
app.get("/wiki/eco", function(request, response) {
    response.sendFile(__dirname + '/public/wiki/eco.html');
});
app.get("/wiki/music", function(request, response) {
    response.sendFile(__dirname + '/public/wiki/music.html');
});
app.get("/wiki/suggest", function(request, response) {
    response.sendFile(__dirname + '/public/wiki/suggest.html');
});
app.get("/wiki/suggestions", function(request, response) {
    response.sendFile(__dirname + '/public/wiki/suggestions.html');
});

app.get("/wiki/misc", function(request, response) {
    response.sendFile(__dirname + '/public/wiki/misc.html');
});
app.get("/wiki/loganpremium", function(request, response) {
    response.sendFile(__dirname + '/public/wiki/loganpremium.html');
});
app.get("/wiki/nasa", function(request, response) {
    response.sendFile(__dirname + '/public/wiki/nasa.html');
});
  
  
  
  
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');

var economy = require('discord-eco');
const chalk = require('chalk');
const fs = require("fs");
const config = require("./config.json");
  const settings = require("./settings.json");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const {
    Client,
    Util
} = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyB2NjfqpDEeuRwluBSdkAA9XpIZG6KfwK0");
//Yes I know. If you are on glitch.com there is an error here. ITS SO DUMB
const queue = new Map();
const favsong = ["https://www.youtube.com/watch?v=L-aN4Y84SYk",
    "https://www.youtube.com/watch?v=ODV-_VPTv1I",
    "https://www.youtube.com/watch?v=hMWFOyb-abs",
    "https://www.youtube.com/watch?v=b7FcWFNgS64",
    "https://www.youtube.com/watch?v=x3lP-7Sg4Uc",
    "https://www.youtube.com/watch?v=LpNMIzXTISY",
    "https://www.youtube.com/watch?v=TkDU8P9BVhU"
]
var midi = "297096161842429963"
var cur = config.currency
var moncol = "28894c"
const daily = require("./daily.json");
const TeaCup = config.TeaCup
const mode = config.mode
var profil = require("./pro.json");
//Bot:
client.on("ready", () => {
    console.log(`Logan is Pluged in.`);
    if (mode.matniance == true) return;
client.user.setPresence({ game: { name: 'Undergoing Maintiance' }, status: 'dnd' })
  .then(/*console.log*/)
  .catch(console.error);
});client.on("message", async message => {
    //Emoji: 
   if  (message.channel.type == "dm") return 
    const sechan = client.channels.get('437370320001695754');
    if (message.content.length == 0) return;
    var MessageEmbed = new Discord.RichEmbed()
        .setTitle(message.author.username + " " + message.author.id + " " + " sent a message in " + message.guild.name)
        .addField("In channel #" + message.channel.name, message.content)
        .setFooter("l.devsay " + message.channel.id, message.author.displayAvatarURL)
        .setColor('3399FF')
    if (message.channel.id === sechan.id) {} else {
        sechan.send(MessageEmbed)
    }
    });

const db = require('quick.db');

 let channel =  client.channels.get('452974835124011008');
 client.on('newSuggestion', async key => {
  
    let callback = await db.fetch('entries', { target: key });

    const embed = new Discord.MessageEmbed()
      .setColor(0xffffff)
      .setTitle('New Site Suggestion')
      .setURL(`https://logan-web.glitch.me/view?key=${key}`)
      .setDescription(`**ID:** ${key}\n**Author:** ${callback.username}\n\n**Title:** ${callback.title}\n**Description:** ${callback.desc}\n_ _`)
      .addField('Modification Instructions', `**\`sc!delete ${key}\` [❱]Removes post.\n\`sc!complete ${key}\` [❱]Completes request.**`);
    
    channel.send(embed)
    
  })



client.on("message", async message => {
    if (message.author.bot) return;
  if  (message.channel.type == "dm") return 
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 /*    if (command === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    } *///Hosted local by teacup
  //U want my fancy ping? -Sup3rFir3
    
       if (command === "dmteacup") {
        if (TeaCup.DmAble == false) return message.channel.send("```json\n \"TeaCup.DmAble\": false```");
         if (TeaCup.DmAble == false) return message.channel.send("Sorry But Tea Cup is not avaliable at the moment");
         const sayMessage = args.join("");
        message.delete().catch(O_o => {});
        var sembed = new Discord.RichEmbed().addField(`-----------` + "Message"+ `-----------`, sayMessage)
        .setColor(`RANDOM`)
        message.channel.send(`:white_check_mark: Your message has been sent.`)
        client.users.get("338192747754160138").send(sembed);
         
    }
/*   if (command === "announce") {
     if (message.member.hasPermission("ADMINISTRATOR")) {
      let args = message.content.split(" ").slice(1).join(" ");
   let split = args.split("-");
   let url = args[2];
       message.channel.send("@everyone", {
         embed: {
           color: 0xFFFF00,
           author: {
             name: message.author.username,
             icon_url: message.author.avatarURL
           },
           title: ":information_source: Announcement",
           description: split[0],
           url: split[1],
           timestamp: new Date(),
           footer: {
             icon_url: message.author.avatarURL,
             text: message.author.username
           }
         }
     });
     }
   }
})
*/
  
/*if(command === "rip") {
  message.channel.send({
    embed: {
      title: `R.I.P ${args.length ? args.join(' ') : 'Everything'}`,
      image: {
        url: 'https://resources.bastionbot.org/images/tombstone_rip.png'
      },
      footer: {
        text: 'May the Soul Rest in Peace.'
      }
    }
  }).catch(e => {
    client.log.error(e);
  });
};

  if(command === "reverse") {


  message.channel.send({
    embed: {
      title: 'Reversed Text:',
      description: args.join(' ').split('').reverse().join('')
    }
  }).catch(e => {
    client.log.error(e);
  });
};

  if(command === "remove") {
  message.channel.send({
    embed: {
      title: `${args.length ? args.join(' ') : 'You'} is being removed.`,
      image: {
        url: 'https://resources.bastionbot.org/images/remove_button.gif'
      }
    }
  }).catch(e => {
    client.log.error(e);
  });
};
  
  if(command === "punch") {
  let user = message.mentions.users.first();
 

  let punches = [
    'https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
    'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
    'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
    'https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif',
    'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} punched ${user.username}! :punch:`,
      image: {
        url: punches[Math.floor(Math.random() * punches.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  });
} */


  if (command === "bal") {
        economy.fetchBalance(message.author.id).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts it into 'i'.
            var balembed = new Discord.RichEmbed()
                .addField(message.author.username, `You have **${i.money}** ${cur} in your account.`)
                .setFooter(`Logan Bank Inc. ` + message.author.username + ` 's account.`, message.author.displayAvatarURL).setColor(moncol)
            message.channel.send(balembed)
        })
    }
    if (command === "roll") {
        economy.fetchBalance(message.author.id).then((o) => {
            var randrol = Math.floor(Math.random() * 10) - 6;
            const sayMessageiol = args.join(" ");
            var inted = parseInt(sayMessageiol);
            if (inted !== inted) {
                if (o.money >= inted - 1) {
                    message.channel.send("Please Enter an amount of " + cur + " from 1 -" + o.money);
                } else {
                    message.channel.send("No.")
                }
            } else {
                if (inted >= 0) {
                    if (o.money >= inted - 1) {
                        economy.updateBalance(message.author.id, inted * randrol).then((i) => {
                            if (o.money >= o.money + (inted * randrol)) {
                                var rollembed = new Discord.RichEmbed().setTitle(message.author.username).addField(`You lost ` + inted * randrol + ` ` + cur, `New Balance:** ${i.money}**`).setFooter(`Logan Casino Inc. ` + message.author.username + ` 's account.'`, message.author.displayAvatarURL).setColor("ff0000");
                            } else {
                                var rollembed = new Discord.RichEmbed().setTitle(message.author.username).addField(`You got ` + inted * randrol + ` ` + cur, `New Balance:** ${i.money}**`).setFooter(`Logan Casino Inc. ` + message.author.username + ` 's account.'`, message.author.displayAvatarURL).setColor(moncol);
                            }
                            message.channel.send(rollembed);
                        })
                    } else {
                        message.channel.send("You do not have enough " + cur + " to gamble this amount!")
                    }
                } else {
                    message.channel.send("Do you want me to roll **your** money into the negatives.")
                }
            }
        })
    }
                                                     
                                                     
                                                     
                                                
    if (command === "give") {
        if (message.author.id === midi || message.author.id === "338192747754160138") {
            var gr = message.mentions.members.first()
            if (!gr) return message.reply("Please provide a vaild Mention.");
            var atg = parseInt(args[1], 10)
            if (!atg) return message.channel.send(message.author.username + " Please provide an amount to give")
            economy.updateBalance(gr.id, atg).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts it into 'i'.
                var givebed = new Discord.RichEmbed().setTitle(`**Balance:** ${i.money}`).setFooter(`Logan Funding Inc. ` + message.mentions.users.first().username + ` 's account was funded.`, message.mentions.users.first().displayAvatarURL).setColor(moncol);
                message.channel.send(givebed)
            })
        }
    }
    if (command === "pay") {
        let member = message.mentions.members.first();
        let amountq = args.slice(1).join(" ");
        var amount = parseInt(amountq);
        if (!member) {
            message.channel.send("Please provide a valid mention!")
        } else {
            economy.fetchBalance(message.author.id).then((o) => {
                if (amount !== amount) {
                    if (o.money >= amount - 1) {
                        message.channel.send("Please Enter an amount of " + cur + " from 1 -" + o.money);
                    } else {
                        message.channel.send("That isn't a valid amount of" + " " + cur)
                    }
                } else {
                    if (amount >= 0) {
                        if (o.money >= amount - 1) {
                            //UpdateBal
                            economy.updateBalance(message.author.id, -amount)
                            economy.updateBalance(member.id, amount)
                            var payembed = new Discord.RichEmbed().setTitle("Paid " + message.mentions.users.first().username + " " + amount + " " + cur).addField(message.author.username + " paid", message.mentions.users.first().username + " " + amount + " " + cur).setDescription("Transaction Made. The funds have been paid.").setFooter(`Logan Bank Inc. `).setColor(moncol);
                            message.channel.send(payembed);
                            //UpdateBalend
                        }
                    }
                }
            })
        }
    }
  if (command === "devsay") {
     if (!message.author.id === "338192747754160138") return;
        const sayMessage = args.slice(1).join(" ");
        message.delete().catch(O_o => {});
        const channel = client.channels.get(args[0]);
        channel.send(sayMessage);
    }
          
    if (command === "daily") {
        //<getdate>\\
        var fulldate = new Date();
        var date = fulldate.getDate();
        console.log(date)
        //</getdate>\\
        if (!daily[message.author.id]) {
            daily[message.author.id] = {
                last: -7
            };
        }

        if (daily[message.author.id].last == date) return message.channel.send("You have already used up today's daily. Come back tommorow");
        economy.updateBalance(message.author.id, 100)
        message.channel.send("You have recived 100 " + cur)
        daily[message.author.id].last = date

    }
      if (command === "profile") {
        if (!profil[message.author.id]) {
            economy.fetchBalance(message.author.id).then((i) => {

                profil[message.author.id] = {
                    game: "n/a",
                    note: "n/a",
                    bal: i.money
                };
            })
        }
        if (args[0] === "game") {
            let reasdon = args.slice(1).join(" ");
            profil[message.author.id].game = reasdon
            message.channel.send("Game is now " + profil[message.author.id].game)
        } else {
            if (args[0] === "note") {
                let reason = args.slice(1).join(" ");
                profil[message.author.id].note = reason
                message.channel.send("Note is now " + profil[message.author.id].note)
            } else {
                message.channel.send("**Please Choose a Valid Field to Change**\n`note`\n`game`")
            }
        }
        fs.writeFile("./pro.json", JSON.stringify(profil), (err) => {
            if (err) console.log(err)
        });
    }
    if (command === "userinfo") {
        let user = message.mentions.users.first();
        if (!user) {
            return message.reply('You must mention someone!');
        }
        const mentioneduser = message.mentions.users.first();
        const joineddiscord = (mentioneduser.createdAt.getDate() + 1) + '-' + (mentioneduser.createdAt.getMonth() + 1) + '-' + mentioneduser.createdAt.getFullYear() + ' | ' + mentioneduser.createdAt.getHours() + ':' + mentioneduser.createdAt.getMinutes() + ':' + mentioneduser.createdAt.getSeconds();
        let game;
        if (user.presence.game === null) {
            game = 'Not currently Playing.';
        } else {
            game = user.presence.game.name;
        }
        let messag;
        if (user.lastMessage === null) {
            messag = 'n/a';
        } else {
            messag = user.lastMessage;
        }
        if (!profil[user.id]) {
            console.log(user.id)
            economy.fetchBalance(user.id).then((i) => {
                profil[user.id] = {
                    game: "n/a",
                    note: "n/a",
                    bal: i.money,
                };
            })
        }
        let status;
        if (user.presence.status === 'online') {
            status = ':green_book: Online';
        } else if (user.presence.status === 'dnd') {
            status = ':closed_book: Do not Disturb';
        } else if (user.presence.status === 'idle') {
            status = ' :orange_book: Idle';
        } else if (user.presence.status === 'offline') {
            status = 'Offline!';
        }
        let stat;
        if (user.presence.status === 'offline') {
            stat = 0x000000;
        } else if (user.presence.status === 'online') {
            stat = 0x00AA4C;
        } else if (user.presence.status === 'dnd') {
            stat = 0x9C0000;
        } else if (user.presence.status === 'idle') {
            stat = 0xF7C035;
        }
        var prodo = "n/a \nWait a few moments if you set something\nIf you haven't then do `l.profile`"
        if (profil[user.id]) {
            prodo = `**Game:** ${profil[user.id].game}\n**Balance:** ${profil[user.id].bal}\n**Note**: \n${profil[user.id].note}`
        }
        message.channel.send({
            embed: {
                color: 0x69d84b,
                author: {
                    name: `Userinfo for: ${user.username}`,
                    icon_url: user.displayAvatarURL
                },
                fields: [{
                    name: '**UserInfo:**',
                    value: `**Username:** ${user.tag}\n**Joined Discord:** ${joineddiscord}\n**Last message:** ${messag}\n**Playing:** ${game}\n**Status:** ${status}\n**Bot?** ${user.bot}`
                }, {
                    name: 'DiscordInfo:',
                    value: `**Discriminator:** ${user.discriminator}\n**ID:** ${user.id}\n**Username:** ${user.username}`
                }, {
                    name: 'ProfileInfo:',
                    value: prodo
                }, ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "Pleogg Datafind Inc. "
                }
            }
        })
        fs.writeFile("./pro.json", JSON.stringify(profil), (err) => {
            if (err) console.log(err)
        });
    }

if (command === "commands" ) {
var EconomyHelpEmbed = new Discord.RichEmbed()
            .setColor(moncol)
            .setTitle("Economy Commands")
            .addField("Balance", "l.bal")
            .addField("Payment", "l.pay [user] [amount]")
            .addField("Alea Jacta Est", "l.roll [amount]")
            .addField("Daily Paycheck", "l.daily")
var MusicHelpEmbed = new Discord.RichEmbed()
.setColor("482f95")
.setTitle("Music Commands")
.addField("Play", "l.play [SongTitle/YouTubeUrl]")
.addField(`Fav`, `l.play [1- ${(favsong.length) - 1}]`)
.addField("Stop", "`l.stop")
.addField("Skip","l.skip")
.addField("Queue", "l.queue")
.addField("Volume","l.volume [1-5]")
.setFooter("You Must have the role **Logan DJ** to use music commands")

var ts = message.channel
ts.send(MusicHelpEmbed)
        ts.send(EconomyHelpEmbed)

}
    
          
        
});
client.on("roleUpdate", async (oldRole, newRole) => {
  
  let logchannel = oldRole.guild.channels.find(`name`, "audit-log");
  var embed = new Discord.RichEmbed()
  .setTitle("Role Update")
  .setColor("000099")
  .addField(`The role ${oldRole.name} has changed to `,`${newRole}`)
  logchannel.send(embed);


});

client.on("guildMemberUpdate", async (oldMember, newMember) => {

  let logchannel = newMember.guild.channels.find(`name`, "audit-log");

  
  if(oldMember.displayName == newMember.displayName){
    var embed2 = new Discord.RichEmbed()
    .setTitle("User Updates")
    .setColor('FF3333')
     .setDescription(`The user ${newMember} has been updated.`)
    return logchannel.send(embed2)
  }
var embed3 = new Discord.RichEmbed()
.setTitle("User Update")
.setColor('FF3333')
.setDescription(`The user ${oldMember.displayName} has changed to ${newMember}`)
  logchannel.send(embed3);

});
  



client.on('channelCreate', async channel => {

  console.log(`${channel.name} has been created.`);

if (channel.type != 'text') return;
  let sChannel = channel.guild.channels.find('name', 'audit-log');
  var embed4 = new Discord.RichEmbed()
  .setTitle("Channel Updates")
  .setColor("009900")
  .setDescription(`The Channel ${channel} has been created`)
  sChannel.send(embed4);

});

client.on("channelDelete", async channel => {

  console.log(`${channel.name} has been deleted.`);

  let sChannel = channel.guild.channels.find(`name`, "audit-log");
  var embed5 = new Discord.RichEmbed()
  .setTitle("Channel Updates")
  .setColor("FF3300")
  .setDescription(`The Channel ${channel.name} has been deleted`)
  sChannel.send(embed5);

});


  function hook(channel, title, message, color, avatar) { // This function uses quite a few options. The last 2 are optional.

    // Reassign default parameters - If any are blank.
    if (!channel) return console.log('Channel not specified.');
    if (!title) return console.log('Title not specified.');
    if (!message) return console.log('Message not specified.');
    if (!color) color = 'd9a744'; // This is an optional variable. Therefore the default HEX color will be whatever you post there. Mine will be d9a744
    if (!avatar) avatar = 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png' // This is also an optional variable, you can change the default to any icon.

    // We want to remove spaces from color & url, since they might have it on the sides.
    color = color.replace(/\s/g, '');
    avatar = avatar.replace(/\s/g, '');

    // This is the start of creating the webhook
    channel.fetchWebhooks() // This gets the webhooks in the channel
        .then(webhook => {

            // Fetches the webhook we will use for each hook
            let foundHook = webhook.find('name', 'Webhook'); // You can rename 'Webhook' to the name of your bot if you like, people will see if under the webhooks tab of the channel.

            // This runs if the webhook is not found.
            if (!foundHook) {
                channel.createWebhook('Webhook', 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png') // Make sure this is the same thing for when you search for the webhook. The png image will be the default image seen under the channel. Change it to whatever you want.
                    .then(webhook => {
                        // Finally send the webhook
                        webhook.send('', {
                            "username": title,
                            "avatarURL": avatar,
                            "embeds": [{
                                "color": parseInt(`0x${color}`),
                                "description":message
                            }]
                        })
                            .catch(error => { // We also want to make sure if an error is found, to report it in chat.
                                console.log(error);
                                return channel.send('**Something went wrong when sending the webhook. Please check console.**');
                            })
                    })
            } else { // That webhook was only for if it couldn't find the original webhook
                foundHook.send('', { // This means you can just copy and paste the webhook & catch part.
                    "username": title,
                    "avatarURL": avatar,
                    "embeds": [{
                        "color": parseInt(`0x${color}`),
                        "description":message
                    }]
                })
                    .catch(error => { // We also want to make sure if an error is found, to report it in chat.
                        console.log(error);
                        return channel.send('**Something went wrong when sending the webhook. Please check console.**');
                    })
                }

        })

}

/*
lient.on('channelDelete', async channel => {
  let auditlo channel.guild.channels.find("audit-log")
    let audit = await client.tools.fetchLastAudit(channel.guild, 'CHANNEL_DELETE');
    if (!audit || audit.action !== 'CHANNEL_DELETE') return;
  let exec = audit.executor;
let channeldel
= new Discord.RichEmbed()
.setTitle("Channel Was Deleted")
.addField("Channel Name",`#${channel.name}`)
.setFooter(`Done By @${exec.username}#${exec.discriminator}`)
auditloend
});
*/



      client.on('message', function (message) {
     if  (message.channel.type == "dm") return 
     
          if (message.content.startsWith('l.HOOK')) {
          // We are using a .startsWith because the command will have arguments.

            // Delete the message that the user sends
            message.delete();
        
            if (message === 'l.HOOK') { // This checks if the only thing they sent was 'Hook'
                return hook(message.channel, 'Hook Usage', `l.hook <title>, <message>, [HEXcolor], [avatarURL]\n\n**<> is required\n[] is optional**`,'FC8469','https://cdn4.iconfinder.com/data/icons/global-logistics-3/512/129-512.png') // Remeber that \n means new line. This is also using a custom HEX id, and an image.
               
            }
        
            let hookArgs = message.content.slice('l.'.length + 4).split(","); 
            // This slices the first 6 letters (prefix & the word hook) then splits them by 'commas'
        
            hook(message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]); 
         
       
        }

    });
  
const moment = require("moment");
  const consoleLogger = require('consoled');
const consoled = new consoleLogger.Console({catchErrors: true});
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
   client.on('guildMemberAdd', member => {
	const members = member.guild.memberCount;
    const channel = member.guild.channels.find('name', 'welcome');
    
    if (!channel) return;
   
	let role = member.guild.roles.find(`name`, "Member");
     
	let Embed = new Discord.RichEmbed()
	.setTitle(`${member.displayName}, Welcome to ${member.guild.name}`)
    .setColor("66CC00")	
	.setDescription(`Welcome My Friend!`)
	.addField('Users: ', `${members}`, true)

  .setFooter("Enjoy Your Stay")
    channel.send(Embed);
     channel.send(`${member}^`)
   
    client.user.setPresence({ game: { name: ` With ${client.users.size} friends`, url: 'https://twitch.tv/xxwilsongamingxx', type: 1 } });
	});
  client.on("guildMemberAdd", function(member) {
  
    let role = member.guild.roles.find("name", "User");
 if (!role)return;
    member.addRole(role)
      .catch(console.error)

});
	client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find('name', 'welcome');
   
    if (!channel) return;
   
	const members = member.guild.memberCount;
	let Embed = new Discord.RichEmbed()
    .setColor("FF0033")
	.setDescription(`${member.displayName}, has left the server! We have ${members} members now.`)
client.user.setPresence({ game: { name: `With ${client.users.size} friends`, url: 'https://twitch.tv/xxwilsongamingxx', type: 1 } });
    channel.send(Embed);
 
    });
    

    client.on('guildCreate', guild => {
let Embed = new Discord.RichEmbed()
.setTitle("Hi 👋")
.addField("My Prefix is `l.`",'*Enjoy!*')
.addField("Thank You ❤","Hi there! \n i'm Logan Your Friendly Music,Economy,Moderation Bot")

.addField("Your Server","If you didnt already notice ive done 3 things to your server \n ive added `audit-log`|`mod-log`| & i made the role `User` this is so that i can give \n ***New Members*** A role but you can delte this if you wish ;)")
.setFooter(`Your My ${client.guilds.size} guild gg`)
.addField("Need Help?","Join My Support Server [Here](https://discord.gg/rfZC7S)")  
.addField("Other","i'd Be nice if you [upvote](https://discordbots.org/bot/408070424484904960) my bot ;)\n Also Tell your friends about me!")
        guild.owner.send(Embed);
        guild.createChannel("audit-log","text")
      guild.createChannel("mod-log","text")
      guild.createRole({
      name: ('User'), 
      color: 'BLUE',
        reason:"Auto Role"
    })
        });

        client.on("guildCreate", async guild => {
            const logsServerJoin = client.channels.get(settings.logsChannelID);
           
        
        
            console.log(`The bot just joined to ${guild.name}, Owned by ${guild.owner.user.tag}`);
            
            const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setAuthor(`i Joined ${guild.name}`)
            .setThumbnail(guild.iconURL)
            .addField(":wave: wooo a new Server!!!","cant wait to see whats in it")
            .addField(":white_small_square: Owner", guild.owner)
            .addField(":white_small_square: ID", guild.id, true)
            .addField(":white_small_square: Users", guild.memberCount, true)
            .addField(":white_small_square: Channels", guild.channels.size, true)
            .setFooter(`Server #${client.guilds.size}`)
            
            logsServerJoin.send(embed);
        
            client.user.setPresence({ game: { name: ` With ${client.users.size} friends`, url: 'https://twitch.tv/xxwilsongamingxx', type: 1 } });
        });

    client.on("guildDelete", guild => {
        const logsServerLeave = client.channels.get(settings.logsChannelID);
        console.log(`The bot has been left ${guild.name}, Owned by ${guild.owner.user.tag}`);
        const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setAuthor(` i Left ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField(":door: :( i was removed ","There Missong Out On a lot :(")
        .addField(":white_small_square: Owner", guild.owner)
        .addField(":white_small_square: ID", guild.id, true)
        .addField(":white_small_square: Users", guild.memberCount, true)
         .setFooter(`Server #${client.guilds.size}`)
       
        logsServerLeave.send(embed);
    client.user.setPresence({ game: { name: `With ${client.users.size} friends`, url: 'https://twitch.tv/xxwilsongamingxx', type: 1 } });
        });
      
  
  
  
client.on('guildMemberAdd', member => {
	const members = member.guild.memberCount;
    const channel = member.guild.channels.find('name', 'bot-hell');
    
    if (!channel) return;
   
	
	
	let Embed = new Discord.RichEmbed()
	.setTitle(`${member.displayName}, Welcome to ${member.guild.name}`)
    .setColor("RANDOM")	
	.setDescription(`Welcome My Friend!`)
	.addField('Users: ', `${members}`, true)
    channel.send(Embed);
    client.user.setPresence({ game: { name: `With ${client.users.size} friends`, url: 'https://twitch.tv/xxwilsongamingxx', type: 1 } });
	});
	client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find('name', 'bot-hell');
   
    if (!channel) return;
   
	const members = member.guild.memberCount;
	let Embed = new Discord.RichEmbed()
    .setColor("RANDOM")
	.setDescription(`${member.displayName}, has left the server! We have ${members} members now.`)

    channel.send(Embed);
 client.user.setPresence({ game: { name: `With ${client.users.size} friends`, url: 'https://twitch.tv/xxwilsongamingxx', type: 1 } });
    });

client.on('message', async msg => {
    if (msg.author.id === midi || msg.author.id === "338192747754160138" || msg.member.roles.some(r => ["Logan DJ", "The Music Meister"].includes(r.name))) {
        if (!msg.content.startsWith(config.prefix)) return undefined;
        const args = msg.content.split(' ');
        const searchString = args.slice(1).join(' ');
        var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
        const serverQueue = queue.get(msg.guild.id);
        let command = msg.content.toLowerCase().split(' ')[0];
        command = command.slice(config.prefix.length)
        if (command === 'play') {
            const voiceChannel = msg.member.voiceChannel;
            if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
            if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                const playlist = await youtube.getPlaylist(url);
                const videos = await playlist.getVideos();
                for (const video of Object.values(videos)) {
                    const video2 = await youtube.getVideoByID(video.id);
                    await handleVideo(video2, msg, voiceChannel, true);
                }
                return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
            } else {
                try {
                    var video = await youtube.getVideo(url);
                } catch (error) {
                    try {
                        var videos = await youtube.searchVideos(searchString, 10);
                        let index = 0;
                        msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the 🔎 results ranging from 1-10.
					`);
                        try {
                            var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                                maxMatches: 1,
                                time: 10000,
                                errors: ['time']
                            });
                        } catch (err) {
                            console.error(err);
                            return msg.channel.send('No or invalid value entered, cancelling video selection.');
                        }
                        const videoIndex = parseInt(response.first().content);
                        var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('🆘 I could not obtain any search results.');
                    }
                }
                return handleVideo(video, msg, voiceChannel);
            }
        }
        if (command === 'fav') {
            var url = favsong[args[1]] ? favsong[args[1]].replace(/<(.+)>/g, '$1') : '';
            console.log(favsong[args[1]]);
            console.log(" ")
            const voiceChannel = msg.member.voiceChannel;
            if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
            if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                const playlist = await youtube.getPlaylist(url);
                const videos = await playlist.getVideos();
                for (const video of Object.values(videos)) {
                    const video2 = await youtube.getVideoByID(video.id);
                    await handleVideo(video2, msg, voiceChannel, true);
                }
                return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
            } else {
                try {
                    var video = await youtube.getVideo(url);
                } catch (error) {
                    try {
                        msg.channel.send(`__**Song selection:**__\nPlease Choose a song on this list from 1-` + favsong.length + "\nSongs");
                        var songarnum = 1;
                        while (songarnum < favsong.length) {
                            msg.channel.send(songarnum + ". " + favsong[songarnum])
                            songarnum++
                        }
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('🆘 I could not obtain any search results.');
                    }
                }
                return handleVideo(video, msg, voiceChannel);
            }
        } else if (command === 'skip') {
            if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
            if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
            serverQueue.connection.dispatcher.end('Skip command has been used!');
            return undefined;
        } else if (command === 'stop') {
            if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
            if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
            serverQueue.songs = [];
            serverQueue.connection.dispatcher.end('Stop command has been used!');
            return undefined;
        } else if (command === 'volume' || command === 'vol') {
            if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
            if (!serverQueue) return msg.channel.send('There is nothing playing.');
            if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
            serverQueue.volume = args[1];
            serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
            var volval;
            if (serverQueue.volume == 1) {
                volval = `○──── :loud_sound:⠀`
            }
            if (serverQueue.volume == 2) {
                volval = `─○─── :loud_sound:⠀`
            }
            if (serverQueue.volume == 3) {
                volval = `──○── :loud_sound:⠀`
            }
            if (serverQueue.volume == 4) {
                volval = `───○─ :loud_sound:⠀`
            }
            if (serverQueue.volume == 5) {
                volval = `────○ :loud_sound:⠀`
            }
            msg.channel.send(volval)

        } else if (command === 'np') {
            if (!serverQueue) return msg.channel.send('There is nothing playing.');
            return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
        } else if (command === 'queue') {
            if (!serverQueue) return msg.channel.send('There is nothing playing.');
            return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
        } else if (command === 'pause') {
            if (serverQueue && serverQueue.playing) {
                serverQueue.playing = false;
                serverQueue.connection.dispatcher.pause();
                return msg.channel.send('⏸ Paused the music for you!');
            }
            return msg.channel.send('There is nothing playing.');
        } else if (command === 'resume') {
            if (serverQueue && !serverQueue.playing) {
                serverQueue.playing = true;
                serverQueue.connection.dispatcher.resume();
                return msg.channel.send('▶ Resumed the music for you!');
            }
            return msg.channel.send('There is nothing playing.');
        }
        return undefined;
    }
});
async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(chalk.red("MOOOOSIK"));
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);
        queueConstruct.songs.push(song);
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(msg.guild.id);
            return msg.channel.send(`I could not join the voice channel: ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);
    }
    return undefined;
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url)).on('end', reason => {
        if (reason === 'Stream is not generating quickly enough.') console.log(reason);
        else console.log(reason);
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
    }).on('error', error => console.error(error));
    var volval;
    if (serverQueue.volume == 1) {
        volval = `○──── :loud_sound:⠀`
    }
    if (serverQueue.volume == 2) {
        volval = `─○─── :loud_sound:⠀`
    }
    if (serverQueue.volume == 3) {
        volval = `──○── :loud_sound:⠀`
    }
    if (serverQueue.volume == 4) {
        volval = `───○─ :loud_sound:⠀`
    }
    if (serverQueue.volume == 5) {
        volval = `────○ :loud_sound:⠀`
    }
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
   var NowEmbed = new Discord.RichEmbed().setColor("990033")
   .addField(`=========================================================`,`
ɴᴏᴡ ᴘʟᴀʏɪɴɢ: **${song.title}**
:white_circle:─────────────────────────────────────────── 
◄◄⠀▐▐ ⠀►►⠀⠀　　${volval}    　　 :gear: ❐ ⊏⊐ 
========================================================= `)
   .setFooter("Invite Me! Using l.invite")
    .addField("The Music Setup was taken from","**Pleogg**: [Invite](https://discordapp.com/oauth2/authorize?client_id=441394147073720329&scope=bot&permissions=2146958591)");
    serverQueue.textChannel.send(NowEmbed);
  //**Taken From Pleogg**: 

}

client.login("NDA4MDcwNDI0NDg0OTA0OTYw.DfeCGg.4Qex0FL3A0PHOe6aH8SsiB4clQQ");
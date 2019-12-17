const { Client, RichEmbed } = require("discord.js");
const { CommandHandler } = require("djs-commands");
const client = new Client({ disableEveryone: true });
const config = require("./config.json");
const CH = new CommandHandler({
    folder: __dirname + "/Commands/",
    prefix: config.prefix 
});


client.on("ready", () => {
    console.log("Ready !");
});

client.on("message", async (message) => {

    if(message.author.type === 'bot') return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;

    try{
        cmd.run(client,message,args)
    }catch(e){
        console.log(e)
    }

});

let info = client.emojis.get("655091815401127966"); //https://cdn.discordapp.com/emojis/655091815401127966.png?v=1

client.on("guildCreate", guild => {
    let newserverEmbed = new RichEmbed()
    .setTitle(`${info}  Info`)
    .setDescription(`__Thanks for adding Xenon to your server!__ :smiley:
Use \`x!help\` to get a list of commands. If you need more information, you can look at the [docs](https://docs.discord.club/xenon).
It's also recommended to join our [discord server](https://discord.club/discord) to get notified about future updates.


If you decide to use Xenon, **you and all your members need to accept our [Terms of Service!](https://docs.discord.club/xenon/terms-of-service)**`)
    .setColor("#5DBCD2")
guild.defaultChannel.send(newserverEmbed)
})


client.login(config.token)
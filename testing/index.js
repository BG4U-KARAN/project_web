const { Client, GatewayIntentBits, Partials, ActivityType } = require("discord.js");
const { Collection } = require("mongoose");
require("colors");
const fs = require("fs");

const client = new Client({

    intents: [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)],
});

// client.commands = new Collection();
// client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
// const db = require("quick.db");
client.on("ready", () => {
    console.log(
        `[${client.user.tag}] Is online` .green.bold, `${client.guilds.cache.size} server` .bold
    );
})
client.on("messageCreate", async (message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(message.content.startsWith(client.config.prefix)) {
        const args = message.content.slice(client.config.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(client.commands.has(command)) {
            const command = client.commands.get(command);
            if(command.category === "owner") {
                if(message.author.id !== client.config.owner) return;
            }
            if(command.category === "admin") {
                if(message.author.id !== client.config.owner && message.author.id !== client.config.admin) return;
            }
            if(command.category === "mod") {
                if(message.author.id !== client.config.owner && message.author.id !== client.config.admin && message.author.id !== client.config.mod) return;
            }
            if(command.category === "user") {
                if(message.author.id !== client.config.owner && message.author.id !== client.config.admin && message.author.id !== client.config.mod && message.author.id !== client.config.user) return;
            }
            if(command.category === "everyone") {
                if(message.author.id !== client.config.owner && message.author.id !== client.config.admin && message.author.id !== client.config.mod && message.author.id !== client.config.user && message.author.id !== client.config.everyone);
                return;
            }
            if(command.category === "user") {
                if(message.author.id !== client.config.owner && message.author.id !== client.config.admin && message.author.id !== client.config.mod && message.author.id !== client.config.user && message.author.id !== client.config.everyone);
                return;
            }
            if(command.category === "everyone") {
                if(message.author.id !== client.config.owner && message.author.id !== client.config.admin && message.author.id !== client.config.mod && message.author.id !== client.config.user && message.author.id !== client.config.everyone);
                return;
        }
        }
    }
});


client.on("ready", () => {
    console.log(`${client.user.username}`.green, `is now online and ready for work`);
});

client.once("ready", () => {
    const activitiy = [`~ karan_xD`, `with ${client.users.cache.size} people.`, `on ${client.guilds.cache.size} Servers.`,
        `/help`];
    setInterval(() => {
        const rindex = Math.floor(Math.random() * (activitiy.length - 1));
        const newa = activitiy[rindex];

        client.user.setActivity(newa);
    }, 2000);

    client.user.setActivity(`| version ${client.BotVersion}`)
})

// const funcationFolder = fs.readdirSync(`./funcation`);
// for (const folder of funcationFolder) {
//     const funcationFiles = fs.readdirSync(`./funcation/${folder}`).filter((file) => file.endsWith(".js"));
//     for (const file of funcationFiles)
//         require(`./funcation/${folder}/${file}`)(client);
// }

require("dotenv").config();

// client.handleEvents();
// client.handleCommand();
client.login(process.env.token);
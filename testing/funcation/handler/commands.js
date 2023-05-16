const fs = require("fs");

// module.exports = (client) => {
//     client.handleCommand = async() => {
//         const commandFolder = fs.readdirSync("../../commands");
//         for (const folder of commandFolder) {
//             const commandFiles = fs.readdirSync(`../../commands/${folder}`).filter((file) => file.endsWith(".js"));

//             const {commands, commandArray} = client;
//             for (const file of commandFiles) {
//                 const command = require(`../../commands/${folder}/${file}`);
//                 commands.set(command.data.name, command);
//                 commandArray.push(command.data.toJSON());
//                 console.log(`Command: ${command.data.name} has paased`);
//             }
//         }
//     }
// }

function commandHandler(client) {
    const commandFolder = fs.readdirSync("../../commands");
    for (const folder of commandFolder) {
        const commandFiles = fs.readdirSync(`../../commands/${folder}`).filter((file) => file.endsWith(".js"));
        const {commands, commandArray} = client;
        for (const file of commandFiles) {
            const command = require(`../../commands/${folder}/${file}`);
            commands.set(command.data.name, command);
            commandArray.push(command.data.toJSON());
            console.log(`Command: ${command.data.name} has been passed`);
        }
    }
}
module.exports = commandHandler;
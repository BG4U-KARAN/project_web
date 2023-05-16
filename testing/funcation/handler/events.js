const fs = require("fs");
// module.exports = (client) => {
//     client.handleEvents = async () => {
//         const eventFolder = fs.readdirSync("../../events");

//         for (const folder of eventFolder) {
//             const eventFiles = fs.readdirSync(`../../events/${folder}`).filter((file) => file.endsWith(".js"));
//             switch (folder) {
//                 case "client":
//                     for(const file of eventFiles) {
//                         const event = require(`../../events/${folder}/${file}`);
//                         if(event.once) client.once(event.name, (...args) => event.execute(...args, client));
//                         else client.on(event.name, (...args) => event.execute(...args, client))
//                     }
//                     break;
//                 default:
//                     break;

//             }
//         }
//     }
//

function eventHandler(client) {
    const eventFolder = fs.readdirSync("../../events");
    const eventFiles = fs.readdirSync(`../../events/client`).filter((file) => file.endsWith(".js"));
    const event = require(`../../events/client/${eventFiles[0]}`);
    if(event.once) client.once(event.name, (...args) => event.excute(...args, client));
    else client.on(event.name, (...args) => event.excute(...args, client));
}
module.exports = eventHandler;
module.exports = {
    name: 'restart',
    description: 'Restarts the bot.',
    execute: async (api, event, args, commands, prefix, admins, appState, sendMessage) => {
        const { threadID, senderID } = event;
        if (!admins.includes(senderID)) {
            sendMessage(api, { threadID, message: ''⚠ Seul Renji Starfall peut utiliser cette commande.' });
            return;
        }
        sendMessage(api, { threadID, message: 'Restarting Please wait...' });
        setTimeout(() => {
            process.exit(0);
        }, 1000);
    }
};

const NodeHelper = require('node_helper');
const request = require('request');

module.exports = NodeHelper.create({
    start: function () {
        console.log(this.name + 'Helper started');
    },

    socketNotificationReceived: function (n, m) {
        if (n === 'run') {
            request(`https://catfact.ninja/fact?max_length=${m}`, { json: true }, (e, r, b) => {
                if (e) return console.log(`Error: ${e.stack}`);
                if (!b) return console.log(`API Error!`);
                let fact = b['fact'];
                this.sendSocketNotification('sent', fact);
            });
        }
    }
});
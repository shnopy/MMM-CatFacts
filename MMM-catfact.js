Module.register('MMM-catfact', {
    defaults: {
        text: '',
        maxlength: 40,
        fadespeed: 2000,
    },
    start: function () {
        setTimeout(() => {
            this.sendSocketNotification('run', this.config.maxlength);
            setInterval(() => {
                this.sendSocketNotification('run', this.config.maxlength);
            }, 10000);
        }, 1000);
    },
    getDom: function () {
        let wrapper = document.createElement('div');
        wrapper.className = "dimmed small light";
        wrapper.innerHTML = this.config.text;
        return wrapper;
    },

    socketNotificationReceived: function (n, p) {
        if (n === 'sent') {
            this.config.text = p;
            this.updateDom(this.config.fadespeed);
        }
    }
});

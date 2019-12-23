Module.register('MMM-catfact', {
    defaults: {
        text: '',
        maxlength: 40,
        fadespeed: 2000,
        updatespeed: 10000,
        size: 'small'
    },
    start: function () {
        setTimeout(() => {
            this.sendSocketNotification('run', this.config.maxlength);
            setInterval(() => {
                this.sendSocketNotification('run', this.config.maxlength);
            }, this.config.updatespeed);
        }, 1000);
    },
    getDom: function () {
        let wrapper = document.createElement('div');
        wrapper.className = `normal ${this.config.size} light`;
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
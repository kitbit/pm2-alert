let config = {




    /**
     * list of processes that you want to be alerted on memory leak
     * if you want to monitor all of your processes just leave this property empty array
     * (Example) processes: ['app', 'http'] 
     */
    processes: [],


    /**
     * Webhook URL
     */
    to: 'http://yourwebhookurl.com',


    /**
     * set target
     */
    target: 'slack', // custom or slack or google-chat



    // TODO: listen to thease Events then send notification
    events: ['restart', 'delete', 'stop', 'restart overlimit', 'exit', 'start', 'online'], // pm2 events


    info: {
        serverName: '192.168.1.1 US' // Can be IP or HostName
    },


    /**
     * fill this Object with right value to get right notification
     */
    memory: {



        /**
         * Define when this module is try to check your process memory
         * You can learn more about cron here: https://en.wikipedia.org/wiki/Cron 
         * By default: every five minute
         */

        cron: '*/5 * * * *', // cronTab => every minute,


        /**
         * Get notified when your memory reached maxMemroySize
         * By default: 800MB
         */
        maxMemroySize: 800 * 1000000, // when process reach 800MB get alerted


        /**
         * Slack messages format
         * learn more about this here: https://api.slack.com/docs/message-formatting
         */
        warning: [
            {
                "color": "warning",
                "pretext": "We noticed that your process is/are not working well",
                "footer": "-----------------------------------------------",
                "footer_icon": "https://app.raychat.io/images/favicon.png",
            }
        ]




    }


}


const pm2_slack = require('pm2-alert')
new pm2_slack(config)

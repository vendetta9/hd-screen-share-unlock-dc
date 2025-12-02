/**
 * @name hdScreenShareUnlocker
 * @version 0.0.2
 * @description Enables HD screen sharing without Nitro subscription
 * @author vendettaaaa
 */


module.exports = class hdScreenShareUnlocker{
     
    constructor() {
        this.userPremiumType = BdApi.Webpack.getModule(m => m.getCurrentUser).getCurrentUser().premiumType;
    }
     
    start() { 
        BdApi.Webpack.getModule(m => m.getCurrentUser).getCurrentUser().premiumType = 2;
    }
    
    stop() {
        BdApi.Webpack.getModule(m => m.getCurrentUser).getCurrentUser().premiumType = this.userPremiumType;
    }
}

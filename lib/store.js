const shortid = require('shortid');

module.exports = class store {
    constructor() {
        this.info = [];

    }
    save(obj){
        obj._id = shortid();
        this.info.push(obj);
        return obj;
    }
};

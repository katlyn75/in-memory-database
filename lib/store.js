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
    getAll() {
        return this.info.slice();
    }
    get(id) {
        return this.info.find(obj => {
            if(obj._id === id) return obj;
            else return null;
        });
    }
};


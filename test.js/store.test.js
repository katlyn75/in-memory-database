const assert = require ('assert');
const Store = require ('../lib/store');


describe ('tests for store class', () => {
    
    
    it ('test to save to store', () => {
        const store = new Store();
        const toSave = store.save({ favFood: 'tacos' });
        assert.ok(toSave._id);
    });

});
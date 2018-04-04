const assert = require ('assert');
const Store = require ('../lib/store');


describe ('tests for store class', () => {
    
    const store = new Store();
    // let id;
    
    it ('test to save to store', () => {
        const toSave = store.save({ favFood: 'tacos' });
        //let id = toSave._id;
        assert.ok(toSave._id);
        assert.equal(toSave.favFood, 'tacos');
    });
    it ('test to get all', () => {
        store.save({ favFood: 'chocolate' });
        const allData = store.getAll();
        assert.equal(allData.length, 2);
        
    });
    it ('test to get id', () => {
        const toSave = store.save({ favFood: 'chocolate' });
        const result = store.get(toSave._id);
        assert.deepEqual(toSave, result);
    });

});
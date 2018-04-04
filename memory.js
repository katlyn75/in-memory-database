const store = new Store();

const toSave = {
    person: 'katlyn',
    favFood: 'tacos',
    favNumber: '7',
    favHoliday: 'Halloween',
    superpower: 'juggling'
};

const katlyn = store.save(toSave);

const get = store.get(katlyn.id);


//pseudocode
store.save({
    person: 'valerie',
    favFood: 'tacos',
    favNumber: '19',
    favHoliday: 'Christmas',
    superpower: 'stealthmode'
});

store.getAll();






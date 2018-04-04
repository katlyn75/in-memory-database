const store = new Store();

const toSave = store.save({ name: 'katlyn', favFood: 'tacos', favHoliday: 'Halloween'};
const katlyn = store.save(toSave);
//{ _shortid: 789, name 'katlyn', favFood 'tacos', favHoliday 'Halloween'}

const got = store.get(katlyn.id);
assert.deepEqual(katlyn, got);

store.save({name: 'valerie', favFood: 'tacos', favHoliday: 'Christmas'});

store.getAll();

//expect this to return 
// [
//    {name 'katlyn', favFood: 'tacos', favHoliday: 'Halloween'},
//    {name 'valerie, favFood: 'tacos', favHoliday: 'Christmas'}
// ]





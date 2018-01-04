import persist from './persist';
import config from './config';
const { storageKeys } = config;

// export function init() {
//   alasql('CREATE localStorage DATABASE IF NOT EXISTS db');
//   alasql('ATTACH localStorage DATABASE db');
//   alasql('USE db');
//
//   // alasql('CREATE TABLE IF NOT EXISTS movies (id INT, title STRING, overview STRING, poster STRING, vote_average FLOAT, vote_count INT)');
//   alasql('CREATE TABLE IF NOT EXISTS users (id INT AUTOINCREMENT, email STRING UNIQUE, password STRING, UNIQUE(email))');
// }
//
// export function insertUser(user) {
//   const { email, password } = user;
// // console.log('about to insert', `INSERT INTO users(email, password) VALUES ('${email}', '${password}')`);
//   const nextId = alasql.autoval('users', 'id', true);
//   return alasql.promise(`INSERT INTO users(id, email, password) VALUES ('${nextId}', '${email}', '${password}')`)
//   .then(function(id){
//     console.log('ALASQL OK id', id);
//     return alasql.promise(`SELECT * FROM users where id = ${id}`);
//   })
//   .then(function(res){
//     console.log('ALASQL OK user', res);
//       // Process data
//   }).catch(function(err){
//     console.log('ALASQSL ERR', err);
//       // Process errors
//   });
// }
let usersDb = persist.load(storageKeys.users) || {
  records: [],
  nextId: 1
};

export function insertUser(user) {
  console.log('Attempting to insert user', user);
  const { email, password } = user;
  const existing = usersDb.records.find(u => u.email === email);
  if(existing) {
    return Promise.reject(new Error('Duplicate email ' + email));
  }
  else {
    const newUser = {
      id: usersDb.nextId++, email, password
    };
    console.log('User not existent, proceed', newUser);
    usersDb.records.push(newUser);
    persist.save(storageKeys.users, usersDb);
    return Promise.resolve(newUser);
  }
}

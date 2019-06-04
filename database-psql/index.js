const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = new Sequelize(`${process.env.MY_DB}`, `${process.env.MY_UN}`, `${process.env.MY_PW}`, {
  host: `${process.env.MY_HOST}`,
  dialect: 'postgres',
  port: process.env.PORT // add port
});


//to check and see if sequilize is running
sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

const User = sequelize.define('user', {
  // attributesss
  name: {
    type: Sequelize.STRING,
    unique: true,
    // allowNull defaults to true
  },
  email: {
    type: Sequelize.STRING
  },
 }, {
  // options
 });


 const Pets = sequelize.define('pets', {
   name: {
     type: Sequelize.STRING
   },
   type: {
     type: Sequelize.STRING
   },
   message: {
     type: Sequelize.STRING
   },
   image: {
     type: Sequelize.STRING(500)
   },
   contact: {
     type: Sequelize.STRING(250)
   },
   userId: {
    type: Sequelize.INTEGER,
    references: { model: 'users', key: 'id'},
   }
 });

 const Comments = sequelize.define('comments', {
   message: {
     type: Sequelize.STRING
   },
   petId: {
     type: Sequelize.INTEGER,
     references: { model: 'pets', key: 'id' },
   }
 });

 

//  Pets.hasOne(User, { foreignKey: 'petsId' });
//  Pets.belongsTo(User, {foreignKey: 'userId'});
 
//  User.sync({ force: true }).then(() => {

//  Pets.sync({ force: true }).then(() => {

//   Comments.sync({ force:true }).then(() => {
    
//   });
// })
   
//   });
  


  
  

  module.exports.User = User;
  module.exports.Pets = Pets;
  module.exports.Comments = Comments;
// await client.connect()
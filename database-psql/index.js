const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.MY_DB}`, `${process.env.MY_UN}`, `${process.env.MY_PW}`, {
  host: `${process.env.MY_HOST}`,
  dialect: 'postgres',
  port: process.env.PORT
});


sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  email: {
    type: Sequelize.STRING
  },
 });


 const Pets = sequelize.define('pets', {
   ownerName: {
     type: Sequelize.STRING
   },
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
   found: {
     type: Sequelize.BOOLEAN,
     allowNull: true,
     defaultValue: false,
   },
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
 
 User.sync({ force: true }).then(() => {
   Pets.sync({ force: true }).then(() => {
     Comments.sync({ force:true }).then(() => {
     });
   });
 });
  

  module.exports.User = User;
  module.exports.Pets = Pets;
  module.exports.Comments = Comments;

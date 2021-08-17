const mongose = require('mongoose');

const connect = () =>{
  if(process.env.NODE_ENV !== 'production'){
    mongose.set('debug', true);
  }
  mongose.connect('mongodb://이름:비밀번호@localhost:27017/admin', {
    dbName: 'nodejs',
    useNewUrlParser:true,
    useCreateIndex: true,
  }, (error) => {
    if(error){
      console.log('mongoDB connect error',error);
    } else{
      console.log('mongoDB connect sucess');
    }
  });
};

mongose.connection.on('error', (error) => {
  console.error('mongoDB connect error', error);
});
mongose.connection.on('error', (error) => {
  console.error('mongoDB connection fail, try connect');
  connect();
});

module.exports = connect;

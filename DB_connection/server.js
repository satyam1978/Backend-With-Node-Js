// start server

const app = require('./src/app');
//DB connection
const connectDB = require('./src/db/db');

connectDB();

app.listen(3000, () => {
  console.log('server is running on port 3000');
});

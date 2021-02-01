//Instead of using environment variables and deploying the backend of the project,
//I have decided to use this file to contain information such as PortNumber and mongoDb url

const DB_URI =
    "mongodb+srv://ek_admin_test:v7W8T780SqwdM8Nd@cluster0.muj9w.mongodb.net/koc-finans?retryWrites=true&w=majority";
const PORT_NUMBER = 3001;

module.exports = {
    DB_URI,
    PORT_NUMBER,
};

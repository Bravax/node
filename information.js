const userName= "Xavier";
const campus= "Lille";


module.exports = {
    userName:userName,
    campus:campus }


const cowsay = require('cowsay');

console.log(cowsay.say({
  text: 'My name is Xavier',
}));
const chalk = require('chalk');
const clear = require('clear');
const clean = require('./tasks/clean.task');

export default class Clean {
  

    public async initialize(){
        clear();
        await clean();

        
    }


}
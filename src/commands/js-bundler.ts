const chalk = require('chalk');
const clear = require('clear');
const jsBundler = require('./tasks/js-bundler.task');


export default class JsBundler {
  

    public async initialize(){
        clear();
        await jsBundler();        
    }


}
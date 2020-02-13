

import chalk from 'chalk'
import clear from 'clear'
import { jsBundler } from './tasks/js-bundler.task'

export default class JsBundler {
  

    public async initialize(){
        clear();
        await jsBundler();        
    }


}
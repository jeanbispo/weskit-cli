
import chalk from 'chalk'
import clear from 'clear'
import { clean } from './tasks/clean.task'

export default class Clean {
  

    public async initialize(){
        clear();
        await clean();

        
    }


}
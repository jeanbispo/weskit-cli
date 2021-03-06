
import { Files as files } from "./../utils/files"

import fs from 'fs'
import clear from 'clear'
import chalk from 'chalk'

export default class New {
  

    public async initialize(projectName: string){
        clear();
        let appPath = `${files.getCurrentDirectory()}/${projectName}`;

        if (!files.directoryExists(appPath)){
            await fs.mkdirSync(appPath);
            await files.copyFolderRecursiveSync(__dirname + '/../../weskit_files/', appPath, '');
        } else {
            throw 'Já existe uma pasta com o mesmo nome do Projeto';
        }
    }


}
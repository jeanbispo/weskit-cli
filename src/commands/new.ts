const fs = require('fs');
const chalk = require('chalk');
const clear = require('clear');
const files = require('./../utils/files');

export default class New {

    dir: string;

    constructor() {
        this.dir = __dirname;
    }

    

    public async initialize(projectName: string){
        clear();
        let appPath = `${files.getCurrentDirectory()}/${projectName}`;

        if (!files.directoryExists(appPath)){
            await fs.mkdirSync(appPath);
            await files.copyFolderRecursiveSync(this.dir + '/../../structure_files/', appPath, '');
        } else {
            throw 'Já existe uma pasta com o mesmo nome do Projeto';
        }
    }


}
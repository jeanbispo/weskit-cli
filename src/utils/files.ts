import fs from 'fs'
import path from 'path'

export let Files: any = {

    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd());
    },

    getCurrentDirectory: () => {
        return process.cwd();
    },

    directoryExists: (filePath: string) => {
        return fs.existsSync(filePath);
    },
    copyFileSync: (source: string, target: string) => {

        var targetFile = target;

        //if target is a directory a new file with the same name will be created
        if (fs.existsSync(target)) {
            if (fs.lstatSync(target).isDirectory()) {
                targetFile = path.join(target, path.basename(source));
            }
        }

        fs.writeFileSync(targetFile, fs.readFileSync(source));
    },

    copyFolderRecursiveSync: (source: string, target: string, targetFolderPath: string) => {
        var files = [];

        //check if folder needs to be created or integrated
        var targetFolder = path.join(target, targetFolderPath);
        if (!fs.existsSync(targetFolder)) {
            fs.mkdirSync(targetFolder);
        }

        //copy
        if (fs.lstatSync(source).isDirectory()) {
            files = fs.readdirSync(source);
            files.forEach(function (file: any) {
                var curSource = path.join(source, file);
                if (fs.lstatSync(curSource).isDirectory()) {
                    Files.copyFolderRecursiveSync(curSource, targetFolder, path.basename(curSource));
                } else {
                    Files.copyFileSync(curSource, targetFolder);
                }
            });
        }
    }

}



let Files = {

    fs: require('fs'),
    path: require('path'),

    getCurrentDirectoryBase: () => {
        return Files.path.basename(process.cwd());
    },

    getCurrentDirectory: () => {
        return process.cwd();
    },

    directoryExists: (filePath: string) => {
        return Files.fs.existsSync(filePath);
    },
    copyFileSync: (source: string, target: string) => {

        var targetFile = target;

        //if target is a directory a new file with the same name will be created
        if (Files.fs.existsSync(target)) {
            if (Files.fs.lstatSync(target).isDirectory()) {
                targetFile = Files.path.join(target, Files.path.basename(source));
            }
        }

        fs.writeFileSync(targetFile, Files.fs.readFileSync(source));
    },
    
    copyFolderRecursiveSync: (source: string, target: string, targetFolderPath: string) => {
        var files = [];

        //check if folder needs to be created or integrated
        var targetFolder = Files.path.join(target, targetFolderPath);
        if (!Files.fs.existsSync(targetFolder)) {
            Files.fs.mkdirSync(targetFolder);
        }

        //copy
        if (Files.fs.lstatSync(source).isDirectory()) {
            files = Files.fs.readdirSync(source);
            files.forEach(function (file: any) {
                var curSource = Files.path.join(source, file);
                if (Files.fs.lstatSync(curSource).isDirectory()) {
                    Files.copyFolderRecursiveSync(curSource, targetFolder, Files.path.basename(curSource));
                } else {
                    Files.copyFileSync(curSource, targetFolder);
                }
            });
        }
    }

}

module.exports = Files;


const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');
const inquirer = require('inquirer');
const packageJson = require('./../package.json');

import New from './commands/new'
import Clean from './commands/clean';
import JsBundler from './commands/js-bundler';


class Run {

    newCommand: any
    cleanCommand: any
    jsBundlerCommand: any
    constructor() {
        this.newCommand = new New();
        this.cleanCommand = new Clean();
        this.jsBundlerCommand = new JsBundler();
    }

    public async initialize() {


        program.version(packageJson.version);

        this.help();
        this.new();
        this.clean();
        this.jsBundler();

        program.parse(process.argv);


    }

    protected help(){
        program
            .description("An example CLI for ordering pizza's")
            .option('-p, --peppers', 'Add peppers')
            .option('-P, --pineapple', 'Add pineapple')
            .option('-b, --bbq', 'Add bbq sauce')
            .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
            .option('-C, --no-cheese', 'You do not want any cheese');
    }
    
    private new(){
        program
        .command('new [projectName]')
        .description('Add new project')
        .action(async (projectName: string) => {
            let answers;
            if (!projectName) {
                answers = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'projectName',
                        message: 'Qual é o nome do seu projeto?',
                        validate: (value: string) => value ? true : 'Não é permitido um nome vazio'
                    }
                ]);
            }

            projectName = projectName || answers.projectName;
            try {
                await this.newCommand.initialize(projectName);
                console.log(`${chalk.green('Projeto criado com sucesso!')}`);
            } catch (error) {
                console.log(`${chalk.red(error)}`);
            }
   

            
        });
    }

    private clean(){

        program
        .command('clean')
        .description('clean www directory')
        .action(async () => {
            try {
                this.cleanCommand.initialize()
                console.log(`${chalk.green('www directory cleaned')}`);
            } catch (error) {
                console.log(`${chalk.red(error)}`);
            }
               
        });
       
    }

    private jsBundler(){

        program
        .command('jsbundler')
        .description('JavaScript Bundler')
        .action(async () => {
            try {
                this.jsBundlerCommand.initialize()
                console.log(`${chalk.green('JavaScript Bundled')}`);
            } catch (error) {
                console.log(`${chalk.red(error)}`);
            }
               
        });
       
    }

}

let run = new Run();
run.initialize();



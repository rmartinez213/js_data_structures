const BST = require('./BST');
const inquirer = require('inquirer');
const questions = require('./Questions')

var bst = new BST();
MenuOutput();

function MenuOutput() {
    inquirer.prompt([{
        type: 'list',
        name: 'choice',
        message: 'What operations would you like to implement to the BST tree?',
        choices: [
            '1 - Insert Node',
            '2 - Size',
            '3 - Delete Node',
            '4 - Contains',
            '5 - isEmpty',
            '4 - View In-Order (Left, Root, Right)', 
            '5 - View Pre-Order (Root, Left, Right)',
            '6 - View Post-Order (Left, Right, Root)',
            '7 - Left View',
            '8 - Right View',
            '9 - Display All Leaf Node Values',
            new inquirer.Separator()
        ]
    }])
        .then(answers => {
            var output = answers.choice.substring(0, 2);
        

            if (output == 1){
                inquirer.prompt(questions[0])
                .then( answers => {
                    bst.insert(answers.inputValue)
                    console.log(bst);
                    console.log()

                    MenuOutput();
                })
            }

            else if(output == 2){
                console.log('Size is: ' + bst.size() + '\n');
                MenuOutput();
            }


            else if(ouput == 3){
                inquirer.prompt(questions[1])
                .then(answers => {
                    bst.remove(answers.inputValue1);
                    
                    console.log();
                    MenuOutput();
                })
            }

            else{
                
            }
            
        })
}
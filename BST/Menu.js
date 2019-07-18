const BST = require('./BST');
const inquirer = require('inquirer');
const questions = require('./Questions')

var bst = new BST();
MenuOutput();

function MenuOutput() {
    inquirer.
        prompt([{
            type: 'list',
            name: 'choice',
            message: 'What operations would you like to implement to the BST tree?',
            choices: [
                '1 - Insert Node',
                '2 - Size',
                '3 - Delete Node',
                '4 - Contains',
                '5 - isEmpty',
                '6 - View In-Order (Left, Root, Right)', 
                '7 - View Pre-Order (Root, Left, Right)',
                '8 - View Post-Order (Left, Right, Root)',
                '9 - Left View',
                '10 - Right View',
                '11 - Display All Leaf Node Values',
                new inquirer.Separator(),
            ]
        }])
        .then(answers => {
            var ansOutput = answers.choice.substring(0, 2);
        

            if (ansOutput == 1) {
                inquirer.prompt(questions[0])
                .then(answers => {
                    bst.insert(answers.inputValue)
                    console.log(bst);
                    console.log()

                    MenuOutput();
                })
            }

            else if(ansOutput == 2){
                console.log('Size is: ' + bst.size() + '\n');
                console.log(bst)
                MenuOutput();
            }


            else if (ansOutput == 3) {
                inquirer.prompt(questions[1])
                    .then(answers => {
                        console.log(bst.remove(answers.inputValue1));
                        MenuOutput();
                })
            }

            else if(ansOutput == 4){
                inquirer.prompt(questions[2])
                    .then(answers => {
                        console.log(bst.contains(answers.inputValue2));
                        console.log();
                        MenuOutput();
                })
            }

            else if(ansOutput == 5){
                console.log(bst.isEmpty());
                console.log();
                MenuOutput();
            }

            else if(ansOutput == 6){
                console.log(bst.bfsInOrder());
                console.log();
                MenuOutput();
            }

            else if(ansOutput == 7){
                console.log(bst.bfsPreOrder());
                console.log();
                MenuOutput();
            }

            else if(ansOutput == 8){
                console.log(bst.bfsPostOrder());
                console.log();
                MenuOutput();
            }

            else if(ansOutput == 9){
                console.log(bst.LeftView());
                console.log();
                MenuOutput();
            }

            else if(ansOutput == 10){
                console.log(bst.RightView());
                console.log();
                MenuOutput();
            }

            else if(ansOutput == 11){
                console.log(bst.LeafNodes());
                console.log();
                MenuOutput();
            }
            
        })
}
const LinkedList = require('./LinkedList');
const Menu = require('./LinkedListMenu');
const inquirer = require('inquirer');
const LinkedListQuestion = require('./LinkedListQuestion');

//console.log(Menu.call())
var menuQuestion = LinkedListQuestion.call();


var linkedList = new LinkedList();
MenuDialogue();

function MenuDialogue() {

    inquirer
        .prompt([{
            type: 'list',
            name: 'choice',
            message: 'What seletion from the menu would you like to make? ',
            choices: [
                '1 - Append Node',
                '2 - Prepend Node',
                '3 - Remove Node (by value)',
                '4 - Remove Node (by index)',
                '5 - Contains',
                '6 - Size',
                '7 - isEmpty',
                '8 - Print List',
                new inquirer.Separator()
            ]
        }])
        .then(answers => {
            var ansOutput = answers.choice.substring(0, 2);

            if (ansOutput == 1) {

                inquirer
                    .prompt(menuQuestion[1])
                    .then(answers => {
                        linkedList.append(answers.menuInput1);
                        console.log(linkedList.printLinkedList() + '\n');

                        MenuDialogue();
                    })
            } else if (ansOutput == 2) {
                inquirer
                    .prompt(menuQuestion[2])
                    .then(answers => {
                        linkedList.prepend(answers.menuInput2);
                        console.log(linkedList.printLinkedList() + '\n');
                        
                        MenuDialogue();
                    })
            } else if (ansOutput == 3) {
                inquirer
                    .prompt(menuQuestion[3])
                    .then(answers => {
                        linkedList.removeNodeVal(answers.menuInput3);
                        console.log(linkedList.printLinkedList() + '\n');
                        
                        MenuDialogue();
                    })
            } else if (ansOutput == 4) {
                inquirer.prompt(menuQuestion[4])
                    .then(answers => {
                        linkedList.removeNodeValIndex(answers.menuInput4);
                        console.log(linkedList.printLinkedList() + '\n');
                        
                        MenuDialogue();
                    })
            } else if (ansOutput == 5) {
                inquirer
                    .prompt(menuQuestion[5])
                    .then(answers => {
                        console.log(linkedList.contains(answers.menuInput5));
                        
                        MenuDialogue();
                    })
            } else if (ansOutput == 6) {
                console.log('Size: ' + linkedList.size() + '\n');
                
                MenuDialogue();
            } else if (ansOutput == 7) {
                console.log(linkedList.isEmpty() + '\n');
                
                MenuDialogue();
            } else if (ansOutput == 8) {
                console.log(linkedList.printLinkedList() + '\n');
                
                MenuDialogue();
            } else if (ansOutput == 9) {
                console.log('Closing program');
                process.exit();
            } else {
                console.log('Incorrect input...');
            }
        });
}

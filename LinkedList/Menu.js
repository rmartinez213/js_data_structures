const LinkedList = require('./LinkedList');
const LinkedListQuestion = require('./LinkedListQuestion');
const inquirer = require('inquirer');

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
                '9 - Total instances',
                '10 - Close Application',
                new inquirer.Separator(),
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

                        if (linkedList.nodeValInstances(answers.menuInput3) > 1) {
                            inquirer
                                .prompt({
                                    type: 'list',
                                    name: 'choiceInp',
                                    message: 'Multiple instances found, would you like to delete them all? ',
                                    choices: [
                                        'Yes',
                                        'No'
                                    ]
                                })
                                .then(answers2 => {
                                    if (answers2.choiceInp == 'Yes') {
                                        console.log('All nodes removed')
                                        linkedList.removeAllNodesVal(answers.menuInput3);
                                        console.log(linkedList.printLinkedList() + '\n');

                                        MenuDialogue();
                                    }
                                    else {
                                        console.log('First node removed');
                                        linkedList.removeNodeVal(answers.menuInput3);
                                        console.log(linkedList.printLinkedList() + '\n');

                                        MenuDialogue();
                                    }
                                })
                        }
                        else {
                            linkedList.removeNodeVal(answers.menuInput3);
                            console.log(linkedList.printLinkedList() + '\n');

                            MenuDialogue();
                        }
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
                inquirer
                    .prompt(menuQuestion[6])
                    .then(answers => {
                        console.log(linkedList.nodeValInstances(answers.menuInput6) + ' instances -> For the value of ' + answers.menuInput6 + '\n');

                        MenuDialogue();
                    })

            } else if (ansOutput == 10) {
                console.log('Closing program');
                process.exit();
            } else {
                console.log('Incorrect input...');
            }
        });
}

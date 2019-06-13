const LinkedList = require('./LinkedList');
const Menu = require('./LinkedListMenu');
const inquirer = require('inquirer');
const LinkedListQuestion = require('./LinkedListQuestion');

console.log(Menu.call())
var menuQuestion = LinkedListQuestion.call();


var linkedList = new LinkedList();
MenuDialogue();

function MenuDialogue() {

    inquirer
        .prompt(menuQuestion[0])
        .then(answers => {
            console.log(answers.menuInput);

            if (answers.menuInput == 1) {

                inquirer
                    .prompt(menuQuestion[1])
                    .then(answers => {
                        console.log(answers.menuInput1);
                        linkedList.append(answers.menuInput1);
                        console.log(linkedList);

                        console.log(Menu.call());
                        MenuDialogue();
                    })
            } else if (answers.menuInput == 2) {
                inquirer
                    .prompt(menuQuestion[2])
                    .then(answers => {
                        console.log(answers.menuInput2);
                        linkedList.prepend(answers.menuInput2);
                        console.log(linkedList);

                        console.log(Menu.call());
                        MenuDialogue();
                    })
            } else if (answers.menuInput == 3) {
                inquirer
                    .prompt(menuQuestion[3])
                    .then(answers => {
                        console.log(answers.menuInput3);
                        linkedList.removeNodeVal(answers.menuInput3);
                        console.log(linkedList);

                        console.log(Menu.call());
                        MenuDialogue();
                    })
            } else if (answers.menuInput == 4) {
                inquirer.prompt(menuQuestion[4])
                    .then(answers => {
                        console.log(answers.menuInput4);
                        linkedList.removeNodeValIndex(answers.menuInput4);
                        console.log(linkedList);

                        console.log(Menu.call());
                        MenuDialogue();
                    })
            } else if (answers.menuInput == 5) {
                inquirer
                    .prompt(menuQuestion[5])
                    .then(answers => {
                        console.log(linkedList.contains(answers.menuInput5));

                        console.log(Menu.call());
                        MenuDialogue();
                    })
            } else if (answers.menuInput == 6) {
                console.log('This is the size of the linked list: ' + linkedList.size());

                console.log(Menu.call());
                MenuDialogue();
            } else if (answers.menuInput == 7) {
                console.log(linkedList.isEmpty());

                console.log(Menu.call());
                MenuDialogue();
            } else if (answers.menuInput == 8) {
                linkedList.printLinkedList();

                console.log(Menu.call());
                MenuDialogue();
            } else if (answers.menuInput == 9) {
                console.log('Closing program');
                process.exit();
            } else {
                console.log('Incorrect input...');
            }
        });
}

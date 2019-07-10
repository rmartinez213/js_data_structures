function questions() {
    var menuQuestion = [
        {
            type: 'input',
            name: 'menuInput',
            message: "What seletion from the menu would you like to make? "
        },

        {
            type: 'input',
            name: 'menuInput1',
            message: "Value of appended node value? "
        },

        {
            type: 'input',
            name: 'menuInput2',
            message: "Value of prepended node value? "
        },

        {
            type: 'input',
            name: 'menuInput3',
            message: "[Value] What node value would you like to remove? "
        },

        {
            type: 'input',
            name: 'menuInput4',
            message: "[Index] What node index would you like to remove? "
        },

        {
            type: 'input',
            name: 'menuInput5',
            message: "[Contains] What node value would you like search for? "
        },

        {
            type: 'input',
            name: 'menuInput6',
            message: 'What value would you like to see how many instances there are? '
        },

        {
            type: 'confirm',
            name: 'menuConfirm',
            message: 'Multiple instances found, would you like to delete them all? '
        }
    ]

    return menuQuestion;
}

module.exports = questions;
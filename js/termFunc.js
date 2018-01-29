var tellOut = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
];
var manual = {
    "about": "Shows the section with a description about me and what I do.",
    "cat": ['Concatenates function to standard output. Example:',
        '"cat hello" outputs the function source code for "hello"'],
    "contact": "Shows the section with a form to contact me.",
    "clear": "Clears the current terminal display.",
    "date": "Outputs the current date provided by JavaScript.",
    "details": "Shows the section with details of my skills.",
    "echo": ['Outputs the user input. For example:',
        '"echo just saying hi" outputs "just saying hi"'],
    "hello": "How are you?",
    "help": "Provides a quick summary of this terminal.",
    "ls": "Lists all available commands of this terminal.",
    "man": "Outputs a general description of how to use this terminal.",
    "mk": ['Adds a new command to use for the current session.',
        'For example, enter "mk myCommand 23*27".',
        'This creates the command "myCommand" to be used.',
        'Calling "myCommand" will then output "621".'],
    "secret": "Shhh",
    "tell": ['Provides the answers to your yes/no questions.',
        'Usage: "tell me if I am smart" will yield an answer.',
        'Warning: results may be alarming.'],
    "time": "Outputs the current time provided by JavaScript.",
    "work": "Shows the section with my projects and experiences."
}
var commands = {
    "about": function () {
        scrollTo("about");
        display("");
    },
    "cat": function (a) {
        display(commands[a]);
    },
    "contact": function () {
        scrollTo("contact");
    },
    "clear": function () {
        var t = document.getElementById("termBodyOutput");
        while (t.firstChild) {
            t.removeChild(t.firstChild);
        }
    },
    "date": function () {
        var d = new Date();
        display(d.toDateString());
    },
    "details": function () {
        scrollTo("deets");
        display("");
    },
    "echo": function () {
        display(arguments);
    },
    "hello": function () {
        display('Hi there!');
    },
    "help": function () {
        helpText = ['Gary\'s Terminal [Version: 1.8.16]',
            'https://github.com/therealgary',
            'Enter "ls" to list all commands',
            'Enter "man" to read the manual']
        display(helpText, '\n');
    },
    "ls": function () {
        display(commands);
    },
    "man": function () {
        manText = ['This is a not the typical terminal you are familiar with.',
            'It is very basic and was created just for fun. Nothing will be saved.',
            'The general use is just entering a command followed by parameters.',
            'For example, enter "all" to list available commands.',
            'Apply the proper parameters as specified from "--help".',
            'For example, enter "mk --help" to see parameter description for "mk".',
            'You can use "&&" to execute multiple commands.',
            'Piping commands is unavailable. Basic arithmetic is possible.',
            'Try playing around with this yourself. Enjoy.']
        display(manText, '\n');
    },
    "mk": function (a, b) {
        commands[a] = function () { display(eval(b)); };
        display("");
    },
    "secret": function () {
        //mini adventure game
        display("");
    },
    "tell": function () {
        if (arguments.length == 0) {
            display("What can I tell you?");
        }
        else {
            display(tellOut[Math.floor(Math.random() * tellOut.length)]);
        }
    },
    "time": function () {
        var d = new Date();
        display(d.toTimeString());
    },
    "work": function () {
        scrollTo("work");
        display("");
    }
};

function interpret(a) {
    var b = a.split(" ");
    if (hasNum(b[0])) {
        try {
            display(eval(a))
        }
        catch (err) {
            display(err);
        }
    }
    else {
        var tmpArgs = [];
        for (var i = 0; i <= b.length; i++) {
            if (i == b.length || b[i] == "&&") {
                var c = tmpArgs[0];
                tmpArgs.shift();
                try {
                    if (commands[c]) {
                        commands[c].apply(this, tmpArgs);
                    }
                    else if (!c) {
                        return;
                    }
                    else {
                        display("Unknown command, please try again.")
                    }
                }
                catch (err) {
                    display(err);
                }
                tmpArgs = [];
            }
            else if (b[i] == "--help") {
                if (manual[tmpArgs[0]]) {
                    display(manual[tmpArgs[0]], '\n');
                }
                else {
                    display("No such entry exists.");
                }
                tmpArgs = [];
            }
            else if (b[i] != "") {
                tmpArgs.push(b[i]);
            }
        }
    }
}
function hasNum(a) {
    return /\d/.test(a);
}
function display(a, b = " ") {
    var tmp = document.createElement("div");
    tmp.classList.add("termBodySection");
    tmp.textContent = currStr + '\r\n';
    if (typeof (a) != 'object') {
        tmp.textContent += a;
    }
    else {
        tmpStr = "";
        try {
            for (var i of a) {
                tmpStr += i + b;
            }
        }
        catch (err) {
            for (var i in a) {
                tmpStr += i + b;
            }
        }
        tmp.textContent += tmpStr;
    }
    document.getElementById("termBodyOutput").appendChild(tmp);
}
function scrollTo(a) {
    document.getElementById(a).scrollIntoView({ behaviour: 'smooth' });
}
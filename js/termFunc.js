var askingResults = [
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
    "asking": ['Provides the answers to your yes/no questions.',
        'Usage: "asking am I cool?" will provide an answer.',
        'Warning: results may be alarming.'],
    "cat": ['Displays the source code of a command.',
        'Usage: "cat hello" outputs the source code for "hello"'],
    "contact": "Shows the section with a form to contact me.",
    "clear": "Clears the current terminal display.",
    "date": "Outputs the current date provided by JavaScript.",
    "details": "Shows the section with details of my skills.",
    "echo": ['Outputs the line of text that was entered.',
        'Usage: "echo ring ring" outputs "ring ring"'],
    "hi": "How are you?",
    "hello": "What can I help you with?",
    "help": "Outputs a general description of how to use this terminal.",
    "info": "Provides a quick summary of this terminal.",
    "ls": "Lists all available commands of this terminal.",
    "mk": ['Adds a new command to use for the current session.',
        'For example, enter "mk myCommand 23*27".',
        'This creates the command "myCommand" to be used.',
        'Calling "myCommand" will then output "621".'],
    "play": "Just a little game if you're bored.",
    "secret": "Shhh",
    "sort": ['Returns the input sorted in alphabetical order.',
        'Usage: "sort bananas apples" will return "apples bananas".'],
    "time": "Outputs the current time provided by JavaScript.",
    "work": "Shows the section with my projects and experiences."
}
var commands = {
    "about": function () {
        scrollTo("#about");
        display("");
    },
    "asking": function () {
        if (arguments.length == 0) {
            display("What do you want to know?");
        }
        else {
            display(askingResults[Math.floor(Math.random() * askingResults.length)]);
        }
    },
    "cat": function (a) {
        display(commands[a]);
    },
    "contact": function () {
        scrollTo("#contact");
        display("");
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
        scrollTo("#deets");
        display("");
    },
    "echo": function () {
        display(arguments);
    },
    "hello": function () {
        display('Hi there!');
    },
    "help": function () {
        var helpText = ['To get started, enter "ls" to list available commands.',
            'Enter a command followed by "--help" to learn how to use it.',
            'Example: "mk --help" describes the function and parameters for "mk".',
            'Note: This is a not a real terminal, just a fun little something.']
        display(helpText, '\n');
    },
    "hi": function () {
        display('Hey...');
    },
    "info": function () {
        var helpText = ['Terminal [Version: 1.8.16]',
            '(c) 2020 Gary Chi',
            'https://github.com/grychi']
        display(helpText, '\n');
    },
    "ls": function () {
        display(commands);
    },
    "mk": function (a, b) {
        commands[a] = function () { display(eval(b)); };
        display("");
    },
    "play": function () {
        var gameText = ['Mini Adventure Game',
            'Press "enter" to start.',
            'Type "end" to end game.'];
        display(gameText, '\n');
        playGame();
    },
    "secret": function () {
        var secretText = ['Can you figure out what this is?',
            btoa("left right left right"),
            'Maybe it will lead somewhere.'];
        display(secretText, '\n');
    },
    "sort": function (a) {
        var toSort = [];
        for (var i = 0; i < arguments.length; i++) {
            toSort.push(arguments[i]);
        }
        toSort.sort();
        display(toSort);
    },
    "time": function () {
        var d = new Date();
        display(d.toTimeString());
    },
    "work": function () {
        scrollTo("#work");
        display("");
    }
};

function interpret(a) {
    var b = a.split(" ");
    if (inGame) {
        currGame.next();
    }
    else {
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
                            var simRes = similarTo(c);
                            if (simRes) {
                                display('Unknown command, do you mean "' + simRes + '"?');
                            }
                            else {
                                display('Unknown command, please try again.');
                            }
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
}
function hasNum(a) {
    return /\d/.test(a);
}
function display(a, b = " ") {
    var tmp = document.createElement("div");
    tmp.classList.add("termBodySection");
    tmp.classList.add("noselect");
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
    if (document.getElementById("termBodyOutput")) {
        document.getElementById("termBodyOutput").appendChild(tmp);
    }
}

function similarTo(a) {
    var similar = 0.5;
    for (var c in commands) {
        var dis = LevenshteinDistance(a, a.length, c, c.length);
        var percentError = ((c.length - dis) / c.length);
        if (percentError >= similar && percentError != 1 && a.length < c.length + 3) {
            return c;
        }
        else if (percentError == 1) {
            return c;
        }
    }
    return null;
}

function LevenshteinDistance(s, len_s, t, len_t) {
    var cost;
    if (len_s == 0) return len_t;
    if (len_t == 0) return len_s;
    if (s[len_s - 1] == t[len_t - 1])
        cost = 0;
    else
        cost = 1;
    return Math.min(LevenshteinDistance(s, len_s - 1, t, len_t) + 1,
        LevenshteinDistance(s, len_s, t, len_t - 1) + 1,
        LevenshteinDistance(s, len_s - 1, t, len_t - 1) + cost);
}
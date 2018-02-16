var inGame = false;
var currGame;
function playGame() {
    inGame = true;
    function game() {
        this.state = {
            "retries": 0, // takes gems
            "currEvent": false, // used for inputs
            "currEventType": 0
        }
        this.next = function (a) {
            var gameText = "";
            if (currStr != "end") {
                var whichEvent = Math.floor(Math.random() * 2);
                var gameSubject, gameEventText, gamePromptText;
                if (whichEvent) {
                    gameSubject = animals[Math.floor(Math.random() * animals.length)];
                }
                else {
                    gameSubject = mystics[Math.floor(Math.random() * mystics.length)];
                }
                if (['a', 'e', 'i', 'o', 'u'].indexOf(gameSubject[0].toLowerCase()) !== -1) {
                    gameSubject = "an " + gameSubject;
                }
                else {
                    gameSubject = "a " + gameSubject;
                }
                this.stats.events += 1;
                gameText = ['On your way, you encounter ' + gameSubject + '.',
                    'Will you continue (Y/N)?'];
            }
            else {
                inGame = false;
                gameText = ['You ended the game with ' + this.stats.events + ' encounters',
                'and ' + this.stats.gems + ' gems.'];
            }
            display(gameText, '\n');
        }
        this.stats = {
            "events": 0, // events*4 + 20 = mystic health
            "gems": 0, // score
            "luck": Math.random() * 0.4 + 0.4, //for potential attack and item drop
            "power": 10, // events/15 + 10
            "energy": 3, // events/20 + 3
            "potential": 10, // events/12 + 10
            "rich": 1 // gem multiplier
        }
        this.completion = new Set();
        this.inventory = new Set();

        var mystics = "Centaur, Chimera, Cyclops, Dragon, Dwarf, Elf, Fairy, Ghost, Giant, Goblin, Hermit, Hydra, Knight, Mermaid, Minotaur, Nymph, Ogre, Orc, Pegasus, Skeleton, Troll, Unicorn, Vampire, Werewolf, Wizard, Yeti, Zombie";
        var animals = "alligator, anteater, armadillo, auroch, axolotl, badger, bat, beaver, buffalo, camel, chameleon, cheetah, chipmunk, chinchilla, chupacabra, cormorant, coyote, crow, dingo, dinosaur, dog, dolphin, duck, elephant, ferret, fox, frog, giraffe, gopher, grizzly, hedgehog, hippo, hyena, jackal, ibex, ifrit, iguana, kangaroo, koala, kraken, lemur, leopard, liger, lion, llama, manatee, mink, monkey, moose, narwhal, nyan cat, orangutan, otter, panda, penguin, platypus, python, pumpkin, quagga, rabbit, raccoon, rhino, sheep, shrew, skunk, slow loris, squirrel, tiger, turtle, walrus, wolf, wolverine, wombat";
        mystics = mystics.toLowerCase();
        mystics = mystics.split(", ");
        animals = animals.split(", ");
        var bonuses = ["pet rock", "shiny coin", "lucky pendant", "wooden sword", "diamond sword"];

        function addBonus(a) {
            if (inventory.has(a)) {
                return false;
            }
            inventory.add(a);
            switch (a) {
                case "pet rock": // gives courage
                    this.stats.potential += 10;
                    break;
                case "shiny coin": // makes it rain
                    this.stats.rich += 1;
                    break;
                case "lucky pendant": // more luck
                    this.stats.luck += 0.15;
                    break;
                case "wooden sword": // more damage
                    this.stats.power += 5;
                    break;
                case "diamond sword": // extra damage
                    this.stats.power += 10;
                    break;
                default:
                    console.log("error");
            }
            return true;
        }
    }
    currGame = new game();
}
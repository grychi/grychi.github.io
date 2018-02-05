var inGame = false;
var currGame;
function playGame() {
    inGame = true;
    function game() {
        this.next = function (a) {
            var gameText = "";
            if (currStr != "end") {
                var gameSubject = mystics[Math.floor(Math.random() * mystics.length)];
                if (['a', 'e', 'i', 'o', 'u'].indexOf(gameSubject[0].toLowerCase()) !== -1) {
                    gameSubject = "an " + gameSubject;
                }
                else {
                    gameSubject = "a " + gameSubject;
                }
                gameText = ['On your way, you encounter ' + gameSubject + '.',
                    'What would you do?'];
            }
            else {
                inGame = false;
                gameText = ['You ended the game with ' + this.stats.events + ' encounters',
                'and ' + this.stats.gems + ' gems.'];
            }
            display(gameText, '\n');
        }
        this.stats = {
            "events": 0,
            "gems": 0,
            "luck": Math.random() * 0.4 + 0.4,
            "power": 10,
            "energy": 10,
            "potential": 10,
            "rich": 1
        }
        this.inventory = new Set();

        var mystics = "Centaur, Chimera, Cyclops, Dragon, Dwarf, Elf, Fairy, Ghost, Giant, Goblin, Hermit, Hydra, Knight, Mermaid, Minotaur, Nymph, Ogre, Orc, Pegasus, Skeleton, Troll, Unicorn, Vampire, Werewolf, Wizard, Yeti, Zombie";
        var animals = "alligator, anteater, armadillo, auroch, axolotl, badger, bat, beaver, buffalo, camel, chameleon, cheetah, chipmunk, chinchilla, chupacabra, cormorant, coyote, crow, dingo, dinosaur, dog, dolphin, duck, elephant, ferret, fox, frog, giraffe, gopher, grizzly, hedgehog, hippo, hyena, jackal, ibex, ifrit, iguana, kangaroo, koala, kraken, lemur, leopard, liger, lion, llama, manatee, mink, monkey, moose, narwhal, nyan cat, orangutan, otter, panda, penguin, platypus, python, pumpkin, quagga, rabbit, raccoon, rhino, sheep, shrew, skunk, slow loris, squirrel, tiger, turtle, walrus, wolf, wolverine, wombat";
        mystics = mystics.toLowerCase();
        mystics = mystics.split(", ");
        animals = animals.split(", ");
        var bonuses = ["pet rock", "shiny coin", "lucky pendant", "wooden sword", "diamond sword"];

        function addBonus(a) {
            if (collection.has(a)) {
                return false;
            }
            collection.add(a);
            switch (a) {
                case "pet rock":
                    stats.potential += 2;
                    break;
                case "shiny coin":
                    stats.rich += 1;
                    break;
                case "lucky pendant":
                    stats.luck += 0.1;
                    break;
                case "wooden sword":
                    stats.power += 5;
                    break;
                case "diamond sword":
                    stats.power += 10;
                    break;
                default:
                    console.log("error");
            }
            return true;
        }
    }
    currGame = new game();
}
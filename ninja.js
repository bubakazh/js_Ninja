
class Ninja{
    // CONSTRUCTOR WITH DEFAULT VALUES. GOTTA PASS IN NAME AND HEATLH, STR AND SPD WILL BE DEFAULT UNLESS SPECIFIED.
    constructor(name, health, strength = 3, speed = 3){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.speed = speed;
    }

    sayMyName(){
        console.log(`俺は${this.name}！喧嘩売ってんのか？！`); // ! GOTTA USE THEM BACKTICKS INSTEAD OF THE SINGLE QUOTES... YEESH...
        return this;
    }

    showStats(){
        console.log(`NAME: ${this.name} \n` + `HEALTH: ${this.health} \n` + `STR: ${this.strength} \n` + `SPD: ${this.speed} \n`); // ! BACKTICKS, BRO!
        return this;
    }

    drinkSake(){
        this.health += 10;
        return this;
    }

}

let troy = new Ninja('とろい', 960);
troy.sayMyName().drinkSake().drinkSake().drinkSake().showStats();

class Sensei extends Ninja{
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10)
        this.wisdom = wisdom;
    }

    speakWisdom(){
        const quotes = [
        {
            quote: "Do not pity the dead. Pity the living, and above all, those who live without love."
        },
        {
            quote: "It is impossible to manufacture or imitate love."
        },
        {
            quote: "Being different isn't a bad thing. I mean that you are brave enough to be yourself."
        },
        {
            quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals."
        },
        {
            quote: "Never trust anything that can think for itself if you can't see where it keeps its brain."
        },
        {
            quote: "Every human life is worth the same, and worth saving."
        },
        {
            quote: "Keep calm, and have a biscuit."
        },
        {
            quote: "Happiness can be found even in the darkest of times if one only remembers to turn on the light."
        },
        {
            quote: "Socks are wonderful. They keep your feet warm, and if your feet are warm, you are warm. If you are warm, then your soul is warm."
        }
        ];
        let arrayIndex = Math.floor(Math.random() * quotes.length);
        console.log(quotes[arrayIndex].quote);
    }
}

const richard = new Sensei("Master of Wisdom")
richard.showStats(); 
richard.speakWisdom();
// console.log(`WIS: ${richard.wisdom}`);
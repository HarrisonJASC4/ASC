//Name, HP, Attack, Defense, Legend

var roster = [
    ["Wailord", 170, 90, 45, false],
    ["Lucario", 70, 110, 70, true],
    ["Garchomp", 108, 130, 95, false],
    ["Gigalith", 85, 135, 130, false],
    ["Shiftry", 90, 100, 60, false],
    ["Keldeo", 91, 72, 90, true],
]


function pokemon(Name, Type, HP, Atk, Def, Legend) {
    this.name = Name;
    this.type = Type;
    this.HP = HP;
    this.Atk = Atk;
    this.Def = Def;
    this.Legend = Legend;
}

var Wailord = new pokemon("Wailord", "water", 170, 90, 45, false);
var Lucario = new pokemon("Lucario", ["Steel", "Fighting"], 70, 110, 70, true);
var Garchomp = new pokemon("Garchomp", ["Dragon", "Ground"], 108, 130, 95, false);
var Gigalith = new pokemon("Gigalith", "Rock", 85, 135, 130, false);
var Shiftry = new pokemon("Shiftry", ["Dark", "Grass"], 90, 100, 60, false);
var Keldeo = new pokemon("Keldeo", ["Water", "Fighting"], 91, 72, 90, true);

var myArray = [Wailord, Lucario, Garchomp, Gigalith, Shiftry, Keldeo];

function pokemonAttacked(HP) {
    for (var i = 0; i < myArray.length; i++) {
        myArray[i].HP = myArray[i].HP - 10;
        console.log(myArray[i]);
    }

}

pokemonAttacked()
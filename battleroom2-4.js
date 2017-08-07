var num = 65.2345
var n = num.toFixed(2);
console.log(n);


var usd
var cny

function usdcny() {

    if (usd == true) {
        usd = cny / 6
        return console.log(usd + "American Dollars")
    }

    if (cny == true) {
        cny = usd * cny;
        console.log(cny + "Chinese Yuan");
    }

}

function usdcny(cny)
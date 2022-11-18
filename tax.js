var running = false;

var dblClicked = 0;


var i = 0;

function toggleButton() {

    if (running) {
        running = false;
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("priceLabel").style.color = "#e11e34";
    }
    else {
        running = true;
        document.getElementById("body").style.backgroundColor = "#e11e34";
        document.getElementById("priceLabel").style.color = "white";

        if (i <! 0) {
            document.getElementById("priceLabel").innerHTML = "0:-";
        }
    }
}



function CheckTax() {
    if (running) {
        i = i + 1;
        document.getElementById("priceLabel").innerHTML = i + ":-";
        console.log(Interval);
    }
}


function dblClick() {

    dblClicked += 1;


    if (dblClicked == 1) {
        var startPrice = i;
        document.getElementById("label").innerHTML = "Framkörningsavgift: " + startPrice + ":-";
        toggleButton();
    }
    
    if (dblClicked == 2) {
        var totalPrice = i;
        document.getElementById("total").innerHTML = "Totalt: " + totalPrice + ":-";
        toggleButton();
    }

    if (dblClicked == 3) {
        location.reload();
    }
}

function ChangeInterval() {
    Interval = document.getElementById("IntervalChanger").value;
    document.getElementById("IntervalLabel").innerHTML = "Interval: " + Interval;
    console.log("Interval: " + Interval);
    Interval = 0;
}

var Update = setInterval(CheckTax, 5*1000);
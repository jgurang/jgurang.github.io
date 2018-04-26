

$( document ).ready(function() {
    makeBowls();
});
$(document).ready(function () {
    $('img').not( document.getElementById( "chip" )).on('dragstart', function () {
        return false;
    });
});
let timer;
// let requestID;
let guacEaten = 0;
let guacWasted = 0;

    // $(document).ready(function () {
    //     $('#html5').on('dragstart', function () {
    //         return false;
    //     });
    // });

$("#start").click(function(){

    if ($("#start").text() === "START!"){
        timer = setInterval(function(){
        popUp(); }, 2000);
        startButtonToggle();
    } else {
        clearInterval(timer);
        startButtonToggle();
    }
}
);



function speedUp(amount){
    let intInt = amount * 20;
    clearInterval(timer);
    timer = setInterval(function(){
        popUp(); }, 1000 - intInt);
}

function startButtonToggle(){
    let startButton = $("#start");
    if (startButton.text() === "START!") {
        startButton.toggleClass( "stop" );
        startButton.text("STOP!");
    } else{
        startButton.text("START!");
        startButton.toggleClass("stop");
    }
}

function makeBowls() {
    let bowlSpace=$(".bowl");
    bowlSpace.each(function(){
        $(this).html(`<img src="img/mortar.png" class="mortar"/>`);
    });
}



function popUp(){
    if (guacWasted > guacEaten){
        lose()}
    let guacWastedDisplay = $("#guacWasted");
    let bowlSpace = $(".bowl");
    let randomNumber = rando(bowlSpace.length);
    let currentBowl = $(bowlSpace[randomNumber]);
    if (currentBowl.find("img").hasClass("mortar")) {
        currentBowl.html(`<img src="img/avo.png" class="avo"/>`);
    } else if (currentBowl.find("img").hasClass("avo")){
        currentBowl.html(`<img src="img/avo_brown.png" class="avo_brown"/>`);
        setTimeout(clearOldAvos, 1000);
    } else if (currentBowl.find("img").hasClass("guac")){
        currentBowl.html(`<img src="img/guac_brown.png" class="guac_brown"/>`);
        setTimeout(clearOldGuac, 1000);
    } else if (currentBowl.find("img").hasClass("guac_brown")){
        currentBowl.html(`<img src="img/mortar.png" class="mortar"/>`);

    } else if (currentBowl.find("img").hasClass("guac_w_chip")){
        currentBowl.html(`<img src="img/mortar.png" class="mortar"/>`)
    } else if (currentBowl.find("img").hasClass("avo_brown")){
        currentBowl.html(`<img src="img/mortar.png" class="mortar"/>`);
    }
}
function rando(seed) {
    let number = Math.floor(Math.random() * seed);
    return number
}

$("#container").css('cursor','url(./img/pestle.png) 16 50,auto');

$("#container").click(function() {
    if ($(event.target).hasClass("avo")) {
        $(event.target).parent().html(`<img src="img/guac.png" class="guac"/>`);
        if ($(".guac").length < 3) {
            $("#chipOutline").fadeIn(1000, function () {
                $("#chipOutline").fadeOut(3000);
            });
        }
    }
}
);

function clearOldAvos() {
    let avoBrownList = $(".avo_brown");
    avoBrownList.parent().html(`<img src="img/mortar.png" class="mortar"/>`);
    let brownAvos = avoBrownList.length;
    guacWasted += brownAvos;
    $("#guacWasted").text(guacWasted);
}

function clearOldGuac(){
    let guacBrownList = $(".guac_brown");
    guacBrownList.parent().html(`<img src="img/mortar.png" class="mortar"/>`);
    let brownGuac = guacBrownList.length;
    guacWasted += brownGuac;
    $("#guacWasted").text(guacWasted);
}

function lose(){
    clearInterval(timer);
    $("#loseSlider").animate({width: "100%"}, {queue: false, duration: 2000});
    $("#loseText").fadeIn(3000);
    $("#loseText2").fadeIn(4000);
    $("#playAgain").fadeIn(5000);

}

$('#playAgain').click(function() {
    window.location.reload(true);
});
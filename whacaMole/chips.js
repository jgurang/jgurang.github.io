$("#chip").draggable({
    containment: '#borderBox',
    helper: "clone",
    cursor: "move",
    start: function( event, ui ) {
        $('.guac').droppable( {
        activeClass: "guacDroppable wobble",
        drop: handleDropEvent,
        greedy: true
    } );
    },
});



function handleDropEvent(){
    let targetArea = $(event.target);
    targetArea.parent().html(`<img src="img/guac_w_chip.png" class="guac_w_chip"/>`);
    guacEaten += 1;
    $("#guacEaten").text(guacEaten);
    setTimeout(clearGuacWithChip, 1000);
    speedUp(1);
}

function clearGuacWithChip() {
    $(".guac_w_chip").parent().html(`<img src="img/mortar.png" class="mortar"/>`)
}
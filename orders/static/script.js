$(function(){   
    // document ready 
    portrait();

    $(window).on("resize",function(){
        portrait();
    });
    $('#basket_icon').on('click',showCheckout);
    $('#continueShopping').on('click',hideCheckout);
});


function portrait() {
    let documentH=$(document).innerHeight();
    let windowH=$(window).innerHeight();
    let x=100*documentH/windowH;
    if (vertical()) { 
        x=x+100+'% '+x+'%';
        $('body').css("background-size", x);
        $('#basket_icon').css('visibility','visible');
    } else {
        x=x+'% '+x+'%';
        $('body').css("background-size", x);
        $('#basket_icon').css('visibility','hidden');
        $('#checkout').css({'display':'block','position':'static','background-color': 'transparent'});
    }   
}

function vertical() {
    if (window.innerWidth<window.innerHeight) {
        return true;
    }
    return false;
}
function showCheckout() {
    $('#continueShopping').css('visibility','visible');
    $('#checkout').css({'display':'block','position':'fixed','background-color': 'rgba(245, 137, 37, 0.95)','bottom':'0px'});
}

function hideCheckout() {
    $('#continueShopping').css('visibility','hidden');
    $('#checkout').css('display','none');
}
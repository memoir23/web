/**
 * Created by Dani on 2016.01.25..
 */
$(document).ready(function(){
    var oldFocus;
    var newFocus;
    $('.icon').click(function() {


       oldFocus = $(newFocus);
        newFocus = $(this).next();

        $(newFocus).css( "background-color", "#0cc" );
        $(newFocus).css( "color", "white" );
        $(newFocus).find(".price").fadeTo("slow",0);
        $(newFocus).find(".likes").fadeTo("slow",0);

        $(oldFocus).css("background-color", "#EEE");
        $(oldFocus).css("color", "black");
        $(oldFocus).find(".price").fadeTo("slow",1);
        $(oldFocus).find(".likes").fadeTo("slow",1);

    $('.bigPic').show();
        $('.bigPic').find('#price').text($(this).next().find(".price").text());
        $('.bigPic').find('#name').text($(this).next().find(".name").text());
    });



});
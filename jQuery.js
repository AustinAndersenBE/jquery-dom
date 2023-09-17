$(function () {
    console.log("Let's get ready to party with jQuery!");
  

    $('article').find('img').addClass('image-center');

    $('article p:last').remove();

    $('#title').css('font-size', Math.floor(Math.random() * 101));

    $('ol').append('<li>How are we doing on this wonderful day?</li>');

    $('aside').empty().append('<p>I apologize for the existence of the list');

    $("input[type='number']").on('input', function () {
        const red = $("input[type='number']").eq(0).val();
        const blue = $("input[type='number']").eq(1).val();
        const green = $("input[type='number']").eq(2).val();
        $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
      });

    $("img").on('click', function (e) {
    $(e.target).remove();
    });

});
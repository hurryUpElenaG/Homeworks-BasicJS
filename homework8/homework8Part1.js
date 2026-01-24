$(document).ready(function(){
    let input = $('.greeting-field');
    let button = $('.greeting-button');
    let h1 = $('#greeting-message');

    button.on('click', function(){
        let name = input.val();
        h1.text('Hello, ' + name + '!');
    })
});
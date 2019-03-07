// (function() {console.log('hello from my repo')})()
$(document).load(function() {
    $('.product > .image > div > a > img')
    .map(function(img) {
        $(img).css({'style': 'border: 1px solid black;'});
    })
});

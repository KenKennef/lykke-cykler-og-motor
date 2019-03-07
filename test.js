$(window).on('load', function() {
    $('.product > .image > .Photo3_Frontpage > a > img').map(function(img) {
        $(img).attr('style', 'border: 1px solid black !important');
    })
})

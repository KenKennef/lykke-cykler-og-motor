$(window).on('load', function() {
    $('.product > .image > .Photo3_Frontpage > a > img').map(function(i) {
        $(i).attr('foo', 'bar');
        const img = $(i);
        $(img).css({'border': '1px solid black;'});
    })
})

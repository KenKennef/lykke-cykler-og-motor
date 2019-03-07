$(window).on('load', function() {
    $('.product > .image > .Photo3_Frontpage > a > img, .product > .image > .Photo3_Frontpage > a > .Element_Overlay_DIV > .Element_Overlay_Frontpage_SavingsDIV > img').map(function(i, image) {
        console.log(image)
        $(image).css({'height': '187.5px', 'width': '250px', 'max-height': '187.5px', 'max-width': '250px'});
    })
})

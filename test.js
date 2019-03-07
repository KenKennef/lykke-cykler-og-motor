$(window).on('load', function() {
    $('.product > .image > .Photo3_Frontpage > a > img, .product > .image > .Photo3_Frontpage > a > .Element_Overlay_DIV > .Element_Overlay_Frontpage_SavingsDIV > img').map(function(i, image) {
        console.log(image)
        $(image).css({
            'height': '187.5px', 
            'width': '250px', 
            'min-height': '187.5px', 
            'min-width': '250px', 
            'max-height': '187.5px', 
            'max-width': '250px',
            // '-webkit-box-shadow': '5px 5px 10px -5px rgba(140,137,140,1)',
            // '-moz-box-shadow': '5px 5px 10px -5px rgba(140,137,140,1)',
            // 'box-shadow': '5px 5px 10px -5px rgba(140,137,140,1)'
        });
    })
})

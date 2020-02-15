$(function() {
    
    $('.rate-star').rateYo({
    rating: 5,
    starWidth: '12px',
    readOnly: true    
  });
    
    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });
    
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });
    
    $('.icon-list').on('click', function(){
        $('.product__item').addClass('list');
        $('.icon-list').addClass('active');
        $('.icon-table').removeClass('active');
    });
    $('.icon-table').on('click', function() {
        $('.product__item').removeClass('list');
        $('.icon-table').addClass('active');
        $('.icon-list').removeClass('active');
    });
    
    
    
    var mixer = mixitup('.products__inner-box');
    
});
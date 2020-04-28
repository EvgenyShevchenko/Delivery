$(function () {
    $('.js-button-cart').click(function () {
        $('.js-overlay-cart').fadeIn();
        $('.js-overlay-cart').addClass('disabled');

    });

    $('.js-close-cart,.modal-cart__button').click(function () {
        $('.js-overlay-cart').fadeOut();

    });

    // закрыть по клику вне окна
    $(document).mouseup(function (e) {
        var popup = $('.js-modal-cart');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.js-overlay-cart').fadeOut();

        }
    });
});
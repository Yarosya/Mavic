$(function () {

    $('.question__item-title').on('click', function(){
        $('.question__item').removeClass('question__item-active')
        $(this).parent().addClass('question__item-active')

    })

    $('#fullpage').fullpage({
		autoScrolling:true,
        scrollHorizontally: true,
        sectionSelector: '.page-section',
        scrollOverflow: true,
        anchors: ['top', 'products', 'benefits', 'specification', 'question', 'contacts' ],
	    menu: '#header__nav',
    });
    
    $('.menu__btn').on('click', function(){
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    })

    $('.menu__list-link').on('click', function(){
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    })
});
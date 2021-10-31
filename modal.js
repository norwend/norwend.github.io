var win_top = 0;
$(document).ready(function(){
    
    // открываем модальное окно при клике по контенту
    $('#list').click(function(){
        popup_open('#myPopup');
    })
    
    // открываем модальное окно сразу при загрузки страницы
// открываем модальное окно через 1,5сек после загрузки страницы
 setTimeout(function() {  
      popup_open('#myPopup');  
        }, 1500);
    
    // Добавляем обработчик закрытия модального окна
    $(document).on('click', '.popup .close, .overflow', function(){
        popup_close()
        return false;
    })
    
})
function popup_open(selector){
    if (selector.length){
        win_top = $(window).scrollTop();
        $('#list').css({
            'position'  : 'fixed',
            'left'      : '0',
            'right'     : '0',
            'top'       : '0',
            // Добавляем смещение, чтобы на фоне была именно та часть, что просмаривал пользователь
            'margin-top': '-'+win_top+'px' 
        })
        $('.overflow,'+selector).fadeIn();
    }
}
function popup_close(){
    $('.overflow, .popup').hide();
    $('#list').css({
        'position'  : 'static',
        'margin-top': '0px'
    })
    // Возвращаем скролл на место
    $(window).scrollTop(win_top);
}

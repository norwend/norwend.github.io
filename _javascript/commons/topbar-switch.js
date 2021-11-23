

$(window).scroll(function() {
var height = $(window).scrollTop();
 /*Если сделали скролл на 100px задаём новый класс для header*/
if(height > 50){
$('topbarWrapper').removeClass('topbar-down');
$('topbarWrapper').addClass('topbar-up');
} else{
/*Если меньше 100px удаляем класс для header*/
$('topbarWrapper').removeClass('topbar-up');
$('topbarWrapper').addClass('topbar-down');
}
});

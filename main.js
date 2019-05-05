$(document).ready(function(){

  	$('.app-card').bootstrapWizard({
        'tabClass': 'nav nav-pills', //Navigatie weergave class
        'nextSelector': '.btn-next', //Element class verder klikken

        onInit : function(tab, navigation, index){
            var $total = navigation.find('li').length;
            var $wizard = navigation.closest('.app-card');

            $first_li = navigation.find('li:first-child a').html();
            $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
            $('.app-card .app-navigation').append($moving_div);
       },

        onTabShow: function(tab, navigation, index) {
            var $wizard = navigation.closest('.app-card');
            refreshAnimation($wizard, index);
        }
  	});

});

function refreshAnimation($wizard, index){
    $total = $wizard.find('.nav li').length;
    $li_width = 100/$total; //100 = breedte van bolletjes container

    total_steps = 3; //Aantal stappen
    move_distance = 42; //Horizontale afstand per klik
    index_temp = index;
    vertical_level = 0;

    $wizard.find('.nav li').css('width',$li_width + '%');

    step_width = move_distance;
    move_distance = move_distance * index_temp;

    $wizard.find('.moving-tab').css('width', step_width);
    $('.moving-tab').css({
        'transform':'translate3d(' + move_distance + 'px, ' + vertical_level +  'px, 0)',
        'transition': 'all 0.5s cubic-bezier(.41,.94,.86,1)' // CSS Animatie

    });
}

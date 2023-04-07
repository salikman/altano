import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";
import * as swiper from "./modules/swiper.js";
import * as materialize from "./modules/materialize.js";
import * as main from "./modules/main.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();
swiper.swiper();
materialize.materialize();
main.main();

$('.minus, .plus').click(function (e) {
    e.preventDefault();    
    var $input = $(this).siblings('.count');
    var val = parseInt($input.val(), 10);
    $input.val(val + ($(this).hasClass('minus') ? -1 : 1));
});
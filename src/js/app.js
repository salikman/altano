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
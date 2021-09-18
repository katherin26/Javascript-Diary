'use strict';

/*NOTE: What gets logged when I try to log fetch?? */

console.log(fetch);

/*What happens when you console.log(fetch) really depends on you current enviroment. If you console.log it in a 
browser version that has a window.fetch method, you will log the fetch function. If you have an older browser, 
or are not in a browser enviroment, you will receive a Reference Error. */

(function () {
    "use strict";
    // $("ul li ul").css("display", "none");
    // or
    // cái hide của thư viện jquery viết sẵn
    $("ul li ul").hide();
    // Get the next ul
    $(".menulink").click(function () {
        const thisMenu = $(this).next("ul");
        // console.log(thisMenu.html());
        $("ul li ul").not(thisMenu).hide();
        thisMenu.toggle();
        // if(thisMenu)
    });
})();

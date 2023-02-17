(function () {
    "use strict";
    $("#tabs > ul > li > a").click(function () {
        $("#tabs > ul > li > a").css({
            background: "#a2a2a2",
            color: "#cecece",
        });
        // this ở đây chỉ đến 1 đối tượng duy nhất. Đối tượng ở đây là  #tabs > ul > li > a nhưng mà vì có 3 cái nên là nó sẽ focus vào cái được chọn
        $(this).css({ background: "#eaeaea", color: "#333" });
        const thisTab = $(this).attr("href");
        // alert(thisTab);
        $("#tabs > div:visible").fadeOut(200, function () {
            $(thisTab).fadeIn(200);
        });
    });
})();

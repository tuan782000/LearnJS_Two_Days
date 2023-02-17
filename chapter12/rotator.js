(function () {
    "use strict";

    let counter = 1;

    function counterRotator() {
        // do stuff...
        $(`#container p:nth-child(${counter})`).fadeIn(2000, function () {
            if ($(this).is("#container p:last-child")) {
                // Viết mã giả
                // wait seven seconds
                // fade the pragraph out
                // set the counter back to 1
                // run contentRotator again
                setTimeout(function () {
                    $(`#container p:nth-child(${counter})`).fadeOut(
                        2000,
                        function () {
                            counter = 1;
                            counterRotator();
                        }
                    );
                }, 7000);
            } else {
                // Viết mã giả
                // do some thing else
                // wait seven seconds
                // fade the pragraph out
                // set the counter back to 1
                // run contentRotator again
                setTimeout(function () {
                    $(`#container p:nth-child(${counter})`).fadeOut(
                        2000,
                        function () {
                            counter++;
                            counterRotator();
                        }
                    );
                }, 7000);
            }
        }); //end fadein callback function
    }

    counterRotator();
})();

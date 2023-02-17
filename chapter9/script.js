window.addEventListener(
    "load",
    (function () {
        // How many slide? Có bao nhiêu slide
        const slideCount = document.querySelectorAll(
            "#slider-wrapper ul li"
        ).length;
        // alert(slideCount);
        // How slide is each silde? Làm cách nào mà slide có thể trượt || offsetWidth: chiều rộng bù đắp
        const slideWidth =
            document.querySelector("#slider-wrapper").offsetWidth;
        // Total with of slider: Tổng cộng các slide
        const totalWidth = slideCount * slideWidth + "px";
        // Slider DOM element: các thẻ slider DOM l
        const slider = document.querySelector("#slider-wrapper ul");
        // Next button
        const next = document.getElementById("next");
        // Previous button
        const previous = document.getElementById("prev");

        // Upper left corner of slider: Góc trên bên trái của thanh trượt
        let leftPosition = 0;
        // to keep track of each slide: để theo dõi từng slide
        let counter = 0;
        // Sets the width of the slider (Which is also in the CSS): Đặt chiều rộng của thanh trượt (Cái này cũng có trong CSS)
        slider.style.width = totalWidth;

        next.addEventListener("click", function (e) {
            e.preventDefault();
            counter++;
            if (counter == slideCount) {
                // set the count to 0
                counter = 0;
            }
            leftPosition = `-${counter * slideWidth}px`;
            slider.style.left = leftPosition;
        });

        previous.addEventListener("click", function (e) {
            e.preventDefault();
            counter--;
            if (counter < 0) {
                // set the count to slideCount - 1 (nguyên mãng chứa ảnh - đi 1)
                counter = slideCount - 1;
            }
            leftPosition = `-${counter * slideWidth}px`;
            slider.style.left = leftPosition;
        });
    })()
);

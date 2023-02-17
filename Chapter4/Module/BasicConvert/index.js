(function () {
    document.getElementById("convert").addEventListener("submit", function (e) {
        e.preventDefault();
        const distance = parseFloat(document.getElementById("distance").value);

        // distance = parseFloat(distance)
        // -parseFloat: Hàm này có tác dụng chuyển đổi chuỗi về dạng số thực || đưa số thì làm gọn || đưa chữa thì NaN
        // Viết gọn lại thì sẽ dùng thẳng lên chỗ khai báo biến distance
        //
        const answer = document.getElementById("answer");

        if (distance) {
            // alert(distance);
            // convert and around the distance
            // put the answar in the bottom div using innerHTML
            const conversion = (distance * 1.609344).toFixed(3);
            answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers </h2>`;
        } else {
            // put an error message in the bottom div
            answer.innerHTML = `<h2>Please provide a number</h2>`;
        }
    });
})();

(function () {
    let convertType = "miles";
    const heading = document.querySelector("h1");
    const intro = document.querySelector("p");
    const answerDiv = document.getElementById("answer");
    const form = document.getElementById("convert");

    document.addEventListener("keydown", function (e) {
        let key = e.code;
        // alert(key)
        if (key === "KeyK") {
            convertType = `kilometers`;
            heading.innerHTML = `Kilometers to Miles Converter`;
            intro.innerHTML = `Type in a number of kilometers and click the button to convert the distance to miles.`;
        } else if (key === "KeyM") {
            convertType = `miles`;
            heading.innerHTML = `Miles to Kilometers Converter`;
            intro.innerHTML = `Type in a number of miles and click the button to convert the distance to kilometers.`;
        }
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const distance = parseFloat(document.getElementById("distance").value);
        if (distance) {
            // convert Miles to Kilometers 1.609344
            // convert Kilometers to Miles 0.621371192
            if (convertType == "miles") {
                const converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `${distance} miles convert to ${converted} kilometers`;
            } else {
                const converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `${distance} kilometers convert to ${converted} miles`;
            }
        } else {
            answer.innerHTML = "<h2>Please provide a number!</h2>";
        }
    });
})();

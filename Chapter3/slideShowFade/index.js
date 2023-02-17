(function () {
    let currentImage = 0;
    const myPhotos = [
        "https://images.unsplash.com/photo-1676379885127-9689d630355b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1676321672639-93483536d1ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1676389944611-3519bf5b91fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1676339618078-fad89f387582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1676321626679-2513969695d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    ];

    const container = document.getElementById("content");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("previous");

    nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        // logic tăng currentImage
        currentImage++;
        if (currentImage > myPhotos.length - 1) {
            currentImage = 0;
        }
        // // Lấy ảnh
        // var newSilde = document.createElement("img");
        // newSilde.src = `${myPhotos[currentImage]}`;
        // newSilde.className = "fadeinimg";
        // container.appendChild(newSilde);
        // // xóa ảnh bớt đi không để trùng lập || Remove extra children
        // if (container.children.length > 2) {
        //     container.removeChild(container.children[0]);
        // }
        swapImg();
    });
    prevBtn.addEventListener("click", function (e) {
        e.preventDefault();
        // logic tăng currentImage
        currentImage--;
        if (currentImage < 0) {
            currentImage = myPhotos.length - 1;
        }
        // // Lấy ảnh
        // var newSilde = document.createElement("img");
        // newSilde.src = `${myPhotos[currentImage]}`;
        // newSilde.className = "fadeinimg";
        // container.appendChild(newSilde);
        // // xóa ảnh bớt đi không để trùng lập || Remove extra children
        // if (container.children.length > 2) {
        //     container.removeChild(container.children[0]);
        // }
        swapImg();
    });

    // tối ưu code bằng cách tách cái lấy ảnh ra thành 1 function
    function swapImg() {
        // Lấy ảnh
        const newSilde = document.createElement("img");
        newSilde.src = `${myPhotos[currentImage]}`;
        newSilde.className = "fadeinimg";
        container.appendChild(newSilde);
        // xóa ảnh bớt đi không để trùng lập || Remove extra children
        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    }
})();

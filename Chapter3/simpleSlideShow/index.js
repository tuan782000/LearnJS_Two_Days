// var myImages = [
//     "https://images.unsplash.com/photo-1676379885127-9689d630355b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//     "https://images.unsplash.com/photo-1676321672639-93483536d1ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//     "https://images.unsplash.com/photo-1676389944611-3519bf5b91fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//     "https://images.unsplash.com/photo-1676339618078-fad89f387582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//     "https://images.unsplash.com/photo-1676321626679-2513969695d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
// ];

// console.log(myImages.length)
// // độ dài của mãng là 5
// // số phần tử có trong mãng là 4

// var currentImage = 0;

// document.getElementById("next").onclick = nextPhoto;
// document.getElementById("previous").onclick = previousPhoto;

// function nextPhoto() {
//     currentImage++;
//     // viết dài ra currentImage = currentImage + 1;
//     // câu lệnh 4 > 4 sai vẫn chưa thỏa điều kiện vì mất đi ảnh cuối, chính vì vậy myImages.length phải tự - 1 để khi currentImage = 4 thì myImages.length là 5 - 1 = 4 để không thỏa điều kiện và lấy ra được cái cuối
//     if (currentImage > myImages.length - 1) {
//         currentImage = 0;
//     }
//     document.getElementById("myImage").src = myImages[currentImage];
// }
// function previousPhoto() {
//     currentImage--;
//     // viết dài ra currentImage = currentImage - 1;
//     if(currentImage < 0) {
//         currentImage = myImages.length - 1
//     }
//     document.getElementById("myImage").src = myImages[currentImage];
// }

// clean code

(function () {
    const myImages = [
        "https://images.unsplash.com/photo-1676379885127-9689d630355b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1676321672639-93483536d1ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1676389944611-3519bf5b91fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1676339618078-fad89f387582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1676321626679-2513969695d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    ];
    let currentImage = 0;

    document.getElementById("next").onclick = nextPhoto;
    document.getElementById("previous").onclick = previousPhoto;

    function nextPhoto() {
        currentImage++;
        if (currentImage > myImages.length - 1) {
            currentImage = 0;
        }
        document.getElementById("myImage").src = myImages[currentImage];
    }
    function previousPhoto() {
        currentImage--;
        if (currentImage < 0) {
            currentImage = myImages.length - 1;
        }
        document.getElementById("myImage").src = myImages[currentImage];
    }
})();

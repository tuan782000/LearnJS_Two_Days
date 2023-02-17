var aVariable = "this is global";

function testScope() {
    var aVariable = "this is global";
    console.log(aVariable);
}

testScope();
console.log(aVariable)



// Name Spacing and closures
// khỏi cần tên (ghi function vào): này là tự gọi functon thực hiện
((function () {
    var myPs = document.querySelectorAll("p");

    for (i = 0; i < myPs.length; i++) {
        myPs[i].style.color = "red";
    }

    // console.log(myPs)
    // đặt trong này chạy được
})());

// Nếu mà myPs đặt ngoài này sẽ vi phạm scope ko chạy được


// const and let

// let
// Này là bắt sự kiện gõ phím

// document.addEventListener('keydown', function(){
//     alert("A key was pressed")
// })

// cao cấp hơn là nắt sự kiện gõ phím, in ra được là người dùng đang nhập chữ cái gì và hiển thị số thông (e) tham số truyền vào
// Bảng mã ký tự ASCII code 

// Hiển thị số của ký tự với đó với which

// document.addEventListener('keydown', function(e){
//     alert(`the ${e.which} key was pressed`)
// })

// Để hiên thị chữ cái đã gõ thì dùng với key
document.addEventListener('keydown', function(e){
    alert(`the ${e.key} key was pressed`)
})


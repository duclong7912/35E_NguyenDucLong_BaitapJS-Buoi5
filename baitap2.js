                // Tính tiền điện

/**
 * - Đầu vào:
 * 
 * đặt biến lấy thông tin user
 * 
 * - Xử lý:
 * 
 * Công thức:
 * 50kw đầu: soKW * 500
 * 50kw kế tiếp: số tiền 50kw đầu + (soKW - 50) * 650
 * 100kw kế tiếp: số tiền 50kw đầu + số tiền 50kw kế tiếp + (soKW - 100) * 850
 * 150kw kế tiếp: số tiền 50kw đầu + số tiền 50kw kế tiếp + số tiền 100kw kế tiếp + (soKW - 200) * 1100
 * số kw còn lại: số tiền 50kw đầu + số tiền 50kw kế tiếp + số tiền 100kw kế tiếp + số tiền 150kw kế tiếp + (soKW - 350) * 1300
 * 
 * đặt biến để hiển thị kết quả
 * var tienDien = "";
 * 
 * - Đầu ra:
 * 
 * tienDien = ?
 */

function xetTien(a) {
    tongTienDien = 0;

    if(a > 0 && a <= 50) {
        tongTienDien = a * 500;
    } else if(a > 50 && a <= 100) {
        tongTienDien = 50 * 500 + (a - 50) * 650;
    } else if (a > 100 && a <= 200) {
        tongTienDien = 50 * 500 + (100 - 50) * 650 + (a - 100) * 850;
    } else if (a > 200 && a <= 350) {
        tongTienDien = 50 * 500 + (100 - 50) * 650 + (200 - 100) * 850 + (a - 200) * 1100;
    } else if (a == 0) {
        alert("Vui lòng nhập số KW hợp lệ !")
        tongTienDien = '';
    } else {
        tongTienDien = 50 * 500 + (100 - 50) * 650 + (200 - 100) * 850 + (350 - 200) * 1100 + (a - 350) * 1300;
    }

    return tongTienDien;
    
}

function tinhTienDien() {

    // Đầu vào:

    var ten = document.getElementById("ten").value;
    var soKW = document.getElementById("soKW").value * 1;

    // Xử lý:

    var tongTienDien = xetTien(soKW);
    var currentFormat = new Intl.NumberFormat("VN-vn");
    var tienDien = "Tên: " + ten + " - Tổng tiền điện: " + currentFormat.format(tongTienDien) + 'đ';

    // Đầu ra:

    document.getElementById("showTienDien").innerHTML = tienDien;
}
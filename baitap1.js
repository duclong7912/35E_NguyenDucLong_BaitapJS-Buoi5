                // Quản lý tuyển sinh

/**
 * - Đầu vào
 * 
 * đặt biến lấy thông tin user
 * 
 * - Xử lý:
 * 
 * xét từng điều kiện khu vực và đối tượng của thí sinh
 * cộng tất cả điểm của thí sinh tùy theo khu vực và đối tượng
 * 
 * ketQua = diem1 + diem2 + diem3 + khu vực và đối tượng
 * 
 * xét kết quả nếu:
 * kết quả lớn hơn điểm chuẩn -> đậu
 * kết quả nhỏ hơn điểm chuẩn -> rớt
 * nếu 1 trong 3 điểm có điểm bằng 0 -> rớt thằng
 * 
 * đặt biến để hiển thị kết quả
 * var result = ''
 * 
 * - Đầu ra
 * 
 * result = ? 
 * 
 */


function xetDiem(a,b,c,d,e) {
    var ketQua = 0;

    if (a === 'khuVuc' && b ==='doiTuong') {
        ketQua = c + d + e;
    } else if  (a === 'a' && b ==='1') {
        ketQua = c + d + e + 4.5;
    } else if  (a === 'a' && b ==='2') {
        ketQua = c + d + e + 3.5;
    } else if  (a === 'a' && b ==='3') {
        ketQua = c + d + e + 3;    
    } else if  (a === 'b' && b ==='1') {
        ketQua = c + d + e + 3.5;    
    } else if  (a === 'b' && b ==='2') {
        ketQua = c + d + e + 2.5;    
    } else if  (a === 'b' && b ==='3') {
        ketQua = c + d + e + 2;    
    } else if  (a === 'c' && b ==='1') {
        ketQua = c + d + e + 3;    
    } else if  (a === 'c' && b ==='2') {
        ketQua = c + d + e + 2;    
    } else if  (a === 'c' && b ==='3') {
        ketQua = c + d + e + 1.5;    
    }

    return ketQua;
}


function tuyenSinh() {

    // Đầu vào:

    var diemChuan = document.getElementById("diemChuan").value * 1;
    var chonKhuVuc = document.getElementById("chonKhuVuc").value;
    var chonDoiTuong = document.getElementById("chonDoiTuong").value;
    var diem1 = document.getElementById("diem1").value * 1;
    var diem2 = document.getElementById("diem2").value * 1;
    var diem3 = document.getElementById("diem3").value * 1;

    // Xử lý:

    var ketQua = xetDiem(chonKhuVuc,chonDoiTuong,diem1,diem2,diem3);
    var result = '';
     if (ketQua >= diemChuan) {
        result = 'Tổng điểm: ' + ketQua + " - Chúc mừng bạn đã Đậu";
    } else if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
        result = "Bạn đã tạch do có điểm nhỏ hơn hoặc bằng 0";
    } else {
        result = 'Tổng điểm: ' + ketQua + " - Bạn đã tạch";
    }

    // Đầu ra:

    document.getElementById("showKetQua").innerHTML = result;

}
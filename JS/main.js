/**
 * BÀI TẬP 1:
 * Khối 1: 
 * Nhập số thứ 1
 * Nhập số thứ 2
 * Nhập số thứ 3
 
 * Khối 2:
 * Khai báo biến cho số thứ 1
 * Khai báo biến cho số thứ 2
 * Khai báo biến cho số thứ 3
 * Trường hợp 1:
 * Giả sử số thứ 1 lớn nhất (số thứ 1 >= số thứ 2 và số thứ 1 >= số thứ 3)
 * -> so sánh số thứ 2 và 3
 * -> nếu số thứ 2 >= số thứ 3
 * => dãy số là: số thứ 3, số thứ 2, số thứ 1 
 * -> nếu số thứ 2 < số thứ 3
 * => dãy số sẽ là: số thứ 2, số thứ 3, số thứ 1.

 * Trường hợp 2: tương tự trường hợp 1 nhưng giả định số lớn nhất là số thứ 2, và tiếp tục so sánh số thứ 1 và 3.

 * Trường hợp 3: tương tự trường hợp 1 nhưng giả định số lớn nhất là số thứ 3, và tiếp tục so sánh số thứ 1 và 2.

 * Khối 3:
 * Kết quả dãy số theo thứ tự tăng dần
 */

var sapXep = document.getElementById("sapXep");

sapXep.addEventListener("click", function () {
    var num1 = parseFloat(document.getElementById("inputNum1").value);
    var num2 = parseFloat(document.getElementById("inputNum2").value);
    var num3 = parseFloat(document.getElementById("inputNum3").value);
    var thongBaoKQ = document.getElementById("thongBaoKQ");

    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3) {
            thongBaoKQ.innerHTML = "Thứ tự tăng dần dãy số là: " + num3 + ", " + num2 + ", " + num1;
        } else { thongBaoKQ.innerHTML = "Thứ tự tăng dần dãy số là: " + num2 + ", " + num3 + ", " + num1; }
    }
    else if (num2 >= num1 && num2 >= num3) {
        if (num1 >= num3) {
            thongBaoKQ.innerHTML = "Thứ tự tăng dần dãy số là: " + num3 + ", " + num1 + ", " + num2;
        } else { thongBaoKQ.innerHTML = "Thứ tự tăng dần dãy số là: " + num1 + ", " + num3 + ", " + num2; }
    }
    else {
        if (num1 >= num2) {
            thongBaoKQ.innerHTML = "Thứ tự tăng dần dãy số là: " + num2 + ", " + num1 + ", " + num3;
        }
        else { thongBaoKQ.innerHTML = "Thứ tự tăng dần dãy số là: " + num1 + ", " + num2 + ", " + num3; }
    }
})

/**BÀI TẬP 2
 *Khối 1:
Trường để người dùng lựa chọn Bố/ Mẹ/ Anh Trai/ Em gái

 *Khối 2:
 Khai báo biến Bố
 Khai báo biến Mẹ
 Khai báo biến anh Trai
 Khai báo biến Em gái

 Nếu người dùng chọn giá trị Bố => xuất hiện câu chào "Xin chào Bố"
 Nếu người dùng chọn giá trị Mẹ => xuất hiện câu chào "Xin chào Mẹ"
 Nếu người dùng chọn giá trị Anh trai => xuất hiện câu chào "Xin chào Anh trai"
 Nếu người dùng chọn giá trị Em gái => xuất hiện câu chào "Xin chào Em gái"

 *Khối 3:
 Xuất kết quả hiển thị "Xin chào Bố/Mẹ/Anh trai/Em gái" theo từng trường hợp mà người dùng lựa chọn.
 */

var chonUser = document.getElementById("chonUser");

chonUser.addEventListener("click", function () {
    var user = document.getElementById("user").value;
    var thongBaoLoiChao = document.getElementById("thongBaoLoiChao");

    switch (user) {
        case "dad":
            thongBaoLoiChao.innerHTML = "Xin chào Bố";
            break;
        case "mom":
            thongBaoLoiChao.innerHTML = "Xin chào Mẹ";
            break;
        case "brother":
            thongBaoLoiChao.innerHTML = "Xin chào Anh trai";
            break;
        case "sister":
            thongBaoLoiChao.innerHTML = "Xin chào Em gái";
            break;
        default:
            thongBaoLoiChao.innerHTML = "Xin chọn người sử dụng máy";
    }
});

/**BÀI TẬP 3
 * Khối 1
 * Nhập số 3 số nguyên
 * 
 * Khối 2:
 * Khai báo biến cho các số thứ 1, 2 và 3.
 * Khai báo biến số lượng số chẵn và lẻ
 * 
 * Nếu số chia phần dư cho 2 bằng 1 => số lẻ
 * Nếu số chia phần dư cho 2 bằng 0 => số chẵn
 * 
 * Khối 3:
 * Xuất kết quả thống kê có bao nhiêu số lẻ và bao nhiêu số chẵn
 */

var ketLuan = document.getElementById("ketLuan");

ketLuan.addEventListener("click", function(){
    var soThu1 = document.getElementById("soThu1").value;
    var soThu2 = document.getElementById("soThu2").value;
    var soThu3 = document.getElementById("soThu3").value;
    var tbKetLuan = document.getElementById("tbKetLuan");

    var slSoLe = 0;
    
    slSoLe = parseInt(soThu1%2) + parseInt(soThu2%2) + parseInt(soThu3%2);

    var slSoChan = 3 - slSoLe;

    tbKetLuan.innerHTML = "Số lượng số lẻ là: " + slSoLe + "<br>Số lượng số chẵn là: " + slSoChan;
});

/**BÀI TẬP 4 
 * 
 * Khối 1:
 * Nhập vào giá trị của 3 cạnh.
 * 
 * Khối 2:
 * Khai báo biến cho 3 cạnh của tam giác (a,b,c)
 * So sánh chiều dài của các cạnh tam giác để xác định loại tam giác
 * 
 * - (a=b và a!=c) hoặc (b=c và b!=a) hoặc (a=c và a!=b) => tam giác cân
 * - a=b=c => tam giác đều 
 * - a^2 = b^2 + c^2 hoặc b^2 = a^2 + c^2 hoặc c^2 = a^2 + b^2 => tam giác vuông
 * - không phải các trường hợp trên => tam giác thường
 * 
 * Khối 3:
 * Kết luận loại tam giác
*/

var xacDinh = document.getElementById("xacDinh");

xacDinh.addEventListener("click", function(){
    var a = document.getElementById("canhThu1").value;
    var b = document.getElementById("canhThu2").value;
    var c = document.getElementById("canhThu3").value;
    var ketLuanTG = document.getElementById("ketLuanTG");

    if ((a==b && a!=c) || (b==c && b!=a) || (a==c && a!=b)){
        ketLuanTG.innerHTML = "Đây là tam giác cân";
    }else if (a==b && a==c){
        ketLuanTG.innerHTML = "Đây là tam giác đều";
    }else if ((a*a == b*b + c*c)||(b*b == a*a + c*c)||(a*a + b*b == c*c)){
        ketLuanTG.innerHTML = "Đây là tam giác vuông";
    }else {
        ketLuanTG.innerHTML = "Đây là tam giác thường";
    }
});
function tuoidatdk() {
    let tuoi = +document.getElementById("tuoi").value
    if (tuoi >= 16 ) {
        document.getElementById("result").innerHTML = "Đạt điều kiện học lớp 10";
    } else {
        document.getElementById("result").innerHTML = "Không đạt điều kiện học lớp 10";
    }
}
function kalimat_vo() {
    var vo = document.getElementById("kalimat1");
    var ganti_vo = vo.replace(/a|i|u|e|o/gi,"i");
    document.getElementById("kalimat2").innerHTML = ganti_vo;
    document.getElementById("tes").innerHTML = vo;
}
function proses(){
    var vo = document.getElementById("kalimat1").value;
    var ganti = vo.replace("u","oe").replace("c","tj").replace("y","j");
    document.getElementById("kalimat2").innerHTML = ganti;
}
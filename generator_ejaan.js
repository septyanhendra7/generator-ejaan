function kalimat_vo() {
    var vo = document.getElementById("kalimat1").value;
    //var ganti_vo = vo.replace(/a|i|u|e|o/gi,'i');
    var ganti_vo = /(u).*(y)/;

    var a_vo = ganti_vo.exec(vo);

    document.getElementById("vo").innerHTML = a_vo[0];
    document.getElementById("vo").innerHTML = a_vo[1];

    vo = vo.replace(a_vo[0],'oe');
    vo = vo.replace(a_vo[1],'j');
    document.getElementById("kalimat2").innerHTML = vo;
    document.getElementById("tes").innerHTML = a_vo;
}


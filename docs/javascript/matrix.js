function mudafoto(foto) {
    document.getElementById("icone").src = foto;
}

function calc_total() {
    var qtd = parseInt(document.getElementById("cqtd").value);
    var tot = qtd * 1500;
    document.getElementById("ctot").value = tot;
}
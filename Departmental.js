function place(){
    var x;
    x = document.getElementById('select').value;
    document.getElementById('_prc').value = x;
    document.getElementById('_qty').value = "";
    document.getElementById('_amt').value = "";
}

function quantity(){
    var y, z, x;
    x = document.getElementById('_prc').value;
    y = document.getElementById('_qty').value;
    z = x * y;
    document.getElementById('_amt').value = z;
}

function addto(){
    var table = document.getElementById("_table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var e = document.getElementById("select");
    cell1.innerHTML = document.getElementById('select').options[e.selectedIndex].text;
    cell2.innerHTML = document.getElementById('select').options[e.selectedIndex].value;
    cell3.innerHTML = document.getElementById('_qty').value;
    cell4.innerHTML = document.getElementById('_amt').value;

    var a, b, c, d, e, f, g, h, i, j, k, l;
    a = document.getElementById('_amt').value;
    b = document.getElementById('_sub').value;
    c = +a + +b;
    document.getElementById('_sub').value = c;
    
    // discount
    d = c * 5;
    e = d / 100;
    document.getElementById('_dis').value = e;

    // tax
    f = c * 16.5;
    g = f / 100;
    document.getElementById('_tax').value = g;

    h = c - e;
    i = +h + +g;
    document.getElementById('_total').value = Math.round(i);

    j = document.getElementById('_total-items').value;
    k = +j + +1;
    document.getElementById('_total-items').value = k;

}
function addRow(){

let table = document.getElementById("invoiceTable");

let row = table.insertRow();

row.innerHTML = `
<td><input type="text"></td>
<td><input type="number" class="price"></td>
<td><input type="number" class="qty"></td>
<td class="total">0</td>
<td><button onclick="deleteRow(this)">Delete</button></td>
`;

}

function deleteRow(button){

let row = button.parentNode.parentNode;
row.remove();

}

function calculate(){

let prices = document.getElementsByClassName("price");
let qty = document.getElementsByClassName("qty");
let totals = document.getElementsByClassName("total");

let grandTotal = 0;

for(let i=0;i<prices.length;i++){

let p = prices[i].value;
let q = qty[i].value;

let total = p*q;

totals[i].innerText = total;

grandTotal += total;

}

document.getElementById("grandTotal").innerText = grandTotal;

}

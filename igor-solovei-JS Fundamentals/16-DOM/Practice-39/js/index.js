let matrix = document.getElementById("matrix");
let tr = document.createElement("tr");
let td = document.createElement("td");

function creatMatrix(number) {
   for (let i = 0; i < number; i++) {
      let tr = document.createElement("tr");

      for (let j = 0; j < number; j++) {
         let td = document.createElement("td");
         td.innerHTML = i + 1 + j;
         tr.appendChild(td);
      }

      matrix.appendChild(tr);
   }
}

function select_cells(color) {

   let table = document.getElementById("matrix");
   for (let i = 0; i < table.rows.length; i++) {
      let rows = table.rows[i];
      let cells = (table.rows.length - 1) - i;
      rows.cells[cells].style.backgroundColor = color;
   }

}

creatMatrix(5);
select_cells("#0000ff");



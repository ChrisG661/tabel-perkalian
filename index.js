var table = document.getElementById("tabelPerkalian");

function tabelPerkalian(table, sizeCol, sizeRow) {
    sizeRow = !sizeRow ? 10 : sizeRow
    sizeCol = !sizeCol ? 10 : sizeCol

    if (sizeCol < 1 || sizeRow < 1) return;

    let tableHead = table.querySelector("thead tr")
    let tableBody = table.getElementsByTagName("tbody")[0]
    tableHead.innerHTML = ""
    tableBody.innerHTML = ""
    tableHead.innerHTML += `<th scope='col'>&times;</th>`

    for (var col = 1; col <= sizeCol; col++) {
        // append header
        tableHead.innerHTML += `<th class="py-2" scope='col'>${col}</th>`
    }

    for (var row = 1; row <= sizeRow; row++) {
        // append side header
        let tr = document.createElement("tr");
        tr.className = "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        tr.innerHTML += `<th class="px-2 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" cscope='row'>${row}</th>`
        for (var col = 1; col <= sizeCol; col++) {
            // append row
            tr.innerHTML += `<td data-col=${col} data-row=${row} class="py-2 px-3 hover:bg-gray-50">${col * row}</td>`;
        }
        tableBody.appendChild(tr);
    }
}

function update(e) {
    sizeCol = parseInt(sizeInput[0].value)
    sizeRow = parseInt(sizeInput[1].value)
    tabelPerkalian(table, sizeCol, sizeRow)
    console.log(e, sizeCol, sizeRow)
}

var sizeInput = document.querySelectorAll(".ukuran input")

tabelPerkalian(table)

table.addEventListener('mousemove', e => {
    let onCell = document.elementFromPoint(e.clientX, e.clientY)
    if (onCell.tagName != "TD") return;
    document.getElementById("centerText").textContent = `${onCell.dataset.col} \u00d7 ${onCell.dataset.row} = ${onCell.textContent}`
}, { passive: true })

document.querySelectorAll(".ukuran input").forEach((e) => {
    e.oninput = update;
});


const sampleTable = document.getElementById("sampleTable")
const insertion = document.getElementById("insertion")

function insert_Row() {
    //Write your code here
    const row = sampleTable.insertRow(0);

	const cell1 = row.insertCell(0);
	const cell2 = row.insertCell(1);

	cell1.textContent = "New Cell1";
	cell2.textContent = "New Cell2";
}
insertion.addEventListener("click", insert_Row)

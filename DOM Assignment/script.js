document.getElementById('addBtn').addEventListener('click', addStudent);

function addStudent() {
    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;
    const studentClass = document.getElementById('class').value;
    const rollNo = document.getElementById('rollNo').value;

    if(studentName && studentId && studentClass && rollNo) {
        const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        newRow.insertCell(0).innerText = studentName;
        newRow.insertCell(1).innerText = studentId;
        newRow.insertCell(2).innerText = studentClass;
        newRow.insertCell(3).innerText = rollNo;

        const actionsCell = newRow.insertCell(4);
        const resetButton = document.createElement('button');
        resetButton.innerText = 'Reset';
        resetButton.className = 'reset-btn';
        resetButton.addEventListener('click', function() {
            newRow.cells[0].innerText = '';
            newRow.cells[1].innerText = '';
            newRow.cells[2].innerText = '';
            newRow.cells[3].innerText = '';
        });

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', function() {
            table.deleteRow(newRow.rowIndex - 1);
        });

        actionsCell.appendChild(resetButton);
        actionsCell.appendChild(deleteButton);

        // Clear the form inputs
        document.getElementById('studentForm').reset();
    } else {
        alert('Please fill all fields.');
    }
}

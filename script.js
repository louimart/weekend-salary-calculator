console.log('weekend salary calculator');

totalMonthly = 0;

function submitEmployee(eventObj) {
    eventObj.preventDefault();
    console.log(eventObj);
    
    // const firstNameInput = getByTestId(constainer, 'firstNameInput')
    // const lastNameInput = getByTestId(container, 'lastNameInput')
    // const idInput = getByTestId(container, 'idInput')
    // const titleInput = getByTestId(container, 'titleInput')
    // const annualSalaryInput = getByTestId(container, 'annualSalaryInput')
    
    console.log(firstNameInput.value);
    console.log(lastNameInput.value);
    console.log(idInput.value);
    console.log(titleInput.value);
    console.log(annualSalaryInput.value);

    const employee = document.querySelector('#employeeList');
    console.log(employee);
    employee.innerHTML += `
    <tr class="employee">
        <td>${firstNameInput.value}</td>
        <td>${lastNameInput.value}</td>
        <td>${idInput.value}</td>
        <td>${titleInput.value}</td>
        <td>${annualSalaryInput.value}</td>
    </tr>
    `;
    console.log(employee);

    totalMonthly = (totalMonthly + Number(annualSalaryInput.value / 12));
    console.log(totalMonthly);
    const totalSalary = document.querySelector('.totalMonthly');
    if(totalSalary >= 20000){
        totalSalary.innerHTML = `<p class="over-budget">Total Monthly: $${totalMonthly.toFixed(2)}</p>`  
    }
    totalSalary.innerHTML = `<p class="totalMonthly">Total Monthly: $${totalMonthly.toFixed(2)}</p>`  
}
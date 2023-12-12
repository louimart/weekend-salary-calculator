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
        <td><button onclick="removeEmployee(event)">Delete</button></td>
    </tr>
    `;
    console.log(employee);

    // calculating Total Monthly cost
    totalMonthly = (totalMonthly + Number(annualSalaryInput.value / 12));
    console.log(totalMonthly);

    // calculating total over budget amount for reference
    totalOverBudget = totalMonthly - 20000;
    console.log(totalOverBudget);

    // using if-else statement to display total 
    const totalMonthlyDisplay = document.querySelector('.totalMonthly');
    if(totalMonthly >= 20000){
        console.log('larger than 20,000')
        totalMonthlyDisplay.innerHTML = `<p class="over-budget">Total Monthly: $${totalMonthly.toFixed(2)} (!!! $${totalOverBudget.toFixed(2)} over budget !!!)</p>`;
    } else {
        console.log('lower than 20,000')
        totalMonthlyDisplay.innerHTML = `<p class="totalMonthly">Total Monthly: $${totalMonthly.toFixed(2)}</p>`;
    }
    console.log(totalMonthlyDisplay);

    clearForm();
}

function removeEmployee(event) {
    employeeElement = event.target.parentElement.parentElement;
    console.log(employeeElement);
    employeeElement.remove();
}

function clearForm() {
    firstNameInput.value = ''
    lastNameInput.value = ''
    idInput.value = ''
    titleInput.value = ''
    annualSalaryInput.value = ''
}
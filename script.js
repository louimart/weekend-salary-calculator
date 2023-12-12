console.log('weekend salary calculator');

totalMonthly = 0;

function submitEmployee(eventObj) {
    // Prevent form clearing on submit
    eventObj.preventDefault();
    // for viewing results of submitted event
    console.log(eventObj);
    
    console.log(firstNameInput.value);
    console.log(lastNameInput.value);
    console.log(idInput.value);
    console.log(titleInput.value);
    console.log(annualSalaryInput.value);

    // adds input information to the Employees table
    const employee = document.querySelector('#employeeList');
    employee.innerHTML += `
    <tr class="employee">
        <td>${firstNameInput.value}</td>
        <td>${lastNameInput.value}</td>
        <td>${idInput.value}</td>
        <td>${titleInput.value}</td>
        <td class="salary">${annualSalaryInput.value}</td>
        <td><button onclick="removeEmployee(event)">Delete</button></td>
    </tr>
    `;
    console.log(employee);

    // calculating Total Monthly cost
    totalMonthly = (totalMonthly + Number(annualSalaryInput.value / 12));
    console.log(`total monthly cost = $${totalMonthly}`);

    // calculating total over budget amount for reference
    // totalOverBudget = totalMonthly - 20000;
    // console.log(`total over budget = $${totalOverBudget}`);

    // using if-else statement to display total monthly cost and assigning class to footer
    let totalMonthlyDisplay = document.querySelector('.totalMonthly');
    totalMonthlyDisplay.innerHTML = `<footer class="totalMonthly"><p>Total Monthly: $${totalMonthly.toFixed(2)}</p></footer>`;

    if(totalMonthly >= 20000){
        console.log('larger than 20,000');
        // using classList to replace totalMonthly class with over-budget class
        totalMonthlyDisplay = totalMonthlyDisplay.classList.replace('totalMonthly', 'over-budget',);
    }
    console.log(totalMonthlyDisplay);

    clearForm();
}

// delete button function to remove employee row from table.
function removeEmployee(event) {
    employeeElement = event.target.parentElement.parentElement;
    console.log(employeeElement);
    console.log(employeeElement.querySelector('.salary').innerText);
    employeeElement.remove();
}

// clear forms on submission
function clearForm() {
    firstNameInput.value = ''
    lastNameInput.value = ''
    idInput.value = ''
    titleInput.value = ''
    annualSalaryInput.value = ''
}
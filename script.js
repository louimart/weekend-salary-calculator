console.log('weekend salary calculator');

totalMonthly = 0;

function submitEmployee(eventObj) {
    //  Prevent form clearing on submit
    eventObj.preventDefault();
    console.log(eventObj);
    
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
        <td class="salary">${annualSalaryInput.value}</td>
        <td><button onclick="removeEmployee(event)">Delete</button></td>
    </tr>
    `;
    console.log(employee);

    // calculating Total Monthly cost
    totalMonthly = (totalMonthly + Number(annualSalaryInput.value / 12));
    console.log(`total monthly cost = $${totalMonthly}`);

    // calculating total over budget amount for reference
    totalOverBudget = totalMonthly - 20000;
    console.log(`total over budget = $${totalOverBudget}`);

    // using if-else statement to display total monthly cost and assigning class to footer
    const totalMonthlyDisplay = document.querySelector('.totalMonthly');
    if(totalMonthly >= 20000){
        console.log('larger than 20,000')
        totalMonthlyDisplay.innerHTML = `<footer class="over-budget"><p>Total Monthly: $${totalMonthly.toFixed(2)} (!!! $${totalOverBudget.toFixed(2)} over budget !!!)</p></footer>`;
    } else {
        console.log('lower than 20,000')
        totalMonthlyDisplay.innerHTML = `<footer class="totalMonthly"><p>Total Monthly: $${totalMonthly.toFixed(2)}</p></footer>`;
    }
    console.log(totalMonthlyDisplay);

    clearForm();
}

function removeEmployee(event) {
    employeeElement = event.target.parentElement.parentElement;
    console.log(employeeElement);
    // console.log(employeeElement.getElementsByClassName('salary').innerText);
    employeeElement.remove();
}

function clearForm() {
    firstNameInput.value = ''
    lastNameInput.value = ''
    idInput.value = ''
    titleInput.value = ''
    annualSalaryInput.value = ''
}
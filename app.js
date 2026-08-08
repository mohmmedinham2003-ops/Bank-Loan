function applyForLoan() {

    let applyCustomer = {

        fullName: document.getElementById("txtFullName").value,

        panCard: document.getElementById("txtPancard").value,

        dateOfBirth: document.getElementById("txtDOB").value,

        email: document.getElementById("txtEmail").value,

        phone: document.getElementById("txtNumber").value,

        address: document.getElementById("txtAddress").value,

        city: document.getElementById("txtCity").value,

        state: document.getElementById("txtState").value,

        zipCode: document.getElementById("txtZIPcode").value,

        annualIncome: Number(document.getElementById("txtAnnualincome").value),

        employmentStatus: document.getElementById("txtEmploymentstatus").value,

        creditScore: Number(document.getElementById("txtCreditscore").value),

        assets: document.getElementById("txtAssets").value,

        applicationStatus: "Pending",

        dateApplied: new Date().toISOString(),

        employeeAssigned: document.getElementById("txtEmploymeeAssigned").value,

        loans: [
            {
                bankName: "BankLoan",
                loanAmount: Number(document.getElementById("txtLoanamount").value),
                emi: 0
            }
        ]

    };


    console.log(applyCustomer);


    fetch("https://api.freeprojectapi.com/api/BankLoan/AddNewApplication", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(applyCustomer)

    })

        .then(response => response.json())

        .then(result => {

            console.log(result);

            if (result.result) {

                alert("Application Submitted Successfully");

            }
            else {

                alert(result.message);

            }

        })

        .catch(error => {

            console.error(error);

            alert("Something went wrong.");

        });

}

function loadEmployees() {

    fetch("https://api.freeprojectapi.com/api/BankLoan/GetAllUsers")
        .then(response => response.json())
        .then(result => {

            console.log(result);

            let employeeSelect =
                document.getElementById("txtEmployeeAssigned");

            employeeSelect.innerHTML =
                `<option value="">Select Employee</option>`;

            result.data.forEach(user => {

                if (user.role === "BankEmployee") {

                    employeeSelect.innerHTML += `
                        <option value="${user.userId}">
                            ${user.fullName}
                        </option>
                    `;
                }

            });

        })
        .catch(error => {
            console.error(error);
        });
}

window.onload = function () {
    loadEmployees();
};



function loadApplicationTable() {

    let fullName = document.getElementById("txtFullName").value;

    let panCard = document.getElementById("txtPancard").value;

    let dateOfBirth = document.getElementById("txtDOB").value;

    let email = document.getElementById("txtEmail").value;

    let phone = document.getElementById("txtNumber").value;

    let address = document.getElementById("txtAddress").value;

    let city = document.getElementById("txtCity").value;

    let state = document.getElementById("txtState").value;

    let zipCode = document.getElementById("txtZIPcode").value;

    let annualIncome = Number(document.getElementById("txtAnnualincome").value);

    let employmentStatus = document.getElementById("txtEmploymentstatus").value;

    let assets = document.getElementById("txtAssets").value; 

    let creditScore = Number(document.getElementById("txtCreditscore").value);

    let loanAmount = Number(document.getElementById("txtLoanamount").value);

    let assigedEmployeee = document.getElementById("txtEmployeeAssigned");

    let tableApplication = document.getElementById("tblApplication").value;



   let body = ``;
    body += `

<tr>
    <th>Full Name</th>
    <td>${fullName}</td>
</tr>

<tr>
    <th>PAN Card</th>
    <td>${panCard}</td>
</tr>

<tr>
    <th>Date of Birth</th>
    <td>${dateOfBirth}</td>
</tr>

<tr>
    <th>Email</th>
    <td>${email}</td>
</tr>

<tr>
    <th>Phone</th>
    <td>${phone}</td>
</tr>

<tr>
    <th>Address</th>
    <td>${address}</td>
</tr>

<tr>
    <th>City</th>
    <td>${city}</td>
</tr>

<tr>
    <th>State</th>
    <td>${state}</td>
</tr>

<tr>
    <th>ZIP Code</th>
    <td>${zipCode}</td>
</tr>

<tr>
    <th>Annual Income</th>
    <td>${annualIncome}</td>
</tr>

<tr>
    <th>Employment Status</th>
    <td>${employmentStatus}</td>
</tr>

<tr>
    <th>Assets</th>
    <td>${assets}</td>
</tr>

<tr>
    <th>Credit Score</th>
    <td>${creditScore}</td>
</tr>

<tr>
    <th>Loan Amount</th>
    <td>${loanAmount}</td>
</tr>

<tr>
    <th>Assigned Employee</th>
    <td>${assigedEmployeee}</td>
</tr>

`;

tblApplication.innerHTML = body;

}
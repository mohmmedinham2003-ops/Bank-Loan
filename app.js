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

    let creditScore = Number(document.getElementById("txtCreditscore").value);

    let loanAmount = Number(document.getElementById("txtLoanamount").value);


    let tableApplication = document.getElementById("tblApplication").value;

    let body = `
<tr>
    <th>Full Name</th>
</tr>

<tr>
    <th>PAN Card</th>
</tr>

<tr>
    <th>Date of Birth</th>
</tr>

<tr>
    <th>Email</th>
</tr>

<tr>
    <th>Phone</th>
</tr>

<tr>
    <th>Address</th>
</tr>

<tr>
    <th>City</th>
</tr>

<tr>
    <th>State</th>
</tr>

<tr>
    <th>ZIP Code</th>
</tr>

<tr>
    <th>Annual Income</th>
</tr>

<tr>
    <th>Employment Status</th>
</tr>

<tr>
    <th>Assets</th>
</tr>

<tr>
    <th>Credit Score</th>
</tr>

<tr>
    <th>Loan Amount</th>
</tr>

`

    body += `

                    <tr>
                        <td>${fullName}</td>
                    </tr>

                   <tr>
                        <td>${panCard}</td>
                    </tr>

                    <tr>
                        <td>${dateOfBirth}</td>
                    </tr>

                    <tr>
                        <td>${email}</td>
                    </tr>

                    <tr>
                        <td>${phone}</td>
                    </tr>

                    <tr>
                        <td>${address}</td>
                    </tr>

                    <tr>
                        <td>${city}</td>
                    </tr>

                    <tr>
                        <td>${state}</td>
                    </tr>

                    <tr>
                        <td>${zipCode}</td>
                    </tr>

                    <tr>
                        <td>${annualIncome}</td>
                    </tr>

                    <tr>
                        <td>${employmentStatus}</td>
                    </tr>

                    <tr>
                        <td>${creditScore}</td>
                    </tr>

                    <tr>
                        <td>${loanAmount}</td>
                    </tr>
                    


`;

    tblApplication.innerHTML = body;

}
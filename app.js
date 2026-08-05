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

    let tableApplication = document.getElementById("tblApplication").value;

    let body = `
<tr>
            <th>Full Name</th>
            <th>PAN Card</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <thCity</th>
            <th>State</th>
            <th>ZIP Code</th>
            <th>Annual Income</th>
            <th>Employment Status</th>
            <th>Assets</th>
            <th>Credit Score</th>
            <th>Loan Amount</th>         

                    </tr>

`



}
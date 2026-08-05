function applyForLoan() {
    let applyCustomer = {

        fullName: document.getElementById("txtFullName").value,

        PANCard: document.getElementById("txtPancard").value,

        DOB: document.getElementById("txtDOB").value,

        email: document.getElementById("txtEmail").value,

        phoneNo: document.getElementById("txtNumber").value,

        address: document.getElementById("txtAddress").value,

        city: document.getElementById("txtCity").value,

        state: document.getElementById("txtState").value,

        ZIPCode: document.getElementById("txtZIPcode").value,

        auualIncome: document.getElementById("txtAnnualincome").value,

        employmentStatus: document.getElementById("txtEmploymentstatus").value,

        creditScore: document.getElementById("txtCreditscore").value,

        assets: document.getElementById("txtAssets").value,

        loanAmount: document.getElementById("txtLoanamount").value

    };

     fetch("hhttps://api.freeprojectapi.com/api/BankLoan/AddNewApplication", {

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

            alert("Applied Successful");


        } else {

            alert(result.message);

        }

    })

    .catch(error => {

        console.error(error);
        alert("Something went wrong.");

    });


}
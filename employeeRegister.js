function registererUser() {

    let empUser = {

        userName: document.getElementById("txtEmpUserName").value,

        emailId: document.getElementById("txtEmpEmail1").value,

        fullName: document.getElementById("txtEmpName").value,

        password: document.getElementById("txtEmpPassword").value

    };

    fetch("https://api.freeprojectapi.com/api/BankLoan/RegisterAsBankUser", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(empUser)

    })

    .then(response => response.json())

    .then(result => {

    console.log("Employee Register Response:");
    console.log(JSON.stringify(result, null, 2));

        console.log(result);

        if (result.result) {

            alert("Registration Successful");

            // Go to login page
            window.location.href = "login.html";

        } else {

            alert(result.message);

        }

    })

    .catch(error => {

        console.error(error);
        alert("Something went wrong.");

    });

}
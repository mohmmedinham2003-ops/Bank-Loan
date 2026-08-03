function registerCustomer() {

    let customer = {

        userName: document.getElementById("txtInputUserName").value,

        emailId: document.getElementById("txtInputEmail1").value,

        fullName: document.getElementById("txtInputName").value,

        password: document.getElementById("txtInputPassword").value

    };

    fetch("https://api.freeprojectapi.com/api/BankLoan/RegisterCustomer", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(customer)

    })

    .then(response => response.json())

    .then(result => {

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
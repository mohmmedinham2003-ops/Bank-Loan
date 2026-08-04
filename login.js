function loginCustomer() {

    let loginData = {

        userName: document.getElementById("txtInputUserName").value,

        password: document.getElementById("txtInputPassword").value

    };

    fetch("https://api.freeprojectapi.com/api/BankLoan/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(loginData)

    })

    .then(response => response.json())

    .then(result => {


    if (result.result) {

        if (result.data.role === "Customer") {

            alert("Login Successful");
           window.location.href = "index.html";

        } else if (result.data.role === "BankEmployee") {

            alert("Login Successful");
            window.location.href = "employeeInterface.html";

        }

    } else {

        alert(result.message);

    }

})

    .catch(error => {

        console.error(error);

        alert("Something went wrong.");

    });

}
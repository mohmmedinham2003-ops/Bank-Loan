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

        console.log("LOGIN RESPONSE:");
        console.log(JSON.stringify(result, null, 2));

        if (result.result) {

            console.log("User data:");
            console.log(result.data);

            console.log("Role:");
            console.log(result.data.role);

            if (result.data.role === "Customer") {

                alert("Customer Login");
                window.location.href = "index.html";

            } else if (result.data.role === "BankEmployee") {

                alert("Employee Login");
                window.location.href = "employeeInterface.html";

            } else {

                alert("Unknown role: " + result.data.role);
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
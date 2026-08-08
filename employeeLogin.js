function loginCustomer() {

    let empLoginData = {
        userName: document.getElementById("txtEmpUserName").value,
        password: document.getElementById("txtEmpPassword").value
    };

    fetch("https://api.freeprojectapi.com/api/BankLoan/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(empLoginData)
    })
    .then(response => response.json())
    .then(result => {


        if (result.result) {


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
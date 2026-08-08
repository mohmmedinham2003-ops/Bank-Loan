function loginEmployee() {

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

                alert("Employee Login Successfull");
                window.location.href = "employeeInterface.html";

        } else {

            alert(result.message);
        }

    })
    .catch(error => {

        console.error(error);
        alert("Something went wrong.");
    });
}
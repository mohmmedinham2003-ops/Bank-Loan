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

        console.log(result);

        if (result.result) {

            alert("Customer Login Successful");

            window.location.href = "index.html";

        } else {

            alert(result.message);
        }

    })
    .catch(error => {

        console.error(error);

        alert("Something went wrong.");

    });
}
let userId = 0;

function registerCustomer() {
    userId++;

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
        .then(res => res.json())
        .then(result => {
            console.log(result);

            if (result.result) {
                alert("SingIn successfull");
                localStorage.setItem("customer", JSON.stringify(result.data));
                window.location = "login.html";

            } else {
                alert(result.message);
            }



        })
        .catch(error => console.log(error));


}



let userId = Number(localStorage.getItem("userId")) || 0;


function registerCustomer() {

    // Increment user ID
    userId++;

    // Save latest ID
    localStorage.setItem("userId", userId);


    // Get existing customer list
    let customerList = JSON.parse(localStorage.getItem("customerList")) || [];


    // Create customer object
    let customer = {

       

        userName: document.getElementById("txtInputUserName").value,

        password: document.getElementById("txtInputPassword").value

    };


    console.log(customer);


    // Save array back to localStorage
    localStorage.setItem(
        "customerList",
        JSON.stringify(customerList)
    );



    // Send data to API
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


        if(result.result) {

            alert("Sign In Successful");


            // Save registered user from API
            localStorage.setItem(
                "customer",
                JSON.stringify(result.data)
            );


            window.location = "index.html";


        } else {

            alert(result.message);

        }

    })

    .catch(error => {

        console.log(error);

    });

}
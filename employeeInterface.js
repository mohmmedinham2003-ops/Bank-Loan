function getAllApplications() {

    fetch("https://api.freeprojectapi.com/api/BankLoan/GetAllApplications").then(res => res.json()).then(result => {

        console.log(result);


        result.data.forEach(application => {

            document.getElementById("tblApplications").innerHTML += `
                <tr>

                    <td>${application.applicationId}</td>

                    <td>${application.fullName}</td>

                    <td>${application.loanAmount}</td>

                    <td>${application.applicationStatus}</td>


                </tr>
            `;

        });

    });

}
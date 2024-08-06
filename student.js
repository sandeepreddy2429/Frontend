document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "invalid") {
                showError("Invalid username");
            } else if (username === "sandeepreddy" && password === "123456") {
                successCallback("sandeepreddy");
            } else if (username === "priyanka pandey" && password === "pandey") {
                successCallback("priyanka pandey");
            } else if (username === "sravani" && password === "sravs") {
                successCallback("sravani");
            } else {
                showError("Unknown username");
            }
        });
    }
 

    const showError = (message) => {
        const errorDiv = document.getElementById("error");
        errorDiv.textContent = message;
    };

    const successCallback = (role) => {
        localStorage.setItem("userRole", role);
        window.location.href = "dashboard.html";
    };

    const dashboardGraphs = () => {
        const graphsDiv = document.getElementById("graphs");
        const role = localStorage.getItem("userRole");

        if (role === "sandeepreddy") {
            graphsDiv.innerHTML = `
                <h2>STUDENT NAME : Sandeep Reddy
                <div> ROOL NO : 03 <div/></h2>
               
               <img src="pic1.png" alt="">
 
                 
            `; 
        } else if (role === "priyanka pandey") {
            graphsDiv.innerHTML = `
                  <h2>STUDENT NAME :  priyanka pandey
                <div> ROOL NO : 01 <div/></h2>
              <img src="pic2.jpeg" alt="" class="pandey">
            `;
        }
     else if (role === "sravani") {
        graphsDiv.innerHTML = `
             <h2>STUDENT NAME : Sravani
                <div> ROOL NO : 02 <div/></h2>
                <img src="pic3.png" alt="" class= "sravani">
        `;
    }
    };

    if (window.location.pathname.endsWith("dashboard.html")) {
        dashboardGraphs();
    }
});

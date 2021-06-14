function sendMsg() {
    let userData = document.getElementById("userInput").value;

    let request = new XMLHttpRequest();

    request.open("POST", "set the webhook url here")

    request.setRequestHeader("Content-type", "application/json");

    let params = {
        Username : "",
        avatar_url : "",
        content : userData

    }

    request.send(JSON.stringify(params));

    //this clears the field after the message is sent
    document.getElementById("userInput").value = ""

    };
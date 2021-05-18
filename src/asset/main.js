function createUser() {
    let username = document.querySelector("#create_username").value;
    let password = document.querySelector("#create_password").value;
    let email = document.querySelector("#create_email").value;
    let age = document.querySelector("#create_age").value;
    let school = document.querySelector("#create_school").value;
    // const data = { username: username, password: password };
    fetch("/api/user/create", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                // data,
                username,
                password,
                email,
                age,
                school,
            }),
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
}

function findUser() {
    let username = document.querySelector("#find_username").value;
    let password = document.querySelector("#find_password").value;
    // const data = { username: username, password: password };
    fetch("/api/user/find", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                // data,
                username,
                password,
            }),
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
}
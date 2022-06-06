document.getElementById("form").addEventListener("submit", mySai)

function mySai(event) {
    event.preventDefault();

    let sai = JSON.parse(localStorage.getItem("user")) || []

    let kiran = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        amount: document.getElementById("amount").value
    }
    sai.push(kiran)
    console.log(sai)

    localStorage.setItem("user", JSON.stringify(sai))

}

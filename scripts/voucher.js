async function Sai() {

    let api = `https://masai-vouchers-api.herokuapp.com/api/vouchers`

    let res = await fetch(api)

    let data = await res.json()

    coming(data[0].vouchers)
}
Sai()

function coming(data) {

    let contain = document.querySelector(".voucher")
    contain.innerHTML=""

    data.forEach(function (ele) {
        let div = document.createElement("div")
        div.setAttribute("class", "voucher_list")

        let pho = document.createElement("img");
        pho.src = ele.image

        let naam = document.createElement("h2");
        naam.innerText = ele.name;

        let money = document.createElement("h4")
        money.innerText = ele.price

        let button = document.createElement("button")
        button.innerText = "Buy";
        button.setAttribute("class", "buy_voucher");
       


        div.append(pho, naam, money, button)
        contain.append(div)
    })
}


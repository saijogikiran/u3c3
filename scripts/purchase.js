let menu=document.getElementById("vouchers");

async function getVouchers(){
    let url='https://masai-vouchers-api.herokuapp.com/api/vouchers';

    let res = await fetch(url)
    //console..log(res)

    let data = await res.json()
    //console.log(data);
    data=data.getVouchers
    console.log(data)
    append(data)
}

getVouchers

function append(data){
    data.map(function(el){
       let div=document.createElement("div");

       let img=document.createElement("img")
        img.setAttribute("src",el.image)
        img.style.height = "300px"
        img.style.width = "90%"

        let title=document.createElement("h3")
        title.innerText=el.title;

        let price=document.createElement("h3")
        price.innerText=el.price;

        let button=document.createElement("button")
        button.innerText="Buy"
        button.addEventListener("click",function(){
            addtocart(el)
        })
        div.append(img,title,price,button);
        
        document.getElementById("vouchers").append(div);

    })
}
    
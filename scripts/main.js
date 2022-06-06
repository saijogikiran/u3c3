function Product(n,em,a,am){
    this.name=n;
    this.email=em;
    this.address=a;
    this.amount=am;
}

function addData(event){
    event.preventDefault();
    let form =document.getElementById("form");
    let name =form.name.value;
    let email =form.email.value;
    let address =form.address.value;
    let amount =form.amount.value;

    //console.log((type, desc, price, image));

    let s1=new Product (name, email, address, amount);
    let data=JSON.parse(localStorage.getItem("user"))||[];
    data.push(s1);
    localStorage.getItem("user",JSON.stringify(data));
    console.log(s1);
    
}

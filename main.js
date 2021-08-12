let carts=document.querySelectorAll('.add-cart');

let products=[
    {
        name:'Mirror',
        price: 10,
        inCart:0
    },
    {
        name:'Couch',
        price:15,
        inCart:0
    },
    {
        name:'Table',
        price:14,
        inCart:0
    },
    {
        name:'Bed',
        price:30,
        inCart:0
    }
];
for(let i=0;i<carts.length;i++)
{
    carts[i].addEventListener('click',()=>{
        cartNumbers();
    })
}

function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers){
        documents.querySelector('.cart span').textContent=productNumbers;
    }
}


function cartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');

    productNumbers=parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.cart span').textContent=productNumbers+1;
    } else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent=1;
    }
}
onLoadCartNumbers();
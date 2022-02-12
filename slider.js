const  wrapper= document .querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll(".menuItem")




const products = [
    {
        id: 1,
        title: "Donate Clothes",

        colors: [
            {
                code: "black",
                img: "istockphoto-1089323862-612x612__1_-removebg-preview.png",
            },
        ],
    },
    {
        id: 2,
        title: "Donate Food",
        desc:
            "Families have to make some tough decisions, especially when it comes to what they can and cannot afford . " +

            " They may have to decide between buying food or paying for rent, which is why our organization was created." +

            " It's so important that we all do our part to make sure food keeps getting into the hands of those who need it most.",

        colors: [
            {
                code: "lightgray",
                img: "Untitled%20design%20(26).png",
            },
        ],
        BTN: "Donate Food"
    },
    {
        id: 3,
        title: "Donate Money",
        desc:
            "Some fans donate to relief efforts themselves. But for most of us, this is a difficult choice. It requires too much of us and puts us at risk.\n" +
            " We'll walk from one bank to another to make a payment. And the process feels so impersonal." +

            "  But imagine if we could donate cash to those affected by Harvey instead of giving stuff. That would make a huge difference." +

            " There are many great organizations that could use that cash. They could use your donation to pay for the people that need help.",
        colors: [
            {
                code: "lightgray",
                img: "Untitled%20design%20(28).png",
            },
        ],
        BTN: "Donate Money"
    },
    {
        id: 4,
        title: "Donate Toys",
        desc:
            "There is a new trend gaining traction in the toy industry that could be beneficial for local charities. Instead of donating money to help collect toys, many companies are choosing to donate toys directly. " +

            "  This has been a particularly interesting trend in the midst of the economic downturn and holiday season." +

            " Charity is an important part of the holiday season, and this year many organizations are asking for toy donations.",
        colors: [
            {
                code: "black",
                img: "Untitled%20design%20(30).png",
            },
        ],
        BTN: "Donate Toys"
    },
    {
        id: 5,
        title: "Donate Hygienic Products",
        desc:
            "There are many reasons to donate hygiene products. They can be donated to a homeless shelter, a women's shelter, or even sold to raise money for an organization such as the school band or football team." +

            "These are all good causes that have helped people in need of soap, shampoo and toothpaste.This is especially true in places where many people have limited access to these needs." +

            " When you donate hygienic products, you're giving people the tools they need to take care of themselves and their families.",
        colors: [
            {
                code: "gray",
                img: "Untitled%20design%20(31).png",
            },
        ],
        BTN: "Donate Hygienic  Products"

    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const Desc = document.querySelector(".productDesc");
const BTN = document.querySelector(".productButton");





menuItem.forEach((item, index) => {
    item.addEventListener("click",
        () => {
            //change the current slide
            wrapper.style.transform = `translateX(${-100 * index}vw)`;

            //change the choosen product
            choosenProduct = products[index];

            //change texts of currentProduct
            currentProductTitle.textContent = choosenProduct.title;
            currentProductImg.src = choosenProduct.colors[0].img;

            Desc.textContent = choosenProduct.desc;
            BTN.textContent = choosenProduct.BTN;

        });
});





const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true , // default: true


}

const darkmode = new Darkmode(options);
darkmode.showWidget();


















$(document).ready(function(){
    $(".counter").counterUp({
        delay: 7,
        time: 1100,
    });

});










const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const checkout = document.querySelector(".payButton");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

checkout.addEventListener("click", () => {
    payment.style.display = "none";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});



const productButton1= document.querySelector(".common-btn");
const payment1 = document.querySelector(".payment1");
const close1 = document.querySelector(".close1");
const checkout1 = document.querySelector(".payButton1");

productButton1.addEventListener("click", () => {
    payment1.style.display = "flex";
});

checkout1.addEventListener("click", () => {
    payment1.style.display = "none";
});

close1.addEventListener("click", () => {
    payment1.style.display = "none";
});








// Get DOM Elements
const modal1 = document.querySelector('.Clothes1');
const modalBtn1 = document.querySelector('.Clothes');
const closeBtn1 = document.querySelector(".payButton ");

// Events
modalBtn1.addEventListener('click', openModal1);
closeBtn1.addEventListener('click', closeModal1);



// Open
function openModal1() {
    modal1.style.display = 'block';
}

// Close
function closeModal1() {
    modal1.style.display = 'none';
}











// Get DOM Elements
const modal2 = document.querySelector('.Food1');
const modalBtn2 = document.querySelector('.Food');
const closeBtn2 = document.querySelector(".payButton");

// Events
modalBtn2.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);



// Open
function openModal2() {
    modal2.style.display = 'block';
}

// Close
function closeModal2() {
    modal2.style.display = 'none';
}








// Get DOM Elements
const modal = document.querySelector('.Money1');
const modalBtn = document.querySelector('.Money');
const closeBtn = document.querySelector('.payButton, .close');


// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);



// Open
function openModal() {
    modal.style.display = 'block';
}

// Close
function closeModal() {
    modal.style.display = 'none';
}





// Get DOM Elements
const modal3 = document.querySelector('.Toys1');
const modalBtn3 = document.querySelector('.Toys');
const closeBtn3 = document.querySelector('.payButton');


// Events
modalBtn3.addEventListener('click', openModal5);
closeBtn3.addEventListener('click', closeModal5);



// Open
function openModal5() {
    modal3.style.display = 'block';
}

// Close
function closeModal5() {
    modal3.style.display = 'none';
}









// Get DOM Elements
const modal4 = document.querySelector('.Hygienic1');
const modalBtn4= document.querySelector('.Hygienic');
const closeBtn4 = document.querySelector('.payButton');


// Events
modalBtn4.addEventListener('click', openModal4);
closeBtn4.addEventListener('click', closeModal4);



// Open
function openModal4() {
    modal4.style.display = 'block';
}

// Close
function closeModal4() {
    modal4.style.display = 'none';
}



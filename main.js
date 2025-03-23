/* Selecting Elements*/
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const closeBtn = document.getElementById('closeBtn');

/* Show Menu when Clicking Hamburger*/
menuBtn.addEventListener('click', () => {
    navMenu.classList.add('active');
});

/* Hide Menu when Clicking Close Button*/
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
});







const whyContainer = [
    { 
        Image: "images/imgpay.png",
        title: "Payment methods",
        description: "We have a lot of them, from cryptocurrencies to barter for potatoes",
    },
    { 
        Image: "images/img.png",
        title: "Simple search process",
        description: "We checked it out, even the kid did it, <br> but it was my mom's friend's son",
    },
    { 
        Image: "images/imgsupport.png",
        title: "24/7 Support",
        description: "Is there something you don't<br>understand? Feel free to call us. <br> Phone number in the footer",
    },
    { 
        Image: "images/img (2).png",
        title: "We are nice",
        description: "Fantasy is over, there will be something really convincing here",
    },

];

const renderProduct = whyContainer => {
    const container = document.getElementById('whyContainer');
    whyContainer.forEach(whyContainer => {
        container.innerHTML += `
           <div>
                    <img src="${whyContainer.Image}" alt="">
                    <h3>${whyContainer.title}</h3>
                    <p>${whyContainer.description}</p>
                </div>
        `;
    });
}

renderProduct(whyContainer);

const specialContainer = [
    {
        image1: "images/Rectangle 9.png",
        image2: "images/rating.svg",
        image3: "images/favorite.svg",
        title: "Wilderness Club at Big <br/>Ceddar",
        description1: "28 October - 1 November",
        description2: " <span>$2016</span> /6 night"
    },
    {
        image1: "images/Rectangle 9 (1).png",
        image2: "images/rating.svg",
        image3: "images/favorite.svg",
        title: "Wilderness Club at Big <br/>Ceddar",
        description1: "28 October - 1 November",
        description2: " <span>$2016</span> /6 night"
    },
    {
        image1: "images/Rectangle 9 (2).png",
        image2: "images/rating.svg",
        image3: "images/favorite.svg",
        title: "Wilderness Club at Big <br/>Ceddar",
        description1: "28 October - 1 November",
        description2: " <span>$2016</span> /6 night"
    },
   
]

const renderContainer = specialContainer => {
    const container = document.getElementById('specialContainer');
    specialContainer.forEach(specialContainer => {
        container.innerHTML += `
           <div class="first-bed" id="beds">
                    <img src="${specialContainer.image1}" alt="" id="first-bed">
                    <img src="${specialContainer.image2}" alt="" class="rating">
                    <img src="${specialContainer.image3}" alt="" class="favorite">
                    <h4 class="wild">${specialContainer.title}</h4>
                    <p class="date">${specialContainer.description1}</p>
                    <p class="price">${specialContainer.description2}</p>
                </div>
        `
    });
}
renderContainer(specialContainer);

const reviewContainer = [
    { 
        Image: "images/Ellipse 6.png",
        description1: "I quickly found the right tour for me,<br>but I had a few questions about the <br>hotel, I wrote to tech support and they <br>answered all my questions within an <br>hour. The vacation itself was perfect. <br>Thank you very much. I will come back <br>again and again.",
        description2: "<i><span>Jannike Borg,</span><i> <em>Publisher</em>",
    },
    { 
        Image: "images/Ellipse 6 (1).png",
        description1: "I quickly found the right tour for me,<br>but I had a few questions about the <br>hotel, I wrote to tech support and they <br>answered all my questions within an <br>hour. The vacation itself was perfect. <br>Thank you very much. I will come back <br>again and again.",
        description2: "<i><span>LeBron Durant,</span><i> <em>Flight attendant</em>",
    },
    { 
        Image: "images/Ellipse 6 (2).png",
        description1: "I quickly found the right tour for me,<br>but I had a few questions about the <br>hotel, I wrote to tech support and they <br>answered all my questions within an <br>hour. The vacation itself was perfect. <br>Thank you very much. I will come back <br>again and again.",
        description2: "<i><span>Kaarel Piho,</span><i> <em>Chiropodist</em>",
    },

];

const renderReview = reviewContainer => {
    const container = document.getElementById('reviewContainer');
    reviewContainer.forEach(reviewContainer => {
        container.innerHTML += `
          <div class="first-review">
                    <img src="${reviewContainer.Image}" alt="" id="review-pic">
                    <p class="review-msg">${reviewContainer.description1}</p>
                    <p class="review-author"> ${reviewContainer.description2}</p>
                </div>
        `;
    });
}

renderReview(reviewContainer);

const postContainer = [
    { 
        image1: "images/Rectangle 17.png",
        description1: "May 23, 2022",
        image2: "images/time 5.png",
        title: "My trip to Athens",
        description2: "It would seem that in a city where Theseus,<br> Plato and Epicurus once walked,<br> the very idea of the subway is alien to the city, but already...",
    },
    { 
        image1: "images/Rectangle 17 (1).png",
        description1: "May 22, 2022",
        image2: "images/time.svg",
        title: "Vilnius resorts",
        description2: "I haven't seen any resorts in Vilnius,<br>but there are wonderful people and pubs",
    },
    { 
        image1: "images/Rectangle 17 (2).png",
        description1: "May 22, 2022",
        image2: "images/time (1).svg",
        title: "Tips for flying on a plane",
        description2: "If you have a fear of flying,<br> here's a helpful tip:<br> bring your co-pilot so you can take a nap while he steers the plane for you",
    },

];

const renderPost = postContainer => {
    const container = document.getElementById('postContainer');
    postContainer.forEach(postContainer => {
        container.innerHTML += `
               <div class="athens">
                       <img src="${postContainer.image1}" alt="" class="athens-pic">
                        <p>${postContainer.description1}</p> 
                        <img src="${postContainer.image2}" alt="" class="five-minutes">
                        <h4 class="athens-text1">${postContainer.title}</h4>
                        <p class="athens-text2">${postContainer.description2}</p>
                </div>
        `;
    });
}

renderPost(postContainer);
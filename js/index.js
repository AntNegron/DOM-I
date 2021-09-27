const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// update for nav
const navLink1 = document.querySelector('nav a:nth-child(1)');
navLink1.textContent = siteContent['nav'] ['nav-item-1'];
const navLink2 = document.querySelector('nav a:nth-child(2)');
navLink2.textContent = siteContent['nav'] ['nav-item-2'];
const navLink3 = document.querySelector('nav a:nth-child(3)');
navLink3.textContent = siteContent['nav'] ['nav-item-3'];
const navLink4 = document.querySelector('nav a:nth-child(4)');
navLink4.textContent = siteContent['nav'] ['nav-item-4'];
const navLink5 = document.querySelector('nav a:nth-child(5)');
navLink5.textContent = siteContent['nav'] ['nav-item-5'];
const navLink6 = document.querySelector('nav a:nth-child(6)');
navLink6.textContent = siteContent['nav'] ['nav-item-6'];


// add new content
const newLink1 = document.createElement('a');
newLink1.textContent = 'Education';
newLink1.href = '#';
document.querySelector('nav').appendChild(newLink1);
const newLink2 = document.createElement('a');
newLink2.textContent = 'Home';
newLink2.href = '#';
document.querySelector('nav').prepend(newLink2);

const navBar = document.querySelector('nav a');
navBar.style.color = 'green';
const nav1 = navBar.nextElementSibling;
nav1.style.color = 'green';
const nav2 = nav1.nextElementSibling;
nav2.style.color = 'green';
const nav3 = nav2.nextElementSibling;
nav3.style.color = 'green';
const nav4 = nav3.nextElementSibling;
nav4.style.color = 'green';
const nav5 = nav4.nextElementSibling;
nav5.style.color = 'green';
const nav6 = nav5.nextElementSibling;
nav6.style.color = 'green';
const nav7 = nav6.nextElementSibling;
nav7.style.color = 'green';



// cta update
const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'img/header-img.png';

const ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = 'Dom<br>Is<br>Awesome<br>';

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = 'Get Started';



// main-content update
const featureH4 = document.querySelector('.top-content:nth-child(1) h4');
featureH4.textContent = siteContent['main-content']['features-h4'];
const featureContent = document.querySelector('.top-content:nth-child(1) p');
featureContent.textContent = siteContent['main-content']['features-content'];

const aboutH4 = document.querySelector('.top-content .text-content:nth-child(2) h4');
aboutH4.textContent = siteContent['main-content']['about-h4'];
const aboutContent = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutContent.textContent = siteContent['main-content']['about-content'];

const middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

const serviceH4 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
serviceH4.textContent = siteContent['main-content']['services-h4'];
const serviceContent = document.querySelector('.bottom-content .text-content:nth-child(1) p');
serviceContent.textContent = siteContent['main-content']['services-content'];

const productH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
productH4.textContent = siteContent['main-content']['product-h4'];
const productContent = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productContent.textContent = siteContent['main-content']['product-content'];



// contact update
 const contactH4 = document.querySelector('.contact h4');
 contactH4.textContent = siteContent['contact']['contact-h4'];
 const contactAddress = document.querySelector('.contact p:nth-child(2)')
 contactAddress.innerHTML = '123 Way 456 Street<br>Somewhere, USA';
 const contactPhone = document.querySelector('.contact p:nth-child(3)');
 contactPhone.textContent = siteContent['contact']['phone'];
 const contactEmail = document.querySelector('.contact p:nth-child(4)');
 contactEmail.textContent = siteContent['contact']['email'];



//  footer update
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];
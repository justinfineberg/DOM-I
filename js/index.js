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


//Nav

const nav1 = document.querySelector('nav a:nth-child(1)')
nav1.textContent = siteContent['nav']['nav-item-1']

const nav2 = document.querySelector('nav a:nth-child(2)')
nav2.textContent = siteContent['nav']['nav-item-2']

const nav3 = document.querySelector('nav a:nth-child(3)')
nav3.textContent = siteContent['nav']['nav-item-3']

const nav4 = document.querySelector('nav a:nth-child(4)')
nav4.textContent = siteContent['nav']['nav-item-4']

const nav5 = document.querySelector('nav a:nth-child(5)')
nav5.textContent = siteContent['nav']['nav-item-5']

const nav6 = document.querySelector('nav a:nth-child(6)')
nav6.textContent = siteContent['nav']['nav-item-6']

document.querySelectorAll('nav a').forEach(element => element.style.color = 'green');

let newItem1 = document.createElement('a');
newItem1.textContent = 'More Features'
newItem1.style.color = 'green'
let newItem2 = document.createElement('a');
newItem2.textContent = 'Start Here'
newItem2.style.color = 'green'

document.querySelector('nav').prepend(newItem2);
document.querySelector('nav').appendChild(newItem1);

//Cta

let mainTitle = document.querySelector('.cta h1');
mainTitle.textContent = siteContent['cta']['h1']

document.querySelector('.cta img').src = siteContent['cta']['img-src']

document.querySelector('.cta button').textContent = siteContent['cta']['button']


//Main Content

document.querySelector('.text-content h4').textContent = siteContent['main-content']['features-h4']
document.querySelector('.top-content p').textContent = siteContent['main-content']['features-content']


document.querySelector('.text-content:nth-child(2) h4').textContent = siteContent['main-content']['about-h4']
document.querySelector('.text-content:nth-child(2) p').textContent = siteContent['main-content']['about-content']

document.querySelector('.middle-img').src = siteContent['main-content']['middle-img-src']


document.querySelector('.bottom-content .text-content:nth-child(1) h4').textContent = siteContent['main-content']['services-h4']
document.querySelector('.bottom-content .text-content:nth-child(1) p').textContent = siteContent['main-content']['services-content']

document.querySelector('.bottom-content .text-content:nth-child(2) h4').textContent = siteContent['main-content']['product-h4']
document.querySelector('.bottom-content .text-content:nth-child(2) p').textContent = siteContent['main-content']['product-content']

document.querySelector('.bottom-content .text-content:nth-child(3) h4').textContent = siteContent['main-content']['vision-h4']
document.querySelector('.bottom-content .text-content:nth-child(3) p').textContent = siteContent['main-content']['vision-content']


//contact

document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4']
let pArr = Array.from(document.querySelectorAll('.contact p'))
pArr[0].textContent = siteContent['contact']['address']
pArr[1].textContent = siteContent['contact']['phone']
pArr[2].textContent = siteContent['contact']['email']


//footer

document.querySelector('footer p').textContent = siteContent['footer']['copyright']


document.querySelector('button').addEventListener('click', listener);


//stretch
function listener(){
  nav1.textContent = 'The'
  nav2.textContent = 'Button'
  nav3.textContent = 'Changes'
  nav4.textContent = 'Things'
}
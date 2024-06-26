const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
  ];
  
  const slideContImg = document.querySelector(".slide-img");
  console.log(slideContImg);
  
  for(let i = 0; i < images.length; i++) {
    
    const slideDiv = `
        <div class="image">
            <img src="${images[i].image}" alt="">
            <h3>${images[i].title}</h3>
            <p>${images[i].text}</p>
        </div>`;
    console.log(slideDiv);
    slideContImg.innerHTML += slideDiv;
  
  }
  
  const allImages = document.getElementsByClassName("image");
  console.log(allImages);
  
  let activeImage = 0;
  allImages[activeImage].classList.add("active");
  
  const btnDown = document.querySelector(".down");
  const btnUp = document.querySelector(".up");
  btnDown.addEventListener("click", function() {
    btnUp.classList.remove("hidden");
    
    allImages[activeImage].classList.remove("active");
    activeImage++;
    allImages[activeImage].classList.add("active");
  
    if (activeImage === allImages.length - 1) {
        allImages[activeImage].classList.remove("active");
  
        activeImage = 0;
  
        allImages[activeImage].classList.add("active");
    }
    
  });
  
  btnUp.addEventListener("click", function() {
    allImages[activeImage].classList.remove("active");
    
    activeImage--;
  
    allImages[activeImage].classList.add("active");
  
    if (activeImage = 0) {
    
    allImages[activeImage].classList.remove("active");
  
    activeImage == (allImages.length - 1) ;
  
    allImages[activeImage].classList.add("active");
  
    }
  })
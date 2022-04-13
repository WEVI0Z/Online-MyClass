const COURSE_CATEGORYES = {
    javaScript: {
        name : "JavaScirpt"
    },
    wordPress: {
        name : "WordPress"
    },
    react: {
        name : "React"
    },
    php: {
        name : "PHP"
    },
    python: {
        name : "Python"
    },
    css: {
        name : "CSS"
    },
    html5: {
        name : "HTML5"
    },
    nodeJs: {
        name : "Node.JS"
    },
    angular: {
        name : "Angular"
    },
    vueJs: {
        name : "Vue JS"
    },
    django: {
        name : "Django"
    },
    reduxFramework: {
        name : "Redus Framework"
    },
    linux: {
        name : "Linux"
    },
    bootstrap: {
        name : "Bootstrap"
    }
}

const coursesData = [
    {
        title : "Полный курс по JavaScript + React - с нуля до результата",
        category : COURSE_CATEGORYES.javaScript,
        duration : 58,
        rating : 4.8,
        image : "img/picture-1.svg"
    },
    
    {
        title : "Современный JavaScript - с Нуля до Junior Специалиста",
        category : COURSE_CATEGORYES.javaScript,
        duration : 66,
        rating : 4.6,
        image : "img/picture-2.svg"
    },
    
    {
        title : "Посадка верстки и создание тем на CMS WordPress",
        category : COURSE_CATEGORYES.wordPress,
        duration : 6,
        rating : 4.8,
        image : "img/picture-3.svg"
    },
    
    {
        title : "Создание сайтов без программирования на WordPress",
        category : COURSE_CATEGORYES.wordPress,
        duration : 15,
        rating : 4.5,
        image : "img/picture-4.svg"
    },
    
    {
        title : "React с нуля для начинающих",
        category : COURSE_CATEGORYES.react,
        duration : 13,
        rating : 4.8,
        image : "img/picture-5.svg"
    },
    
    {
        title : "React + Redux",
        category : COURSE_CATEGORYES.react,
        duration : 22,
        rating : 4.6,
        image : "img/picture-6.svg"
    },
    
    {
        title : "PHP с нуля",
        category : COURSE_CATEGORYES.php,
        duration : 43,
        rating : 3.4,
        image : "img/picture-1.svg"
    },
    
    {
        title : "Python с нуля",
        category : COURSE_CATEGORYES.python,
        duration : 23,
        rating : 4.5,
        image : "img/picture-2.svg"
    },
    
    {
        title : "CSS с нуля",
        category : COURSE_CATEGORYES.css,
        duration : 56,
        rating : 5.0,
        image : "img/picture-3.svg"
    },
    
    {
        title : "HTML5 с нуля",
        category : COURSE_CATEGORYES.html5,
        duration : 34,
        rating : 2.9,
        image : "img/picture-4.svg"
    },
    
    {
        title : "Node.JS с нуля",
        category : COURSE_CATEGORYES.nodeJs,
        duration : 47,
        rating : 4.1,
        image : "img/picture-5.svg"
    },
    
    {
        title : "Angular с нуля",
        category : COURSE_CATEGORYES.angular,
        duration : 32,
        rating : 4.5,
        image : "img/picture-6.svg"
    },
    
    {
        title : "Vue JS с нуля",
        category : COURSE_CATEGORYES.vueJs,
        duration : 90,
        rating : 3.9,
        image : "img/picture-1.svg"
    },
    
    {
        title : "Django с нуля",
        category : COURSE_CATEGORYES.django,
        duration : 46,
        rating : 2.1,
        image : "img/picture-2.svg"
    },
    
    {
        title : "Redux Framework с нуля",
        category : COURSE_CATEGORYES.reduxFramework,
        duration : 90,
        rating : 4.8,
        image : "img/picture-3.svg"
    },
    
    {
        title : "Linux с нуля",
        category : COURSE_CATEGORYES.linux,
        duration : 34,
        rating : 4.3,
        image : "img/picture-4.svg"
    },
    
    {
        title : "Bootstrap с нуля",
        category : COURSE_CATEGORYES.bootstrap,
        duration : 65,
        rating : 1.9,
        image : "img/picture-5.svg"
    },
    
    {
        title : "PHP для продвинутых",
        category : COURSE_CATEGORYES.php,
        duration : 67,
        rating : 3.2,
        image : "img/picture-6.svg"
    },
    
    {
        title : "Python для продвинутых",
        category : COURSE_CATEGORYES.python,
        duration : 87,
        rating : 4.1,
        image : "img/picture-1.svg"
    },
    
    {
        title : "CSS для продвинутых",
        category : COURSE_CATEGORYES.css,
        duration : 45,
        rating : 3.7,
        image : "img/picture-2.svg"
    },
    
    {
        title : "HTML5 для продвинутых",
        category : COURSE_CATEGORYES.html5,
        duration : 76,
        rating : 4.5,
        image : "img/picture-3.svg"
    },
    
    {
        title : "Node.JS для продвинутых",
        category : COURSE_CATEGORYES.nodeJs,
        duration : 24,
        rating : 4.7,
        image : "img/picture-4.svg"
    },
    
    {
        title : "Angular для продвинутых",
        category : COURSE_CATEGORYES.angular,
        duration : 15,
        rating : 2.3,
        image : "img/picture-5.svg"
    },
    
    {
        title : "Vue JS для продвинутых",
        category : COURSE_CATEGORYES.vueJs,
        duration : 63,
        rating : 4.1,
        image : "img/picture-6.svg"
    },
    
    {
        title : "Django для продвинутых",
        category : COURSE_CATEGORYES.django,
        duration : 46,
        rating : 4.2,
        image : "img/picture-1.svg"
    },
    
]

function removeAllActiveClasses(listOfElements){
    listOfElements.forEach(function(itElement) {
        itElement.classList.remove("active");
    })
}

function drawAllCards(cards) {
    const cardsFragment = document.createDocumentFragment();

    const cardsField = document.querySelector(".cards");
    const cardTemplate = document.getElementById("card").content.querySelector("li");

    function cleanTheField(field) {
        field.innerHTML = "";
    };

    cleanTheField(cardsField);

    cards.forEach(function(itCard) {
        let newCard = cardTemplate.cloneNode(true);

        newCard.dataset.category = itCard.category.name;

        newCard.querySelector(".card-img-background img").src = itCard.image;
        newCard.querySelector("h2").textContent = itCard.title;
        newCard.querySelector(".card-meta-time dd").textContent = itCard.duration + " часов";
        newCard.querySelector(".card-meta-raiting dd").textContent = itCard.rating;
        
        cardsFragment.appendChild(newCard)
    });

    cardsField.appendChild(cardsFragment)
}

function controlThemes() {
    const themesButtonsWrapper = document.querySelector(".theme-list");
    const allThemesButtons = themesButtonsWrapper.querySelectorAll(".theme-button");
    const htmlElement = document.querySelector("html");
    
    function themesButtonsClickHandler(evt) {
        evt.preventDefault();
        targetButton = evt.target.closest('li');

        htmlElement.dataset.themeName = targetButton.dataset.type;

        removeAllActiveClasses(allThemesButtons);
        targetButton.querySelector(".theme-button").classList.add("active");
    }

    themesButtonsWrapper.addEventListener("click", themesButtonsClickHandler)
}

function controlCardsFilters() {
    const filtersButtonsWrapper = document.querySelector(".card-view-buttons");
    const allFilterButtons = filtersButtonsWrapper.querySelectorAll(".card-view-button");
    const cardsField = document.querySelector(".cards");

    function filtersButtonsClickHandler(evt) {
        evt.preventDefault();
        targetButton = evt.target.closest('li');

        cardsField.classList.remove("standard")
        cardsField.classList.remove("compact")
        
        if (targetButton.dataset.type != undefined) {
            cardsField.classList.add(targetButton.dataset.type);
        }

        removeAllActiveClasses(allFilterButtons);
        targetButton.querySelector(".card-view-button").classList.add("active");
    }

    filtersButtonsWrapper.addEventListener("click", filtersButtonsClickHandler);
}

controlCardsFilters();
controlThemes();
drawAllCards(coursesData)
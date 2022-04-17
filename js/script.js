const COURSE_CATEGORYES = new Map([
    ["javaScript", "JavaScript"],
    ["wordPress", "WordPress"],
    ["react", "React"],
    ["php", "PHP"],
    ["python", "Python"],
    ["css", "CSS"],
    ["html5", "HTML5"],
    ["nodeJs", "Node.JS"],
    ["angular", "Angular"],
    ["vueJs", "Vue JS"],
    ["django", "Django"],
    ["reduxFramework", "Redux Framework"],
    ["linux", "Linux"],
    ["bootstrap", "Bootstrap"]
])

const coursesData = [
    {
        title : "Полный курс по JavaScript + React - с нуля до результата",
        category : COURSE_CATEGORYES.get("javaScript"),
        duration : 58,
        rating : 4.8,
        image : "img/picture-1.svg"
    },
    
    {
        title : "Современный JavaScript - с Нуля до Junior Специалиста",
        category : COURSE_CATEGORYES.get("javaScript"),
        duration : 66,
        rating : 4.6,
        image : "img/picture-2.svg"
    },
    
    {
        title : "Посадка верстки и создание тем на CMS WordPress",
        category : COURSE_CATEGORYES.get("wordPress"),
        duration : 6,
        rating : 4.8,
        image : "img/picture-3.svg"
    },
    
    {
        title : "Создание сайтов без программирования на WordPress",
        category : COURSE_CATEGORYES.get("wordPress"),
        duration : 15,
        rating : 4.5,
        image : "img/picture-4.svg"
    },
    
    {
        title : "React с нуля для начинающих",
        category : COURSE_CATEGORYES.get("react"),
        duration : 13,
        rating : 4.8,
        image : "img/picture-5.svg"
    },
    
    {
        title : "React + Redux",
        category : COURSE_CATEGORYES.get("react"),
        duration : 22,
        rating : 4.6,
        image : "img/picture-6.svg"
    },
    
    {
        title : "PHP с нуля",
        category : COURSE_CATEGORYES.get("php"),
        duration : 43,
        rating : 3.4,
        image : "img/picture-1.svg"
    },
    
    {
        title : "Python с нуля",
        category : COURSE_CATEGORYES.get("python"),
        duration : 23,
        rating : 4.5,
        image : "img/picture-2.svg"
    },
    
    {
        title : "CSS с нуля",
        category : COURSE_CATEGORYES.get("css"),
        duration : 56,
        rating : 5.0,
        image : "img/picture-3.svg"
    },
    
    {
        title : "HTML5 с нуля",
        category : COURSE_CATEGORYES.get("html5"),
        duration : 34,
        rating : 2.9,
        image : "img/picture-4.svg"
    },
    
    {
        title : "Node.JS с нуля",
        category : COURSE_CATEGORYES.get("nodeJs"),
        duration : 47,
        rating : 4.1,
        image : "img/picture-5.svg"
    },
    
    {
        title : "Angular с нуля",
        category : COURSE_CATEGORYES.get("angular"),
        duration : 32,
        rating : 4.5,
        image : "img/picture-6.svg"
    },
    
    {
        title : "Vue JS с нуля",
        category : COURSE_CATEGORYES.get("vueJs"),
        duration : 90,
        rating : 3.9,
        image : "img/picture-1.svg"
    },
    
    {
        title : "Django с нуля",
        category : COURSE_CATEGORYES.get("django"),
        duration : 46,
        rating : 2.1,
        image : "img/picture-2.svg"
    },
    
    {
        title : "Redux Framework с нуля",
        category : COURSE_CATEGORYES.get("reduxFramework"),
        duration : 90,
        rating : 4.8,
        image : "img/picture-3.svg"
    },
    
    {
        title : "Linux с нуля",
        category : COURSE_CATEGORYES.get("linux"),
        duration : 34,
        rating : 4.3,
        image : "img/picture-4.svg"
    },
    
    {
        title : "Bootstrap с нуля",
        category : COURSE_CATEGORYES.get("bootstrap"),
        duration : 65,
        rating : 1.9,
        image : "img/picture-5.svg"
    },
    
    {
        title : "PHP для продвинутых",
        category : COURSE_CATEGORYES.get("php"),
        duration : 67,
        rating : 3.2,
        image : "img/picture-6.svg"
    },
    
    {
        title : "Python для продвинутых",
        category : COURSE_CATEGORYES.get("python"),
        duration : 87,
        rating : 4.1,
        image : "img/picture-1.svg"
    },
    
    {
        title : "CSS для продвинутых",
        category : COURSE_CATEGORYES.get("css"),
        duration : 45,
        rating : 3.7,
        image : "img/picture-2.svg"
    },
    
    {
        title : "HTML5 для продвинутых",
        category : COURSE_CATEGORYES.get("html5"),
        duration : 76,
        rating : 4.5,
        image : "img/picture-3.svg"
    },
    
    {
        title : "Node.JS для продвинутых",
        category : COURSE_CATEGORYES.get("nodeJs"),
        duration : 24,
        rating : 4.7,
        image : "img/picture-4.svg"
    },
    
    {
        title : "Angular для продвинутых",
        category : COURSE_CATEGORYES.get("angular"),
        duration : 15,
        rating : 2.3,
        image : "img/picture-5.svg"
    },
    
    {
        title : "Vue JS для продвинутых",
        category : COURSE_CATEGORYES.get("vueJs"),
        duration : 63,
        rating : 4.1,
        image : "img/picture-6.svg"
    },
    
    {
        title : "Django для продвинутых",
        category : COURSE_CATEGORYES.get("django"),
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

function getCards(cardsData) {
    const cardsField = document.querySelector(".cards");

    function drawAllCards(field) {
        field.innerHTML = "";
        field.insertAdjacentHTML("afterBegin", cards.join(""))
    };

    const cards =  cardsData.map(function(itCard) {
        return ` 
        <li class="cards-item" data-category="${itCard.category}">
            <article class="card">
            <div class="card-img-background">
                <img src="${itCard.image}" width="196" height="119" alt="Компьютер, планшет, разные виды мобильных телефонов">
            </div>
            <div class="card-content">
                <h2>
                <a href="#">${itCard.title}</a>
                </h2>
                <p>Адаптивная верстка с нуля для начинающих на примере одностраничного сайта</p>
                <dl class="card-meta-list">
                <div class="card-meta card-meta-raiting">
                    <dt>
                    <span class="visually-hidden">Рейтинг</span>
                    <svg>
                        <use xlink:href="#star"></use>
                    </svg>
                    </dt>
                    <dd>${itCard.rating}</dd>
                </div>
                <div class="card-meta card-meta-time">
                    <dt>
                    <span class="visually-hidden">Время прочтения</span>
                    <svg>
                        <use xlink:href="#time"></use>
                    </svg>
                    </dt>
                    <dd>${itCard.duration + " часов"}</dd>
                </div>
                </dl>
            </div>
            </article>
        </li>`;
    });

    drawAllCards(cardsField);
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

function controlCatedoriesFilters(cardsData) {
    const filtersButtonsWrapper = document.querySelector(".hashtags");
    let cardState = null;

    function filterCards(category) {
        return cardsData.filter((itCard) => {
            if (itCard.category == category) return itCard;
        })
    }

    function filtersButtonsClickHandler(evt) {
        evt.preventDefault;

        const button = evt.target.closest(".hashtag");
        let filteredCards;

        if (button) {
            if (cardState == button.dataset.category) {
                filteredCards = cardsData;
                cardState = null;
            } else {
                cardState = button.dataset.category;

                filteredCards = filterCards(button.dataset.category);
            }

            getCards(filteredCards);
        }
    }

    filtersButtonsWrapper.addEventListener("click", filtersButtonsClickHandler)
}

controlCatedoriesFilters(coursesData);
controlCardsFilters();
controlThemes();
getCards(coursesData)
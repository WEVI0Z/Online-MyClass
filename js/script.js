const TIMEOUT_INTERVAL = 500;

const coursesData = [
    {
        title : "Полный курс по JavaScript + React - с нуля до результата",
        category :  "JavaScript",
        duration : 58,
        rating : 4.8,
        image : "img/picture-1.svg",
        price: 39
    },
    
    {
        title : "Современный JavaScript - с Нуля до Junior Специалиста",
        category : "JavaScript",
        duration : 66,
        rating : 4.6,
        image : "img/picture-2.svg",
        price: 29
    },
    
    {
        title : "Посадка верстки и создание тем на CMS WordPress",
        category : "WordPress",
        duration : 6,
        rating : 4.8,
        image : "img/picture-3.svg",
        price: 14
    },
    
    {
        title : "Создание сайтов без программирования на WordPress",
        category : "WordPress",
        duration : 15,
        rating : 4.5,
        image : "img/picture-4.svg",
        price: 76
    },
    
    {
        title : "React с нуля для начинающих",
        category : "React",
        duration : 13,
        rating : 4.8,
        image : "img/picture-5.svg",
        price: 54
    },
    
    {
        title : "React + Redux",
        category : "React",
        duration : 22,
        rating : 4.6,
        image : "img/picture-6.svg",
        price: 91
    },
    
    {
        title : "PHP с нуля",
        category : "PHP",
        duration : 43,
        rating : 3.4,
        image : "img/picture-1.svg",
        price: 43
    },
    
    {
        title : "Python с нуля",
        category : "PHP",
        duration : 23,
        rating : 4.5,
        image : "img/picture-2.svg",
        price: 19
    },
    
    {
        title : "CSS с нуля",
        category : "CSS",
        duration : 56,
        rating : 5.0,
        image : "img/picture-3.svg",
        price: 59
    },
    
    {
        title : "HTML5 с нуля",
        category : "HTML5",
        duration : 34,
        rating : 2.9,
        image : "img/picture-4.svg",
        price: 63
    },
    
    {
        title : "Node.JS с нуля",
        category : "Node JS",
        duration : 47,
        rating : 4.1,
        image : "img/picture-5.svg",
        price: 97
    },
    
    {
        title : "Angular с нуля",
        category : "Angular",
        duration : 32,
        rating : 4.5,
        image : "img/picture-6.svg",
        price: 79
    },
    
    {
        title : "Vue JS с нуля",
        category : "Vue JS",
        duration : 90,
        rating : 3.9,
        image : "img/picture-1.svg",
        price: 109
    },
    
    {
        title : "Django с нуля",
        category : "Django",
        duration : 46,
        rating : 2.1,
        image : "img/picture-2.svg",
        price: 145
    },
    
    {
        title : "Redux Framework с нуля",
        category : "Redux Framework",
        duration : 90,
        rating : 4.8,
        image : "img/picture-3.svg",
        price: 31
    },
    
    {
        title : "Linux с нуля",
        category : "Linux",
        duration : 34,
        rating : 4.3,
        image : "img/picture-4.svg",
        price: 54
    },
    
    {
        title : "Bootstrap с нуля",
        category : "Bootstrap",
        duration : 65,
        rating : 1.9,
        image : "img/picture-5.svg",
        price: 69
    },
    
    {
        title : "PHP для продвинутых",
        category : "PHP",
        duration : 67,
        rating : 3.2,
        image : "img/picture-6.svg",
        price: 71
    },
    
    {
        title : "Python для продвинутых",
        category : "Python",
        duration : 87,
        rating : 4.1,
        image : "img/picture-1.svg",
        price: 25
    },
    
    {
        title : "CSS для продвинутых",
        category : "CSS",
        duration : 45,
        rating : 3.7,
        image : "img/picture-2.svg",
        price: 50
    },
    
    {
        title : "HTML5 для продвинутых",
        category : "HTML5",
        duration : 76,
        rating : 4.5,
        image : "img/picture-3.svg",
        price: 28
    },
    
    {
        title : "Node.JS для продвинутых",
        category : "Node JS",
        duration : 24,
        rating : 4.7,
        image : "img/picture-4.svg",
        price: 53
    },
    
    {
        title : "Angular для продвинутых",
        category : "Angular",
        duration : 15,
        rating : 2.3,
        image : "img/picture-5.svg",
        price: 84
    },
    
    {
        title : "Vue JS для продвинутых",
        category : "Vue JS",
        duration : 63,
        rating : 4.1,
        image : "img/picture-6.svg",
        price: 150
    },
    
    {
        title : "Django для продвинутых",
        category : "Django",
        duration : 46,
        rating : 4.2,
        image : "img/picture-1.svg",
        price: 66
    }
];

let currentCards = coursesData;

let lastTimeOut;

function debounce(action, evt) {
    if (lastTimeOut) {
        clearTimeout(lastTimeOut);
    }

    lastTimeOut = setTimeout(action, TIMEOUT_INTERVAL, evt);
}

function removeAllActiveClasses(listOfElements) {
    listOfElements.forEach(function(itElement) {
        itElement.classList.remove("active");
    })
}

function drawMarkup(field, markup) {
    field.innerHTML = "";
    field.insertAdjacentHTML("afterBegin", markup);
}

function getCards(cardsData) {
    const cardsField = document.querySelector(".cards");

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
                <div class="card-meta card-meta-price">
                  <dt>
                    <span class="visually-hidden">Время прочтения</span>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 230.562 230.562" style="enable-background:new 0 0 230.562 230.562;" xml:space="preserve">
                      <g>
                        <g>
                          <g>
                            <path d="M228.334,122.532L121.725,15.924c-1.02-1.02-2.308-1.73-3.715-2.044L58.156,0.471c-2.546-0.573-5.202,0.203-7.043,2.044
                              L2.228,51.403c-1.864,1.864-2.63,4.56-2.024,7.127l13.982,59.278c0.325,1.375,1.027,2.633,2.026,3.634l106.611,106.606
                              c1.428,1.428,3.36,2.229,5.379,2.229c2.019,0,3.954-0.801,5.379-2.229l94.749-94.754
                              C231.306,130.324,231.306,125.505,228.334,122.532z M128.203,211.91L28.5,112.208L15.987,59.163l42.925-42.93l53.612,12.011
                              l99.669,99.667L128.203,211.91z"/>
                            <path d="M86.401,45.544c-5.42-5.42-12.623-8.402-20.284-8.402s-14.865,2.985-20.284,8.402c-11.182,11.187-11.182,29.384,0,40.569
                              c5.417,5.417,12.623,8.4,20.284,8.4s14.865-2.983,20.284-8.402C97.581,74.926,97.581,56.729,86.401,45.544z M75.64,75.349
                              c-2.544,2.544-5.927,3.944-9.523,3.944s-6.98-1.4-9.523-3.944c-5.25-5.25-5.25-13.797,0-19.049
                              c2.544-2.544,5.927-3.946,9.523-3.946s6.98,1.403,9.523,3.944C80.887,61.555,80.887,70.099,75.64,75.349z"/>
                            <path d="M105.506,92.869l-10.857,10.857l5.23,5.227c-6.749,9.724-6.807,19.754-0.003,26.554
                              c3.632,3.632,7.636,5.473,11.907,5.473h0.003c6.886-0.003,13.416-4.76,19.498-9.625c4.522-3.563,7.989-5.372,10.305-5.372
                              c0.9,0,1.578,0.271,2.189,0.885c0.893,0.893,1.978,2.412,1.131,5.306c-0.654,2.234-2.359,4.809-4.798,7.246
                              c-4.208,4.208-10.771,6.404-14.652,4.824l-2.356-0.959l-5.793,14.329l2.359,0.949c2.876,1.151,5.861,1.74,8.874,1.74
                              c5.671-0.003,11.405-2.062,16.708-5.975l5.64,5.64l10.857-10.855l-5.922-5.919c5.739-7.89,7.811-19.316-0.621-27.751
                              c-3.743-3.743-7.915-5.64-12.404-5.64c-7.251,0-13.995,4.791-20.845,10.135c-2.83,2.234-6.711,5.29-9.209,5.29
                              c-0.687,0-1.238-0.249-1.793-0.801c-0.789-0.789-1.593-1.996-0.804-4.367c0.647-1.953,2.214-4.208,4.532-6.526
                              c2.82-2.825,7.048-4.798,10.282-4.798c0.495,0,0.946,0.051,1.339,0.147l2.204,0.545l4.996-13.609l-2.452-0.842
                              c-6.883-2.364-13.323-1.403-20.274,3.168L105.506,92.869z"/>
                          </g>
                        </g>
                      </g>
                      </svg>
                  </dt>
                  <dd>${itCard.price} BYN</dd>
                </div>
                </dl>
            </div>
            </article>
        </li>`;
    });

    currentCards = cardsData;

    drawMarkup(cardsField, cards.join(""));
}

function controlThemes() {
    const themesButtonsWrapper = document.querySelector(".theme-list");
    const allThemesButtons = themesButtonsWrapper.querySelectorAll(".theme-button");
    const htmlElement = document.querySelector("html");
    
    function themesButtonsClickHandler(evt) {
        evt.preventDefault();
        targetButton = evt.target.closest('li');

        if (!targetButton) {
            return null;
        }

        htmlElement.dataset.themeName = targetButton.dataset.type;

        removeAllActiveClasses(allThemesButtons);
        targetButton.querySelector(".theme-button").classList.add("active");
    }

    const debouncedThemesButtonsClickHandler = debounce.bind(null, themesButtonsClickHandler);

    themesButtonsWrapper.addEventListener("click", debouncedThemesButtonsClickHandler)
}

function controlCardsThemes() {
    const cardsField = document.querySelector(".cards");
    const themesButtonsWrapper = document.querySelector(".card-view-buttons");
    const allFilterButtons = themesButtonsWrapper.querySelectorAll(".card-view-button");

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

    const debouncedFiltersButtonsClickHandler = debounce.bind(null, filtersButtonsClickHandler);

    themesButtonsWrapper.addEventListener("click", debouncedFiltersButtonsClickHandler);
}

function controlCategoriesFilters(cardsData) {
    const filtersButtonsWrapper = document.querySelector(".hashtags");

    function createFiltersArray() {
        const cards = document.querySelectorAll(".cards-item");
        const categories = new Set;

        cards.forEach((itCard) => {
            categories.add(itCard.dataset.category);
        });

        return Array.from(categories);
    }

    function drawCategoriesButtons() {
        const categories = ["All", ...createFiltersArray()];
        const filtersWrapper = document.querySelector(".hashtags");

        const filtersButtons = categories.map((itCategory) => {
            return `
                <li class="hashtag" data-category="${itCategory}">
                    <a href="#">${itCategory}</a>
                </li>
            `
        });

        drawMarkup(filtersWrapper, filtersButtons.join(""));
    }

    function filterCards(category) {
        return cardsData.filter((itCard) => {
            if (itCard.category === category) {
                return itCard;
            }
        })
    }

    function filtersButtonsClickHandler(evt) {
        evt.preventDefault;

        const button = evt.target.closest(".hashtag");

        if (button) {
            let filteredCards;
            
            button.dataset.category === "All" ? filteredCards = cardsData : filteredCards = filterCards(button.dataset.category);

            getCards(filteredCards);
        }
    }

    drawCategoriesButtons();

    const debouncedFiltersButtonsClickHandler = debounce.bind(null, filtersButtonsClickHandler);

    filtersButtonsWrapper.addEventListener("click", debouncedFiltersButtonsClickHandler);
}

function controlSortingFilters() {
    const SORT_TYPES = {
        duration : sortByDuration,
        raiting : sortByRating,
        price : sortByPrice
    }

    const sortButtonsWrapper = document.querySelector(".sort-list");   

    function sortByDuration(firstItem, secondItem) {
        if (firstItem.duration > secondItem.duration) {
            return 1;
        } else {
            return -1;
        }
    }

    function sortByRating(firstItem, secondItem) {
        if (firstItem.rating > secondItem.rating) {
            return 1;
        } else {
            return -1;
        }
    }

    function sortByPrice(firstItem, secondItem) {
        if (firstItem.price > secondItem.price) {
            return 1;
        } else {
            return -1;
        }
    }

    function sortButtonClickHandler(evt) {
        evt.preventDefault();
        
        const button = evt.target.closest(".sort-item");

        if(button) {
            const sortedCards =  currentCards.sort(SORT_TYPES[`${button.dataset.type}`]);

            getCards(sortedCards);
        }
    }

    const debouncedSortButtonClickHandler = debounce.bind(null, sortButtonClickHandler);

    sortButtonsWrapper.addEventListener("click", debouncedSortButtonClickHandler);
}

getCards(coursesData);
controlCategoriesFilters(coursesData);
controlSortingFilters();
controlCardsThemes();
controlThemes();
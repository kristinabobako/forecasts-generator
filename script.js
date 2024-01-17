/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const forecastBtn = document.querySelector(".forecast-btn"); 
const currentForecastPrediction = document.querySelector("h1");
const currentForecastPercend = document.querySelector("p");

const template = document.querySelector("#forecast-item");
const myPredictionContainer = document.querySelector(".forecasts");

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function insertMyPredictions(predictionText, predictionPercentText) {
    const myPredictions = template.content.cloneNode(true);

    myPredictions.querySelector("h3").textContent = predictionText;
    myPredictions.querySelector("p").textContent = predictionPercentText;

    return myPredictions;
};

forecastBtn.addEventListener('click', function() {

    const predictionRandom = getRandom(1, 6);
    let predictionText = "";

    if (predictionRandom == 1) {
        predictionText = "Удача придет откуда не ждешь!";
    } else if (predictionRandom == 2) {
        predictionText = "Яркое приключение уже поджидает тебя!";
    } else if (predictionRandom == 3) {
        predictionText = "Жизнь пополнится еще одной радостью!";
    } else if (predictionRandom == 4) {
        predictionText = "Получишь хорошую новость!";
    } else if (predictionRandom == 5) {
        predictionText = "Тебя ожидают приятные хлопоты!";
    } else {
        predictionText = "Кто-то поделиться с тобой позитивом!";
    };

    currentForecastPrediction.textContent = predictionText; //

    let predictionPercent = getRandom(1, 101);

    let predictionPercentText = `Вероятность исполнения предсказания ${predictionPercent}%.`;

    currentForecastPercend.textContent = predictionPercentText; //

    forecastBtn.addEventListener('click', function() {
        const oldPrediction = insertMyPredictions(predictionText, predictionPercentText);
        myPredictionContainer.prepend(oldPrediction);
    });
});
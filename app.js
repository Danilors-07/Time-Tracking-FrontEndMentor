// Setting active status - day, month, week
const day = document.getElementById("day");
const week = document.getElementById("week");
const month = document.getElementById("month");
const title = document.querySelectorAll(".title")

// Get text element to setup
const insideContent = document.querySelectorAll(".activities-Text")
let insideContentArr = Array.from(insideContent)
getJsonDay()


// Setting buttons
day.addEventListener("click", function () {
    this.classList.add("active");
    month.classList.remove("active");
    week.classList.remove("active");

    getJsonDay()
});

week.addEventListener("click", function () {

    week.classList.add("active");
    month.classList.remove("active");
    day.classList.remove("active");

    getJsonDay()
});

month.addEventListener("click", function () {
    this.classList.add("active");
    day.classList.remove("active");
    week.classList.remove("active");

    getJsonDay()
});


// Get local json data
function getJsonDay() {
    fetch('data.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {

            if (day.classList.contains("active")) {
                dayData(data);

            } else if (week.classList.contains("active")) {
                weekData(data);
            } else if (month.classList.contains("active")) {
                monthData(data);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}



// setting day, week and year info
function dayData(data) {

    let count = 0;
    data.forEach(element => {
        insideContentArr[count].innerHTML = `<div class="title">
                 <p>${element.title}</p>
                </div>
                <h1>${element.timeframes.daily.current}hrs</h1>
                <small> Yesterday - ${element.timeframes.daily.previous}hr</small>
            </div>`

        count++;
    });
};

function weekData(data) {

    let count = 0;
    data.forEach(element => {
        insideContentArr[count].innerHTML = `<div class="title">
                 <p>${element.title}</p>
                </div>
                <h1>${element.timeframes.weekly.current}hrs</h1>
                <small> Last Week - ${element.timeframes.weekly.previous}hr</small>
            </div>`

        count++;
    });
};

function monthData(data) {

    let count = 0;
    data.forEach(element => {
        insideContentArr[count].innerHTML = `<div class="title">
                 <p>${element.title}</p>
                </div>
                <h1>${element.timeframes.monthly.current}hrs</h1>
                <small> Last Month - ${element.timeframes.monthly.previous}hr</small>
            </div>`

        count++;
    });
};


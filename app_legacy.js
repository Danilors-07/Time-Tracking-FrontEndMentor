// const more = document.querySelector('.more');

// more.addEventListener('onmouseover', function () {
//     console.log(this.parentElement.parentElement);
//     this.parentElement.parentElement.style.backgroundColor = "blue";
// })

// Setting active status - day, month, week
const day = document.getElementById("day");
const week = document.getElementById("week");
const month = document.getElementById("month");
const title = document.querySelectorAll(".title")

week.addEventListener("click", function () {

    week.classList.add("active");
    month.classList.remove("active");
    day.classList.remove("active");

});


day.addEventListener("click", function () {
    this.classList.add("active");
    month.classList.remove("active");
    week.classList.remove("active");

    dayAct();
});

month.addEventListener("click", function () {
    this.classList.add("active");
    day.classList.remove("active");
    week.classList.remove("active");
});


// Get local json data
function getJsonDay() {
    fetch('data.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);

            let titleArt = [];
            data.forEach(e => {
                console.log(e.title);
                titleArt.push(`<p>${e.title}</p>`);

            });

            // console.log(titleArt);
            title.forEach(function (element) {
                let count = 2
                console.log(element);
                element.innerHTML = titleArt[count];
                count = count + 1;
                console.log(count);
            })

            // let output = '';
            // data.forEach(function (post) {
            //     output += `< li > ${ post.title }</li > `;
            // });
            // document.getElementById('output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        })
}

getJsonDay()


function dayAct() {
    getJsonDay()
}
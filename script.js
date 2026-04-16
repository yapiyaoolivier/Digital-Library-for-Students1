
/* =========================
   FADE IN GLOBAL (PAGE LOAD)
========================= */
document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "0";
    document.body.style.transform = "translateY(10px)";
    document.body.style.transition = "all 0.6s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
        document.body.style.transform = "translateY(0)";
    }, 100);

});


/* =========================
   LOGIN → HOME ANIMATION
========================= */
function login(event) {
    event.preventDefault();

    document.body.style.transition = "all 0.5s ease";
    document.body.style.opacity = "0";
    document.body.style.transform = "scale(0.95)";

    setTimeout(() => {
        window.location.href = "home.html";
    }, 500);
}


/* =========================
   SIGNUP → LOGIN ANIMATION
========================= */
function signup(event) {
    event.preventDefault();

    document.body.style.transition = "all 0.5s ease";
    document.body.style.opacity = "0";
    document.body.style.transform = "translateX(-20px)";

    setTimeout(() => {
        window.location.href = "login.html";
    }, 500);
}


/* =========================
   BOOKS ANIMATION (SCROLL EFFECT)
========================= */
document.addEventListener("DOMContentLoaded", () => {

    const books = document.querySelectorAll(".book");

    books.forEach((book, index) => {

        book.style.opacity = "0";
        book.style.transform = "translateY(30px)";
        book.style.transition = "all 0.5s ease";

        setTimeout(() => {
            book.style.opacity = "1";
            book.style.transform = "translateY(0)";
        }, index * 150);

    });

});


/* =========================
   SEARCH ANIMATION
========================= */
document.addEventListener("DOMContentLoaded", () => {

    const search = document.getElementById("searchInput");

    if (search) {

        search.addEventListener("input", function () {

            let value = this.value.toLowerCase();
            let books = document.querySelectorAll(".book");

            books.forEach(book => {

                let title = book.querySelector("h3").innerText.toLowerCase();

                if (title.includes(value)) {

                    book.style.display = "block";
                    book.style.opacity = "0";
                    book.style.transform = "scale(0.9)";

                    setTimeout(() => {
                        book.style.transition = "all 0.4s ease";
                        book.style.opacity = "1";
                        book.style.transform = "scale(1)";
                    }, 50);

                } else {
                    book.style.display = "none";
                }

            });

        });

    }

});


/* =========================
   CATEGORY ANIMATION
========================= */
function filterCategory(category) {

    let books = document.querySelectorAll(".book");

    books.forEach((book, i) => {

        if (category === "all" || book.dataset.category === category) {

            book.style.display = "block";
            book.style.opacity = "0";
            book.style.transform = "translateY(20px) scale(0.95)";

            setTimeout(() => {
                book.style.transition = "all 0.4s ease";
                book.style.opacity = "1";
                book.style.transform = "translateY(0) scale(1)";
            }, i * 80);

        } else {
            book.style.display = "none";
        }

    });

}


/* =========================
   HOVER EFFECT
========================= */
document.addEventListener("mouseover", (e) => {

    let book = e.target.closest(".book");

    if (book) {
        book.style.transform = "scale(1.05)";
        book.style.transition = "0.3s ease";
    }

});

document.addEventListener("mouseout", (e) => {

    let book = e.target.closest(".book");

    if (book) {
        book.style.transform = "scale(1)";
    }

});
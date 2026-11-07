let mysection = document.querySelectorAll(".section span");

let upp = document.querySelector(".upside");

window.onscroll = function () {
    if(window.scrollY >= 500) {
        upp.style.display = "flex";
    } else {
        upp.style.display = "none";
    }

    if(window.scrollY <= 570){
        mysection.forEach(lis => {
            lis.classList.remove("active");
        });
        document.querySelector(`[data-numb = "1"]`).classList.add("active");
    } else if (window.scrollY <= 1649) {
        mysection.forEach(lis => {
            lis.classList.remove("active");
        });
        document.querySelector(`[data-numb = "2"]`).classList.add("active");
    } else if (window.scrollY <= 2199) {
        mysection.forEach(lis => {
            lis.classList.remove("active");
        });
        document.querySelector(`[data-numb = "3"]`).classList.add("active");
    } else if (window.scrollY <= 2299) {
        mysection.forEach(lis => {
            lis.classList.remove("active");
        });
        document.querySelector(`[data-numb = "4"]`).classList.add("active");
    } else if (window.scrollY <=2400) {
        mysection.forEach(lis => {
            lis.classList.remove("active");
        });
        document.querySelector(`[data-numb = "5"]`).classList.add("active");
    }
}

upp.onclick = function () {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
    upp.style.display = "none";
}

mysection.forEach(el => {
    el.addEventListener("click" ,  (ll) => {
        mysection.forEach(lis => {
            lis.classList.remove("active");
        });

        ll.currentTarget.classList.add("active");

        if(ll.currentTarget.dataset.numb == "1") {
            window.scrollTo({
                top:0,
                left:0,
                behavior:"smooth"
            });
        } else if (ll.currentTarget.dataset.numb == "2") {
            window.scrollTo({
                top:575,
                left:0,
                behavior:"smooth"
            });
        } else if (ll.currentTarget.dataset.numb == "3") {
            window.scrollTo({
                top:1655,
                left:0,
                behavior:"smooth"
            });
        } else if (ll.currentTarget.dataset.numb == "4") {
            window.scrollTo({
                top:2205,
                left:0,
                behavior:"smooth"
            });
        } else if (ll.currentTarget.dataset.numb == "5") {
            window.scrollTo({
                top:2304,
                left:0,
                behavior:"smooth"
            });
        }

    });
});


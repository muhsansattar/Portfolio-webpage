
var sliderDiv = document.getElementById("slider");
var slidebar = document.getElementById("slidebar");
sliderDiv.addEventListener("click", function() {
    if (slidebar.classList.contains("d-none")) {
        slidebar.classList.remove("d-none");
    } else {
        slidebar.classList.add("d-none");
    }
});

var lightmode = document.querySelector(".lightmode")
var darkmode = document.querySelector(".darkmode")
var page1357 = document.querySelectorAll(".page1, .page3, .page5 , .page7");
var page246 = document.querySelectorAll(".page2, .page4, .page6, footer ");
function modeswitch(){
    lightmode.addEventListener("click",function(){
        lightmode.classList.add("d-none");
        darkmode.classList.remove("d-none");
        document.querySelector(".port").classList.add("text-white");
        document.querySelector(".port").classList.remove("text-black");
        page1357.forEach(function(page) {
            page.classList.remove("white")
            page.classList.add("bg-black")
            slidebar.classList.add("bg-black")
            slidebar.classList.remove("bg-white")
            var paragraphs = page.querySelectorAll("p");
            paragraphs.forEach(function(paragraph) {
                paragraph.style.color = "white";
            });
        });
        document.querySelectorAll("a").forEach(function(a){
            a.style.color= "white";
        })
        page246.forEach(function(page) {
            page.classList.remove("bg-offwhite")
            page.classList.add("offblack")
            var paragraphs = page.querySelectorAll("p");
            paragraphs.forEach(function(paragraph) {
                // paragraph.classList.remove("gray")
                paragraph.classList.remove("text-black")
                paragraph.classList.add("text-white")
            });
            document.querySelectorAll("button").forEach(function(butn) {
                butn.classList.add("bg-white");
                butn.classList.remove("text-white");
            });
            var pbut =document.querySelectorAll(".pbut")
            pbut.forEach(function(pbut){
                pbut.classList.remove("bg-gray-900")
                pbut.classList.add("darkmodepbut")
            })

            var carts =document.querySelectorAll(".carts")
            carts.forEach(function(carts){
                carts.classList.add("darkmodepbut")
            })

            var cards =document.querySelectorAll(".cards")
            cards.forEach(function(cards){
                cards.classList.remove("bg-white")
                cards.classList.add("darkmodepbut")
            })
        });
    })
    
    darkmode.addEventListener("click",function(){
        darkmode.classList.add("d-none");
        lightmode.classList.remove("d-none");
        document.querySelector(".port").classList.remove("text-white");
        document.querySelector(".port").classList.add("text-black");
        page1357.forEach(function(page) {
            page.classList.add("white");
            page.classList.remove("bg-black");
            slidebar.classList.add("bg-white")
            slidebar.classList.remove("bg-black")
            var paragraphs = page.querySelectorAll("p");
            paragraphs.forEach(function(paragraph) {
                paragraph.style.color = ""; // Reset to default color
            });
        });
        document.querySelectorAll("a").forEach(function(a){
            a.style.color= "gray";
        })
        page246.forEach(function(page) {
            page.classList.add("bg-offwhite");
            page.classList.remove("offblack");
            var paragraphs = page.querySelectorAll("p");
            paragraphs.forEach(function(paragraph) {
                paragraph.classList.remove("text-white");
                paragraph.classList.add("text-black");
            });
            document.querySelector("button").classList.remove("bg-white");
            document.querySelector("button").classList.add("text-white");
            var pbut = document.querySelectorAll(".pbut");
            pbut.forEach(function(pbut) {
                pbut.classList.add("bg-gray-900");
                pbut.classList.remove("darkmodepbut");
            });

            var carts = document.querySelectorAll(".carts");
            carts.forEach(function(carts) {
                carts.classList.remove("darkmodepbut");
            });

            var cards = document.querySelectorAll(".cards");
            cards.forEach(function(cards) {
                cards.classList.add("bg-white");
                cards.classList.remove("darkmodepbut");
            });
        });
    })
}

modeswitch();




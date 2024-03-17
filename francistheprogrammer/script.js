const hamBurger = document.querySelector(".hamburger");
const closeNav = document.querySelector(".close");
const navMenu = document.querySelector(".nav-list");
const accordionItem = document.querySelectorAll(".jinga").length;
const accordionItem2 = document.querySelectorAll(".jinga2").length;
const lgService = document.querySelectorAll(".lg-service").length;
const aboutList = document.querySelector(".about-list");
const projectList = document.querySelector(".project-list");


hamBurger.addEventListener("click", () => {
    console.log("check")
     const visiblity = navMenu.getAttribute("data-visible");
    if (visiblity === "false") {
        navMenu.setAttribute("data-visible", true);
    }
});

closeNav.addEventListener("click", () => {
    console.log("check")
     const visiblity = navMenu.getAttribute("data-visible");
    if (visiblity === "true") {
        navMenu.setAttribute("data-visible", false);
    }
});

aboutList.addEventListener("click", () => {
    console.log("check")
     const visiblity = navMenu.getAttribute("data-visible");
    if (visiblity === "true") {
        navMenu.setAttribute("data-visible", false);
    }
});

projectList.addEventListener("click", () => {
    console.log("check")
     const visiblity = navMenu.getAttribute("data-visible");
    if (visiblity === "true") {
        navMenu.setAttribute("data-visible", false);
    }
});

for (var i = 0; i< accordionItem; i++) {
    const accordionItem = document.querySelectorAll(".jinga")[i];
    var accordionContainer = accordionItem.lastElementChild;
    accordionItem.addEventListener("click", () => {
        var accordionContainer = accordionItem.lastElementChild;
        const visibilty = accordionContainer.getAttribute("data-visible");
        if(visibilty === "true") {
            accordionContainer.setAttribute("data-visible", false);
            accordionContainer.classList.add("remove");
        }else if(visibilty === "false") {
            accordionItem.lastElementChild.setAttribute("data-visible", true);
            accordionContainer.classList.remove("remove");
        }
    });
}

for (var i = 0; i< accordionItem2; i++) {
    const accordionItem2 = document.querySelectorAll(".jinga2")[i];
    var accordionContainer = accordionItem2.lastElementChild;
    accordionItem2.addEventListener("click", () => {
        var accordionContainer = accordionItem2.lastElementChild;
        const visibilty = accordionContainer.getAttribute("data-visible");
        if(visibilty === "true") {
            accordionContainer.setAttribute("data-visible", false);
        }else if(visibilty === "false") {
            accordionItem2.lastElementChild.setAttribute("data-visible", true);
        }
    });
}

for (var i = 0; i< lgService; i++) {
    const lgService = document.querySelectorAll(".lg-service")[i];
    const lgserviceContainer = lgService.lastElementChild.firstElementChild.lastElementChild;
    lgService.addEventListener("click", () => {
        const lgserviceContainer = lgService.lastElementChild.firstElementChild.lastElementChild;
        const lgserviceContainer2 = lgService.lastElementChild.lastElementChild.lastElementChild;
        console.log(lgserviceContainer)
        console.log(lgserviceContainer2)
        const visibilty = lgserviceContainer.getAttribute("data-visible");
        const visiblity = lgserviceContainer2.getAttribute("data-visible");
        if(visibilty  && visiblity === "true") {
            lgserviceContainer.setAttribute("data-visible", false);
            lgserviceContainer2.setAttribute("data-visible", false);
        }else if(visibilty  && visiblity === "false") {
            lgserviceContainer.setAttribute("data-visible", true);
            lgserviceContainer2.setAttribute("data-visible", true);
        }
    });
}

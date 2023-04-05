const progressBar = document.querySelector(".progress-bar");
let heightLimit;

// Scroll event listener
window.addEventListener("scroll", event => {

    const curPos = window.scrollY;
    const curPercentage = Math.round( curPos / heightLimit * 100) ;

    progressBar.style.width = curPercentage + "%";

})

// Resize event listener
window.addEventListener("resize", event => {
    const body = document.body;
    heightLimit = body.scrollHeight - window.innerHeight;
})

// Trigger resize event on page laod
window.dispatchEvent(new Event("resize"));

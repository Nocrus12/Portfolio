// Show/hide "Go Up" button on scroll
window.onscroll = function() {
    let goUpBtn = document.getElementById("goUpBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goUpBtn.style.display = "block";
    } else {
        goUpBtn.style.display = "none";
    }
};

// Scroll to top when clicking the button
document.getElementById("goUpBtn").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

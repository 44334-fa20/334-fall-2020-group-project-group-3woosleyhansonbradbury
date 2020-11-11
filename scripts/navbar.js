function openNavbar() {
    document.getElementById("navbar").style.width = "40%";
    document.getElementById("navbaropen-btn").style.display = "none";
    document.getElementById("navbarclose-btn").style.display = "block";
    var navItems = [];
    navItems = document.getElementById("navbar").getElementsByTagName("li");
    for(i = 0; i < navItems.length; i++) {
        navItems[i].style.display = "block";
    }
}

function closeNavbar() {
    document.getElementById("navbar").style.width = "0px";
    document.getElementById("navbaropen-btn").style.display = "block";
    document.getElementById("navbarclose-btn").style.display = "none";
    var navItems = [];
    navItems = document.getElementById("navbar").getElementsByTagName("li");
    for(i = 0; i < navItems.length; i++) {
        navItems[i].style.display = "none";
    }
}
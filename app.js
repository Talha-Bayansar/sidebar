// queryselectors
const hamburgerBtn = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");

// constants


// variables


//functions
const sidebarclicked = () => {
    sidebar.classList.toggle("active");
}

const closeClicked = () => {
    sidebar.classList.remove("active");
}

//eventlisteners
hamburgerBtn.addEventListener("click", sidebarclicked);
closeBtn.addEventListener("click", closeClicked);
function openMenu() {
    const sidebar = document.getElementById("sidebar");
    const toggleBtnIcon = sidebar.querySelector(".toggle-btn i");
    sidebar.classList.toggle("active");

    if (sidebar.classList.contains("active")) {
        toggleBtnIcon.classList.remove("bi-arrow-bar-right");
        toggleBtnIcon.classList.add("bi-arrow-bar-left");
    } else {
        toggleBtnIcon.classList.remove("bi-arrow-bar-left");
        toggleBtnIcon.classList.add("bi-arrow-bar-right");
    }
}
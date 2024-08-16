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

 document.addEventListener("DOMContentLoaded", function() {
        const searchForm = document.getElementById("search-form1");
        const searchInput = document.getElementById("search-form");
        const suggestionsBox = document.getElementById("suggestions-box");

        searchInput.addEventListener("input", function() {
            const query = searchInput.value;

            if (query.length > 2) {
                fetch(`/autocomplete/?q=${encodeURIComponent(query)}`)
                    .then(response => response.json())
                    .then(data => {
                        suggestionsBox.innerHTML = "";
                        data.forEach(item => {
                            const suggestion = document.createElement("div");
                            suggestion.textContent = item;
                            suggestionsBox.appendChild(suggestion);
                        });
                    });
            } else {
                suggestionsBox.innerHTML = "";
            }
        });

        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
            window.location.href = `/search/?q=${encodeURIComponent(searchInput.value)}`;
        });
    });
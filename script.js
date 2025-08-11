// Equipment Search
document.getElementById("searchBar").addEventListener("keyup", function() {
    let searchValue = this.value.toLowerCase();
    let items = document.querySelectorAll(".equipment-card");

    items.forEach(item => {
        let name = item.getAttribute("data-name").toLowerCase();
        item.style.display = name.includes(searchValue) ? "block" : "none";
    });
});

// Booking Form Alert
document.querySelector(".booking form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Booking request submitted successfully!");
    this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const filters = document.getElementById("releaseFilters");
    const grid = document.getElementById("allReleases");

    if (!filters || !grid) return;

    const categories = ["All"];
    RELEASES.forEach(function (release) {
        if (!categories.includes(release.category)) categories.push(release.category);
    });

    categories.forEach(function (category, index) {
        const button = document.createElement("button");
        button.className = "filter" + (index === 0 ? " active" : "");
        button.textContent = category;
        button.addEventListener("click", function () {
            document.querySelectorAll(".filter").forEach(function (item) {
                item.classList.remove("active");
            });
            button.classList.add("active");
            renderReleases(category);
        });
        filters.appendChild(button);
    });

    renderReleases("All");

    function renderReleases(category) {
        grid.innerHTML = "";
        RELEASES.forEach(function (release, index) {
            if (category !== "All" && release.category !== category) return;

            const card = document.createElement("article");
            card.className = "release-card";
            card.innerHTML = `
                <div class="card-top">
                    <span class="status">${release.status}</span>
                    <span>0${index + 1}</span>
                </div>
                <div class="game-badge">FF</div>
                <h3>${release.title}</h3>
                <p>${release.description}</p>
                <div class="card-bottom">
                    <span>${release.category}</span>
                    <a href="release.html?id=${release.id}">Get Mod →</a>
                </div>
            `;
            grid.appendChild(card);
        });
    }
});
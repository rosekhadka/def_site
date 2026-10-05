document.addEventListener("DOMContentLoaded", function () {
    renderHeroStats();
    renderFeatured();
    renderGames();
});

function renderHeroStats() {
    const target = document.getElementById("heroStats");
    if (!target) return;

    SITE.heroStats.forEach(function (stat) {
        target.innerHTML += `
            <div>
                <strong>${stat[0]}</strong>
                <span>${stat[1]}</span>
            </div>
        `;
    });
}

function renderFeatured() {
    const target = document.getElementById("featuredReleases");
    if (!target) return;

    RELEASES.slice(0, 3).forEach(function (release, index) {
        target.innerHTML += releaseCard(release, index + 1);
    });
}

function renderGames() {
    const target = document.getElementById("gameList");
    if (!target) return;

    GAMES.forEach(function (game) {
        target.innerHTML += `
            <div class="game-row reveal">
                <span class="game-number">${game[0]}</span>
                <strong>${game[1]}</strong>
                <span>${game[2]}</span>
                <b>→</b>
            </div>
        `;
    });
}

function releaseCard(release, number) {
    return `
        <article class="release-card reveal">
            <div class="card-top">
                <span class="status">${release.status}</span>
                <span>0${number}</span>
            </div>
            <div class="game-badge">FF</div>
            <h3>${release.title}</h3>
            <p>${release.description}</p>
            <div class="card-bottom">
                <span>${release.category}</span>
                <a href="pages/release.html?id=${release.id}">Get Mod →</a>
            </div>
        </article>
    `;
}
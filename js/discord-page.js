document.addEventListener("DOMContentLoaded", function () {
    const target = document.getElementById("discordStats");
    if (!target) return;

    SITE.discordStats.forEach(function (stat) {
        target.innerHTML += `
            <div>
                <strong>${stat[0]}</strong>
                <span>${stat[1]}</span>
            </div>
        `;
    });
});
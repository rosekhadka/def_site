document.addEventListener("DOMContentLoaded", function () {
    const target = document.getElementById("releaseDetail");
    if (!target) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || RELEASES[0].id;

    const release = RELEASES.find(function (item) {
        return item.id === id;
    }) || RELEASES[0];

    document.title = release.title + " — Define Aura";

    let features = "";
    release.features.forEach(function (feature) {
        features += `<div class="feature">✓ ${feature}</div>`;
    });

    target.innerHTML = `
        <small>${release.game} / ${release.status}</small>
        <h1>${release.title.replace(" ", " <b>")}</b></h1>
        <p>${release.description}</p>

        <div class="facts">
            <div><small>Version</small><strong>${release.version}</strong></div>
            <div><small>Status</small><strong>${release.status}</strong></div>
            <div><small>Updated</small><strong>${release.updated}</strong></div>
        </div>

        <h2>Release <b>information.</b></h2>
        <div class="feature-grid">${features}</div>

        <a class="button button-red" href="discord.html">Get support on Discord ↗</a>
    `;
});
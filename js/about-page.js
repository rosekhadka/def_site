document.addEventListener("DOMContentLoaded", function () {
    const target = document.getElementById("aboutPoints");
    if (!target) return;

    SITE.aboutPoints.forEach(function (point) {
        target.innerHTML += `
            <div class="about-point">
                <strong>${point[0]}</strong>
                <span>${point[1]}</span>
            </div>
        `;
    });
});

document.addEventListener("DOMContentLoaded", () => {

    // Download page button
    const downloadButton = document.getElementById("downloadButton");

    if (downloadButton) {

        downloadButton.addEventListener("click", () => {

            window.location.href = "download.html";

        });

    }

});

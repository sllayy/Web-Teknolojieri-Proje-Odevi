// Anasayfa linkine tıklama olayını dinle
document.querySelector('.navbar-brand').addEventListener('click', function(event) {
    // Sayfanın yeniden yüklenmesini sağla
    window.location.reload();
});

// Gece modu özelliğini kontrol etmek için bir fonksiyon
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    // Gece modunu yerel depolamaya kaydetme
    var darkModeEnabled = element.classList.contains("dark-mode");
    localStorage.setItem("darkMode", darkModeEnabled ? "enabled" : "disabled");
}

// Sayfa yüklendiğinde gece modunu kontrol etme
document.addEventListener("DOMContentLoaded", function() {
    var darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
    }
});

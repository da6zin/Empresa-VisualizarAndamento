var homeUrl = "https://da6zin.github.io/Fortes-Engenharia---Empresa/"; // Substitua pelo site desejado
document.getElementById('home-icon').onclick = function() {
    window.location.href = homeUrl;
};

document.getElementById('menu-button').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '250px';
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.width = '0';
});
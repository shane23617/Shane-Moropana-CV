window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 1000); // 1-second delay before hiding preloader
});
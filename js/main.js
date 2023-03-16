const btnDarkMode = document.querySelector('.dark-mode-btn');

// dark mode in localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add("dark");
} 

// audit system settigs windows (dark mode)
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add("dark");
}


// change dark/light mode
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if(isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem("darkMode", "light");
    }




};
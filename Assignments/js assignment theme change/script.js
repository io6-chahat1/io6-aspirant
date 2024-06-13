console.log("hello");

// Get the theme button element
const themeBtn = document.getElementById('theme-btn');

// Add event listener to the theme button
themeBtn.addEventListener('click', handleTheme);

// Initialize the theme state
let isThemeClicked = false;

// Function to handle theme toggling
function handleTheme() {
    // Toggle the theme state
    isThemeClicked = !isThemeClicked;

    // Get the elements whose styles need to be changed
    const body = document.body;
    const loginform = document.getElementById('login-form');
    const headingscontainer = document.getElementById('headingscontainer');
    const maincontainer = document.getElementById('maincontainer');
    const subcontainer = document.getElementById('subcontainer');

    // Apply different styles based on the theme state
    if (isThemeClicked) {
        body.style.backgroundColor = 'lightgrey';
        loginform.style.backgroundColor = 'hsl(217, 90%, 36%)';
        headingscontainer.style.backgroundColor = 'rgb(20, 17, 17)';
        maincontainer.style.backgroundColor = 'hsl(217, 90%, 36%)';
        subcontainer.style.backgroundColor = 'hsl(217, 90%, 36%)';
    } else {
        body.style.backgroundColor = '#fff';
        loginform.style.backgroundColor = 'white';
        headingscontainer.style.backgroundColor = 'white';
        maincontainer.style.backgroundColor = 'yellow';
        subcontainer.style.backgroundColor = 'yellow';
    }
}

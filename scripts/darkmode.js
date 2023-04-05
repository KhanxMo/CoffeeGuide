const darkModeButton = document.querySelector(".darkModeButton");
const storedTheme = localStorage.getItem('theme');

if (storedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkModeButton.classList.remove("light");
    darkModeButton.classList.add("dark");
} else {
    document.documentElement.removeAttribute('data-theme');
    darkModeButton.classList.remove("dark");
    darkModeButton.classList.add("light");
}

if(darkModeButton != null){

    darkModeButton.addEventListener("click", event => {

        // const icon = event.currentTarget.querySelector("i");

        // If the site is in dark mode
        if(darkModeButton.classList.contains("dark")){

            // Update local storage 
            localStorage.setItem('theme', 'light');

            // Change Button 
            darkModeButton.classList.remove("dark");
            darkModeButton.classList.add("light");

            // Update document styling
            document.documentElement.setAttribute("data-theme", "light");
        }
        
        else{

            localStorage.setItem('theme', 'dark');

            darkModeButton.classList.remove("light");
            darkModeButton.classList.add("dark");

            document.documentElement.setAttribute("data-theme", "dark");

        }

    })

}

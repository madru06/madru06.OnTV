let page = document.getElementById("page_name").innerText;
console.log("page");
let color = "";
let nav_indicator = `id="current_page"`;
let main_menu = document.getElementById("main_menu");

main_menu.innerHTML = "";

switch(page.toLocaleUpperCase()){
    case "COMEDY":
        main_menu.innerHTML = `
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li ${nav_indicator}><a href="comedia.html">Comedy</a></li>
                <li><a href="drama.html">Drama</a></li>
                <li><a href="scifi.html">Sci-Fi</a></li>
                <li><a href="thriller.html">Suspense</a></li>
            </ul>
        `;
        break;

    case "SCIFI":
        main_menu.innerHTML = `
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="comedia.html">Comedy</a></li>
                <li><a href="drama.html">Drama</a></li>
                <li ${nav_indicator}><a href="scifi.html">Sci-Fi</a></li>
                <li><a href="thriller.html">Suspense</a></li>
            </ul>
        `;
        break;

    case "DRAMA":
        main_menu.innerHTML = `
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="comedia.html">Comedy</a></li>
                <li ${nav_indicator}><a href="drama.html">Drama</a></li>
                <li><a href="scifi.html">Sci-Fi</a></li>
                <li><a href="thriller.html">Suspense</a></li>
            </ul>
        `;
        break;

    case "SUSPENSE":
        main_menu.innerHTML = `
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="comedia.html">Comedy</a></li>
                <li><a href="drama.html">Drama</a></li>
                <li><a href="scifi.html">Sci-Fi</a></li>
                <li ${nav_indicator}><a href="thriller.html">Suspense</a></li>
            </ul>
        `;
        break;
}



const genres = ["Non Fiction", "Fiction", "Science Fiction", "Novel", "Narrative", "Mystery", "Adventure", "Sci-Fi", "Horror"]

shelves = []

const shelfHTML = document.querySelector(".shelves");
function render_books() {
    let bookTemplate = shelves.map((b) =>
        `
        <div class = "section" style = "background-color: ${b.color};">
            <h2> ${b.name} </h2>
            <a href = ${b.link}> <img src = ${b.image}></img></a>
            <h3> by ${b.author} </h3>
            <h3> ${genres[b.genre]} </h3>
            <h3> ${b.publish} </h3>
        </div>
        `  
    );

    shelfHTML.innerHTML = bookTemplate;
}

fetch('Books.json')
    .then((response) => response.json())
    .then((json) => {
        shelves = json.books;
        render_books();
    })
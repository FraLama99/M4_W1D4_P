

let fetchMusic = (query, id) => {
    let row = document.getElementById(`found`)

    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query)
        .then((row) => row.json())
        .then((res) => {
            let music = res.data;
            let content = `<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2">`;

            music.forEach(track => {
                content += `
                            <div class="col mb-4">
                                <div class="card h-100 text-center">
                                    <img src="${track.album.cover_xl}" class="card-img-top img-fluid mx-auto" alt="${track.title}" />
                                    <div class="card-body">
                                        <h5 class="card-title">${track.title}</h5>
                                        <p class="card-text">${track.artist.name}</p>
                                        <a href="${track.link}" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        `;
            });

            content += '</div>';
            row.innerHTML = content;
        })
        .catch((err) => {
            console.log(err)
        })
}
let search = () => {
    let ricerca = document.getElementById("searchField").value;
    fetchMusic(ricerca);

}


document.getElementById("searchField").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        search();

    }
});//serve per fare la ricrca con invio


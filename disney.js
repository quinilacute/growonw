document.addEventListener("DOMContentLoaded", function() {
    const recommendedMovies = [
        { title: "Movie 1", image: "images/rem1.jpg" },
        { title: "Movie 2", image: "images/rem2.jpg" },
        { title: "Movie 3", image: "images/rem3.jpg" },
        { title: "Movie 4", image: "images/rem4.jpg" },
    ];

    const latestMovies = [
        { title: "Movie 1", image: "images/lat1.jpg" },
        { title: "Movie 2", image: "images/lat2.jpg" },
        { title: "Movie 3", image: "images/lat3.jpg" },
        { title: "Movie 4", image: "images/lat4.jpg" },
    ];

    const trendingMovies = [
        { title: "Movie 1", image: "images/tren1.jpg" },
        { title: "Movie 2", image: "images/tren2.jpg" },
        { title: "Movie 3", image: "images/tren3.jpg" },
        { title: "Movie 4", image: "images/tren4.jpg" },
    ];

    const sections = [
        { movies: recommendedMovies, selector: ".recommended .movie-grid" },
        { movies: latestMovies, selector: ".latest .movie-grid" },
        { movies: trendingMovies, selector: ".trending .movie-grid" },
    ];

    sections.forEach(section => {
        const movieGrid = document.querySelector(section.selector);
        section.movies.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");

            const movieImage = document.createElement("img");
            movieImage.src = movie.image;
            movieImage.alt = movie.title;

            const movieTitle = document.createElement("h3");
            movieTitle.textContent = movie.title;

            movieCard.appendChild(movieImage);
            movieCard.appendChild(movieTitle);

            movieGrid.appendChild(movieCard);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = document.querySelectorAll('.background');
    let currentIndex = 0;

    function showNextBackground() {
        backgrounds.forEach((bg, index) => {
            bg.classList.remove('active');
            if (index === currentIndex) {
                bg.classList.add('active');
            }
        });
        currentIndex = (currentIndex + 1) % backgrounds.length;
    }

    showNextBackground();
    setInterval(showNextBackground, 5000);
});

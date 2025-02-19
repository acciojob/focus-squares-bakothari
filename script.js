window.onload = function () {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("mouseenter", function () {
            squares.forEach(sq => {
                if (sq !== this) {
                    sq.style.backgroundColor = "rgb(111, 78, 55)"; // Coffee color
                }
            });
        });

        square.addEventListener("mouseleave", function () {
            squares.forEach(sq => {
                sq.style.backgroundColor = "rgb(230, 230, 250)"; // Lavender color
            });
        });
    });
};

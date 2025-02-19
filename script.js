//your JS code here. If required.
document.querySelectorAll(".square").forEach(square => {
    square.addEventListener("mouseenter", function () {
        document.querySelectorAll(".square").forEach(sq => {
            if (sq !== this) {
                sq.style.backgroundColor = "rgb(111, 78, 55)"; 
            }
        });
    });

    square.addEventListener("mouseleave", function () {
        document.querySelectorAll(".square").forEach(sq => {
            sq.style.backgroundColor = "#E6E6FA"; 
        });
    });
});
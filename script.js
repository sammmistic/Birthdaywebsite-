/* =========================================
   REVEAL ANIMATIONS
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );
                }
            });

        },
        {
            threshold: 0.15
        }
    );

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE SECTION
========================================= */

const pages =
    document.querySelectorAll(".page");

const pageObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    pages.forEach((page) => {

                        page.classList.remove(
                            "active"
                        );

                    });

                    entry.target.classList.add(
                        "active"
                    );
                }

            });

        },
        {
            threshold: 0.45
        }
    );


pages.forEach((page) => {

    pageObserver.observe(page);

});


/* =========================================
   CONFETTI
========================================= */

let confettiShown = false;

const ending =
    document.querySelector(".ending");


if (ending) {

    const endingObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting &&
                        !confettiShown
                    ) {

                        confettiShown = true;

                        startConfetti();
                    }

                });

            },
            {
                threshold: 0.5
            }
        );

    endingObserver.observe(ending);
}


function startConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add(
            "confetti"
        );

        confetti.innerHTML = "🎉";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            Math.random() * 3 + 3 + "s";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(
            confetti
        );

        setTimeout(() => {

            confetti.remove();

        }, 7000);
    }
}
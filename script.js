// Select all matching elements
// Select all buttons with the class 'naxtprev-btn'
const pageTurnBtns = document.querySelectorAll('.naxtprev-btn');

// Iterate through each button and add a click event listener
pageTurnBtns.forEach((button, index) => {
    button.onclick = () => {
        // Get the ID of the target element from the 'data-page' attribute
        const pageTurnId = button.getAttribute('data-page');
        const pageTurnElement = document.getElementById(pageTurnId); // Find the element with that ID

        // Proceed only if the target element exists
        if (pageTurnElement) {
            const isTurned = pageTurnElement.classList.contains('turn'); // Check if the 'turn' class is present

            // Toggle the 'turn' class
            pageTurnElement.classList.toggle('turn');

            // Adjust the zIndex after the animation completes (500ms delay)
            setTimeout(() => {
                pageTurnElement.style.zIndex = isTurned
                    ? 20 - index // Decrease zIndex when removing the 'turn' class
                    : 20 + index; // Increase zIndex when adding the 'turn' class
            }, 500);
        } else {
            console.warn(`Element with ID "${pageTurnId}" not found.`);
        }
    };
});


const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);

        }, (index + 1) * 200 + 100);
    });
};

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                pages[pageNumber].style.zIndex = 10 + index; // Corrected zIndex adjustment
            }, 500);

        }, (index + 1) * 200 + 100);
    });
};
const coverRight = document.querySelector('.cover.cover-right');
const pageleft = document.querySelector('.book-page.page-left');

setTimeout(() => {
    coverRight.classList.add('turn');
},2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
},2800)
//  opening Animation ( page left or profile page animation)
setTimeout(() => {
    pageleft.style.zIndex = 20;
},3200)


//  opening Animation (all page right page)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            pages[pageNumber].style.zIndex = 10 + index; // Corrected zIndex adjustment
        }, 500);

    }, (index + 1) * 200 + 2100);
});
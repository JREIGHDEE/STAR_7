document.addEventListener('DOMContentLoaded', () => {

    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const mainGreeting = document.getElementById('main-greeting');
    const flowers = document.querySelectorAll('.flower-container');
    const modal = document.getElementById('letter-modal');
    const modalTitle = document.getElementById('letter-title');
    const modalBody = document.getElementById('letter-body');
    const closeButton = document.querySelector('.close-button');

    let firstLetterRead = false;
    let defaultGreeting = "Happy 8th! pick a flower!";

    // --- Initial Animation ---
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'flex';
    }, 4000); // Duration of the splash screen animation

    // --- Flower Interaction ---
    flowers.forEach(flower => {
        // Show entry title on hover
        flower.addEventListener('mouseover', () => {
            const title = flower.getAttribute('data-title');
            mainGreeting.style.opacity = '0';
            setTimeout(() => {
                mainGreeting.textContent = title;
                mainGreeting.style.opacity = '1';
            }, 300);
        });

        // Return to default greeting on mouse out
        flower.addEventListener('mouseout', () => {
            mainGreeting.style.opacity = '0';
            setTimeout(() => {
                mainGreeting.textContent = defaultGreeting;
                mainGreeting.style.opacity = '1';
            }, 300);
        });

        // Open letter on click
        flower.addEventListener('click', () => {
            const title = flower.getAttribute('data-title');
            const letter = flower.getAttribute('data-letter');
            
            modalTitle.textContent = title;
            modalBody.textContent = letter;
            modal.style.display = 'block';

            // Change the default greeting after the first read
            if (!firstLetterRead) {
                firstLetterRead = true;
                defaultGreeting = "what will you pick next?";
            }
        });
    });

    // --- Modal Controls ---
    const closeModal = () => {
        modal.style.display = 'none';
    };

    closeButton.addEventListener('click', closeModal);

    // Close modal if user clicks outside of the content area
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

});

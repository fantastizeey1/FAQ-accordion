// Get all buttons within the main element
const buttons = document.querySelectorAll('main button');

// Add click event listeners to each button
buttons.forEach((button) => {
  button.addEventListener('click', function() {
    // Get the associated paragraph by finding the closest parent div and then the paragraph inside it
    const paragraph = this.closest('div').querySelector('p');

    // Get all paragraphs except the one associated with the clicked button
    const allParagraphs = document.querySelectorAll('main div > p');
    const otherParagraphs = Array.from(allParagraphs).filter((p) => p !== paragraph);

    // Close other paragraphs and reset other buttons' classes and icons
    otherParagraphs.forEach((p) => {
      p.style.display = 'none';
    });

    const otherButtons = Array.from(buttons).filter((btn) => btn !== this);
    otherButtons.forEach((btn) => {
      btn.classList.remove('active');
      btn.nextElementSibling.src = '/assets/images/icon-plus.svg';
    });

    // Toggle the visibility of the paragraph
    if (paragraph.style.display === 'none' || paragraph.style.display === '') {
      paragraph.style.display = 'block';
      this.classList.add('active');
      this.nextElementSibling.src = '/assets/images/icon-minus.svg'; // Change the image to minus
    } else {
      paragraph.style.display = 'none';
      this.classList.remove('active');
      this.nextElementSibling.src = '/assets/images/icon-plus.svg'; // Change the image to plus
    }
  });
});

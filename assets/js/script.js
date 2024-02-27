document.addEventListener('DOMContentLoaded', function () {

    const cards = document.querySelectorAll('.memory-card');
    
    function flipCard() {
      this.classList.toggle('flip');
    }
    
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', flipCard());
      }
    
    });
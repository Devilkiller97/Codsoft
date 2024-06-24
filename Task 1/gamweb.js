document.addEventListener('DOMContentLoaded', (event) => {
    const showGamesButton = document.getElementById('show-games');
    const gamesSection = document.getElementById('games');
    
    showGamesButton.addEventListener('click', () => {
        gamesSection.scrollIntoView({ behavior: 'smooth' });
    });
});
fetch('tiles.json')
    .then(response => response.json())
    .then(data => {
        const tilesContainer = document.getElementById('tilesContainer');

        data.forEach(tile => {
            const tileElement = document.createElement('a');
            tileElement.href = tile.link;
            tileElement.classList.add('tile');

            const title = document.createElement('h3');
            title.textContent = tile.title;

            const icon = document.createElement('img');
            icon.src = tile.icon;
            icon.alt = tile.title + ' icon';

            tileElement.appendChild(icon);
            tileElement.appendChild(title);
            tilesContainer.appendChild(tileElement);
        });
    })
    .catch(error => console.log('Error fetching tiles:', error));
    
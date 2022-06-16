const charactersList = document.getElementById('list');
const searchBar = document.getElementById('searchBar');

let hpCharacters = [
    {"name": "Beignet", "value": "1.5M" ,"image": '/media/images/Beignet_Icon.png', "link": "/"},
];


searchBar.addEventListener('keyup', (e) => {
    const searchString = (e.target.value.toLowerCase()).trim();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <div class="selectionbox">
                <a href="${character.link}">

                    <div class="text" style="font-size: 2.5rem; font-weight: 600;">${character.name}</div>
                    <img id="selectionimage" src="${character.image}" />
                    <div class="text" style="font-size: 2rem; font-weight: 600; color: rgb(0, 255, 0);">Value: ${character.value}</div>

                </a>
            </div>
        `;
        })
        .join(''); 
    charactersList.innerHTML = htmlString;
};

displayCharacters(hpCharacters);
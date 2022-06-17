const charactersList = document.getElementById('list');
const searchBar = document.getElementById('searchBar');

let hpCharacters = [
    {"name": "Brulee", "value": "5.8M" ,"image": '/media/images/Brulee_Icon.png', "link": "/vehicles/brulee"},
    {"name": "Beignet", "value": "3.5M" ,"image": '/media/images/Beignet_Icon.png', "link": "/vehicles/beignet"},
    {"name": "M12 Molten", "value": "3.6M" ,"image": '/media/images/Molten_Icon.png', "link": "/vehicles/m12molten"},
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
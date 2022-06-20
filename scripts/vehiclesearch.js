const charactersList = document.getElementById('list');
const searchBar = document.getElementById('searchBar');

let Data = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = (e.target.value.toLowerCase()).trim();

    const filteredCharacters = Data.filter((character) => {
        return (
            character.Name.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadData = async () => {

    fetch('https://opensheet.elk.sh/1T9-q3RWbYz_m9g5RPygdAC4vod09XJIRUcN0ijkuSts/1')
    .then(result => result.json())
    .then((output) => {

        console.log('Output: ', output);

        Data = output;

        displayCharacters(Data);
        
    }).catch(err => console.error(err));

};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <div class="selectionbox">
                <a href="${character.Link}">

                    <div class="text" style="font-size: 2.5rem; font-weight: 600;">${character.Header1}</div>
                    <img id="selectionimage" src="${character.Image1}" />
                    <div class="text" style="font-size: 2rem; font-weight: 600; color: rgb(0, 255, 0);">Value: ${character.Value2}</div>

                </a>
            </div>
        `;
        })
        .join(''); 
    charactersList.innerHTML = htmlString;
};

loadData();
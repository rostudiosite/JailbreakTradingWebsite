const charactersList = document.getElementById('list');
const searchBar = document.getElementById('searchBar');

let Data = [];

var setInnerHTML = function(elm, html) {
    elm.innerHTML = html;
    Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes)
        .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
      newScript.appendChild(document.createTextNode(oldScript.innerHTML));
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }

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

    const adString = '<div class="ad-selectionbox"><script async="async" data-cfasync="false" src="//pl17449912.profitablecpmgate.com/c0bf3239b0ad9048ddb6febe91b85ec7/invoke.js"></script><div id="container-c0bf3239b0ad9048ddb6febe91b85ec7"></div></div>'

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

    setInnerHTML(charactersList, adString + htmlString + adString);

};

loadData();
const Header1 = document.getElementById('Header1');
const Text = document.getElementById('Text');
const Image1 = document.getElementById('Image1');

const Value = document.getElementById('Value');
const Price = document.getElementById('Price');
const Max_Speed = document.getElementById('Max_Speed');
const Estimated_Copies = document.getElementById('Estimated_Copies');
const Demand = document.getElementById('Demand');

let Info = [
    {"Header1": "Beignet", "Image1" : "/media/images/Beignet.png", "Value" : "6,500,000", "Original_Price" : "500,000", "Max_Speed" : "280" , "Estimated_Copies" : "Unknown", "Demand": "65/100",  "Text" : "The Beignet was a seasonal vehicle in Jailbreak made by RallySubbie and was featured as the grand prize in Season 6: Race to the Top. It is currently the third fastest vehicle in the game. The Beignet could have been obtained by reaching Level 10 through Contracts. It has a 500,000 value in the garage (for sorting purposes). It could have been found at the Season Arena during Season 6. The Beignet can be described as an Eclaire with a better grip; its launch and acceleration rates are practically equal, but the Beignet will get ahead since it loses less speed in corners. This makes the Beignet one of the top-performing vehicles in the game, only beaten by the Roadster and the Volt in short distances, and the Torpedo and Brulee in long distances."}
];

const displayInformation = (Info) => {

    const htmlValue = Info
    .map((Info) => {
        return `
        Estimated Value: ${Info.Value}
    `;
    })
    .join(''); 
    Value.innerHTML = htmlValue;

    const htmlPrice = Info
    .map((Info) => {
        return `
        Price: ${Info.Original_Price}
    `;
    })
    .join(''); 
    Price.innerHTML = htmlPrice;

    const htmlMaxSpeed = Info
    .map((Info) => {
        return `
        Max Speed: ${Info.Max_Speed} MPH
    `;
    })
    .join(''); 
    Max_Speed.innerHTML = htmlMaxSpeed;

    const htmlCopies= Info
    .map((Info) => {
        return `
        Estimated Copies: ${Info.Estimated_Copies}
    `;
    })
    .join(''); 
    Estimated_Copies.innerHTML = htmlCopies;

    const htmlDemand= Info
    .map((Info) => {
        return `
        Estimated Demand: ${Info.Demand}
    `;
    })
    .join(''); 
    Demand.innerHTML = htmlCopies;




    const htmlString = Info
        .map((Info) => {
            return `
            ${Info.Header1}  
        `;
        })
        .join(''); 
    Header1.innerHTML = htmlString;

    const htmlString2 = Info
    .map((Info) => {
        return `
        <img style="min-width : 16rem; height : 100%; display: block; margin-left: auto; margin-right: auto;" src="${Info.Image1}" alt="Brulee_Image">
    `;
    })
    .join(''); 
    Image1.innerHTML = htmlString2;

    const htmlString3 = Info
    .map((Info) => {
        return `
        ${Info.Text}
    `;
    })
    .join(''); 
    Text.innerHTML = htmlString3;

};

displayInformation(Info);
const Header1 = document.getElementById('Header1');
const Text = document.getElementById('Text');
const Image1 = document.getElementById('Image1');

const Value = document.getElementById('Value');
const Price = document.getElementById('Price');
const Max_Speed = document.getElementById('Max_Speed');
const Estimated_Copies = document.getElementById('Estimated_Copies');

let Info = [
    {"Header1": "Brulee", "Image1" : "/media/images/Brulee.png", "Value" : "6,500,000", "Original_Price" : "500,000", "Max_Speed" : "480" , "Estimated_Copies" : "unknown", "Text" : "The Brulee, also known as the Bugatti Veyron, is the current fastest vehicle in jailbreak. It is really rare due to its specifications and being unobtainable. This vehicle was available from June 4th, 2017 to March 8th, 2020 for 500,000 in-game cash next to the jewelry store and has since then been replaced with the Eclaire. Even though it has been available for quite a while, it is still extremely rare and in high demand. At that time, jailbreak currency was much more valuable due to it being harder to receive."}
];

const displayInformation = (Info) => {

    const htmlValue = Info
    .map((Info) => {
        return `
        Value: ${Info.Value}
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
const Header1 = document.getElementById('Header1');
const Text = document.getElementById('Text');
const Image1 = document.getElementById('Image1');

const Value = document.getElementById('Value');
const Price = document.getElementById('Price');
const Max_Speed = document.getElementById('Max_Speed');
const Estimated_Copies = document.getElementById('Estimated_Copies');
const Demand = document.getElementById('Demand');

let Info = [
    {"Header1": "M12 Molten", "Image1" : "/media/images/Molten.png", "Value" : "3,600,000", "Original_Price" : "599,000", "Max_Speed" : "240" , "Estimated_Copies" : "Unknown", "Demand": "65/100",  "Text" : "The M12 Molten is one of the now-unobtainable vehicles in Jailbreak. The vehicle was released for a limited-time in the Town Revamp Update of October 4th, 2020, and went off-sale on October 14th, 2020, ten days after its release. It could be bought for 599,000 in-game cash."}
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
    Demand.innerHTML = htmlDemand;




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
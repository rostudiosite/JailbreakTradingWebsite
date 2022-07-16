const ad = document.getElementById('ad');

let AdInfo = [];

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

const loadInfo = async () => {

    fetch('https://opensheet.elk.sh/1YVUKVTNxdLsDT9-_RGMZ5Xy1MiUE1vvljzTfWuk0Rus/1')
    .then(result => result.json())
    .then((output) => {

        console.log('Output: ', output);

        AdInfo = output;

        displayAd(AdInfo);
        
    }).catch(err => console.error(err));

};

const displayAd = (characters) => {

    const randomElement = AdInfo[Math.floor(Math.random() * AdInfo.length)];

    if (randomElement.Type == "Rectangle") {

        ad.innerHTML = '<a href="' + randomElement.Link + '" target="_blank"><img style = "width: 38rem; max-width: 90%;" src="' + randomElement.Image + '" alt="Advertisment"></a>'

    }

    if (randomElement.Type == "Square") {

        ad.innerHTML = '<a href="' + randomElement.Link + '" target="_blank"><img style = "width: 20rem; max-width: 45%;" src="' + randomElement.Image + '" alt="Advertisment"></a>'

    }

    if (randomElement.Type == "AdAmazon1") {

      ad.innerHTML = '<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=electronics&banner=1RJ5QAT5B55ECPXSXB82&f=ifr&linkID=673eab2b096819da49682e2a1916e091&t=jbvalues-20&tracking_id=jbvalues-20" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>'
      
    }

    if (randomElement.Type == "AdAmazon2") {

      ad.innerHTML = '<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=13&l=ur1&category=primemain&banner=1P2QF7E522R48KVM6DR2&f=ifr&linkID=9095e361f70073fd781513957238845b&t=jbvalues-20&tracking_id=jbvalues-20" width="468" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>'
      
    }

};

loadInfo();
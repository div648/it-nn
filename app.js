/*
element = document.getElementById(id)
element.style.transform = 'translate(100px, 100px)'

*/



let randomPhrase = 0;
let date = new Date();

function generationImg() {

    randomPhrase = random(0, 3);
    while (randomPhrase == Number(localStorage.imgnumber)) {
        randomPhrase = random(0, 3);

    }

    //randomPhrase = 3;
    localStorage.imgnumber = randomPhrase;
    document.getElementById('titleImgText').innerText = titlesText[randomPhrase];
    document.getElementById('descriptionImgText').innerText = descriptionText[randomPhrase];
    document.getElementById('bgImg').style.backgroundImage = 'url(img/bg-img' + randomPhrase + '.png)';

    document.getElementById('infoCard0').style.boxShadow = '0 0 8px rgba' + cShadow[randomPhrase];
    document.getElementById('infoCard1').style.boxShadow = '0 0 8px rgba' + cShadow[randomPhrase];
    document.getElementById('infoCard2').style.boxShadow = '0 0 8px rgba' + cShadow[randomPhrase];
    /*if (randomPhrase == 0) {
        document.getElementById('infoCard2').style.backgroundImage = 'url(img/bg_cards2.png)';
    } else if (randomPhrase == 2) {
        document.getElementById('infoCard2').style.backgroundImage = 'url(img/bg_cards1.png)';
    } else {
    document.getElementById('infoCard2').style.backgroundImage = 'url(img/bg_cards1' + randomFArr(['0', '3']) + '.png)';
    }*/
    let randomBrCrdImg = random(0, 4);
    while (randomBrCrdImg == Number(localStorage.imgcardnumber)) {
        randomBrCrdImg = random(0, 4);
    }
    localStorage.imgcardnumber = randomBrCrdImg;
    document.getElementById('infoCard2').style.backgroundImage = 'url(img/bg_cards1' + randomBrCrdImg + '.png)';
    document.getElementById('infoCard2').style.backgroundPositionX = '50%';
    document.getElementById('infoCard2').style.backgroundPositionY = '50%';
    document.getElementById('infoCard2').style.backgroundSize = 'cover';
    document.getElementById('infoCard2').style.color = '#fff';


}

let siteStart = false;
let image_arrived = false;
let bgImageBox;
let titleImgTextEl;
let descriptionImgTextEl;

function siteStartFun() {
    generationImg();
    siteStart = true;
    bgImageBox = document.getElementById('bgImg');
    titleImgTextEl = document.getElementById('titleImgText');
    descriptionImgTextEl = document.getElementById('descriptionImgText');
    document.getElementById('textFooter').innerText = '© 2003-' + date.getFullYear() + ' ООО «Информационные Технологии»'

};

document.addEventListener("DOMContentLoaded", siteStartFun);


let j = -477;
let k = 1;
let kk = 5;
let argbColor = 0;



setInterval(function() {
    if (siteStart && !image_arrived) {

        if (j < 0) {
            if (j + k > 0) {
                j = 0;
                image_arrived = true;
            } else {
                j += k;
            }

            bgImageBox.style.backgroundPositionX = j + "px";
            k *= 1.1;



        } else {
            image_arrived = true;

        }
    }

    if (image_arrived) {

        if (argbColor < 1) {
            argbColor += 0.03;
            titleImgTextEl.style.color = 'rgba(255, 255, 255, ' + argbColor + ')';
            descriptionImgTextEl.style.color = 'rgba(255, 255, 255, ' + argbColor + ')';
        }


    }
}, 16);


function switchPages(num_page) {
    num_page = Number(num_page);
    for (let i = 0; i < 2; i++) { // Когда добавятся нрвые меня гадо изменить!!!!!!!!!

        if (num_page != i) {
            document.getElementById('page' + i).style.display = 'none';
        } else {
            document.getElementById('page' + i).style.display = 'contents';
        }
    }

}


function activityPageSwitch(type_activity, flag = false) {
    type_activity = Number(type_activity);

    for (let i = 0; i < 7; i++) {
        if (i != type_activity) {
            document.getElementById('fieldActivity' + i).style.color = ''; //rgb(1, 86, 192)
            document.getElementById('fieldActivity' + i).style.fontWeight = ''; //500
        } else {

            document.getElementById('fieldActivity' + i).style.color = 'rgb(40, 40, 40)';
            document.getElementById('fieldActivity' + i).style.fontWeight = 'bold';
        }

    }

    document.getElementById('descriptionActivity').innerText = activitis[type_activity];
    document.getElementById('descriptionActivityTitle').innerText = activitisTile[type_activity];

    if (flag) {
        switchPages(1);
    }

}

function activityPageSwitchH(type_activity) {
    activityPageSwitch(type_activity, true);

}
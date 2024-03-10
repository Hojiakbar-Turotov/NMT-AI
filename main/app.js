const masalalarSoni = document.getElementById("Masalalar_soni");
const masalaTuzTugmasi = document.getElementById("masalaTuz");
const mavzularForm = document.getElementById("mavzularForm");
const mavzularBox = mavzularForm.getElementsByTagName("input");
const mavzular = mavzularForm.getElementsByTagName("label");
const masalalar = document.getElementById("masalalar");


let yangiMasalalar = ``;

masalaTuzTugmasi.addEventListener('click', logger)

function logger() {
    yangiMasalalar = '';
    mavzularniSaralash();

    for (let i = 0; i < masalalarSoni.value; i = i + 1) {
        yangiMasalalar += `${i + 1}. ${addNewMasala()} <br />`
    }

    return masalalar.innerHTML = `
    <p>
        ${yangiMasalalar}
    </p>
    `
}

let listNewMasala = []

function mavzularniSaralash() {

    if (mavzularBox[0].checked) {
        listNewMasala = listNewMasala.concat(elektr_kuchlanish)
    }
    if (mavzularBox[1].checked) {
        listNewMasala = listNewMasala.concat(tok_kuchi)
    }
    if (mavzularBox[2].checked) {
        listNewMasala = listNewMasala.concat(elektr_qarshilik)
    }
    /* for (let i = 0; i < mavzularBox.length; i++) {
         if (mavzularBox[i].checked) {
             console.log(mavzular[i].innerText)
         }
     }*/
}


function addNewMasala() {
    let newMasala = ''
    let newMasalaNumber = Math.floor(Math.random() * listNewMasala.length)
    newMasala = listNewMasala[newMasalaNumber]
    return newMasala
}


// masala yaratish



/* Mavzular bo'yicha masalalar namunalari */
// Elektr kuchlanish va uni o'lchash

const elektr_kuchlanish = [
    `Elektr zanjirdagi lampochkaga parallel ulangan voltmetr ${randomNumber(150) / 100} V ni ko‘rsatmoqda. Lampochkadan ${randomNumber(320) / 100} C zaryad o‘tganda qancha ish bajariladi?`,
    `Elektr zanjirdagi lampochkaga parallel ulangan voltmetr ${randomNumber(300) / 100} V ni ko‘rsatmoqda. Ma’lum vaqt davomida ${randomNumber(360) / 10} J ish bajarilishi uchun lampochkadan qancha elektron oqib o‘tishi kerak?`,
    `Elektr maydon ${randomNumber(150) / 100} C zaryadni ko‘chirishda qanday ish bajaradi? Tok manbaining kuchlanishi ${randomNumber(600) / 100} V ga teng.`,
    `Elektr zanjirdagi lampochkadan ma’lum vaqt davomida ${randomNumber(90) / 10} C zaryad o‘tib, ${randomNumber(360) / 10} J ish bajarildi. Lampochka qanday elektr kuchlanishida yongan?`,
    `Elektr zanjirdagi lampochkaga parallel ulangan voltmetr ${randomNumber(600) / 100} V ni ko‘rsatmoqda. Ma’lum vaqt davomida ${randomNumber(480) / 100} J ish bajarilishi uchun lampochkadan qancha elektron o‘tishi kerak?`,
    `O‘tkazgichdan ${randomNumber(320) / 100} C zaryad o‘tganda tok manbai ${randomNumber(640) / 10} J ish bajaradi. O‘tkazgich uchlariga qanday kuchlanish qo‘yilgan?`,
    `${randomNumber(50) * 1, 5} V da ishlaydigan magnitofon uchun 1,5 V li nechta galvanik elementni ketma-ket ulash kerak?`,
]
const tok_kuchi = [
    `Elektr zanjirdagi lampochka spiralidan ${randomNumber(40) / 100} A tok o‘tmoqda. Lampochka spirali orqali ${randomNumber(10)} minutda qancha zaryad va nechta elektron o‘tishini hisoblang.`,
    `Elektr zanjirdagi o‘tkazgichdan ${randomNumber(40)} minutda ${randomNumber(120)} C zaryad o‘tgan bo‘lsa, zanjirdagi tok kuchi nimaga teng?`,
    `Tok kuchi ${randomNumber(320) / 100} A ga teng bo‘lsa, ${randomNumber(10)} minut davomida o‘tkazgichning ko‘ndalang kesimidan qancha elektron oqib o‘tadi?`,
    `Elektr zanjirdagi lampochka spiralidan o‘tayotgan tok kuchi ${randomNumber(300) / 100} A ga teng. Lampochka spiralidan qancha vaqtda ${randomNumber(360)} C zaryad o‘tadi?`,
    `Manbadan o‘tkazgich uchlariga ${randomNumber(100)} V kuchlanish berildi. Agar shu o‘tkazgichda ${randomNumber(10)} soat davomida ${randomNumber(120)} mA tok o‘tib turgan bo‘lsa, tok manbai zaryadni ko‘chirishda qanday ish bajargan?`,
    `Tok manbaiga ulangan o‘tkazgichdan ${randomNumber(320) / 100} A tok o‘tib turibdi. ${randomNumber(10)} minut davomida shu o‘tkazgich ko‘ndalang kesim yuzasidan o‘tgan jami elektronlarning massasini aniqlang.`,
    `Elektr lampochkadan ${randomNumber(80) / 100} A tok o‘tmoqda. Uning spirali ko‘ndalang kesim yuzasidan ${randomNumber(30)} minutda o‘tgan elektronlarning massasini aniqlang.`,
    `Manbaga ulangan iste’molchidan ${randomNumber(20)} mA tok o‘tib turibdi. Tok manbai ${randomNumber(120)} minut davomida zaryadni ko‘chirishda ${randomNumber(720)} J ish bajargan bo‘lsa, iste’molchi uchlariga qanday kuchlanish berilgan?`,
    `Elektr zanjirdagi lampochkadan ${randomNumber(40) / 100} A tok o‘tmoqda. Lampochka spirali orqali uch minutda qancha zaryad va nechta elektron o‘tishini hisoblang.`,
    `12 V kuchlanishli akkumulyator avtomobilni yurgizishda generatorga ${randomNumber(50)} A tok bermoqda. Agar avtomobil dvigateli ${randomNumber(20)} s o‘tgach o‘t olsa, akkumulyator qanday ish bajargan?`,
    `Elektr zanjiriga ulangan elektr lampochkadan ma’lum vaqt davomida ${randomNumber(25)} C zaryad o‘tib, tok manbai ${randomNumber(9) * 25} J ish bajardi. Lampochka spiraliga qanday kuchlanish berilgan?`,
]
const elektr_qarshilik = [
    `Uzunligi ${randomNumber(200) / 100} m va ko‘ndalang kesimining yuzasi ${randomNumber(5) / 10} mm^2 bo‘lgan nixrom simning qarshiligini toping.`,
    `Uzunligi ${randomNumber(120)} m va ko‘ndalang kesimining yuzasi ${randomNumber(5) / 10} mm^2 bo‘lgan mis simning qarshiligini toping.`,
    `Uzunligi ${randomNumber(300) / 100} m, ko‘ndalang kesimining yuzasi ${randomNumber(5) / 10} mm^2 bo‘lgan simning qarshiligi ${randomNumber(240) / 100} Ω ga teng. Sim qanday moddadan tayyorlangan?`,
    `Bir xil moddadan tayyorlangan ikkita o‘tkazgich sim bor. Birinchi simning uzunligi ${randomNumber(5)} m, ko‘ndalang kesimining yuzasi ${randomNumber(5) / 10} mm^2 ikkinchi simning uzunligi ${randomNumber(5) / 10} m, ko‘ndalang kesimining yuzasi ${randomNumber(50) / 10} mm^2. Qaysi simning qarshiligi katta va necha marta katta?`,
    `Ko‘ndalang kesimining yuzasi ${randomNumber(5) / 10} mm^2  bo‘lgan ${randomNumber(5)} Ω qarshilikli spiral tayyorlash uchun qanday uzunlikda nikelin sim kerak bo‘ladi?`,
]

// tasodifiy raqamlarni chiqarish
function randomNumber(x) {
    let y = Math.floor(Math.random() * x)
    if (y) {
        return y
    } else (
        y = Math.floor(Math.random() * x)
    )
    if (y) {
        return y
    } else (
        y = Math.floor(Math.random() * x)
    )
    if (y) {
        return y
    } else (
        y = Math.floor(Math.random() * x)
    )
    if (y) {
        return y
    } else (
        y = Math.floor(Math.random() * x)
    )
}

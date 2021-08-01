'use strict';

const number = 1;
const string = 'x';
const obj = {}; // toto je prázdný objekt, naprosto validní

const pravda = true;
const nepravda = false;
const prevedena = Boolean(1);

// PODMÍNKY

if (2 > 1) {
    console.log('2 je opravdu větší než 1');
};

// úkol - Registrace na očkování

/*
const vek = prompt('Zadejte Váš věk:');
if (vek >= 65) {
    console.log('V pořádku.');
} else console.log('Nízký věk!');

const heslo = prompt('Zadejte Vaše heslo:');
if (heslo.length >= 8) {
    console.log('V pořádku.');
} else console.log('Slabé heslo');98
*/

// úkol - Cena vstupenky
/*
const vek = prompt('Zadejte Váš věk:');
const plnaCena = 12;
if (vek < 6) {
    let cena = plnaCena * 0;
    console.log(cena);
    console.log('Návštěvníci do 6 let mají vstup zdarma.');
} else if (vek >= 6 && vek <= 26) {
    let cena = Math.round(plnaCena * 0.65);
    console.log(cena);
    console.log('Žáci a studenti mají slevu 35 %.');
} else if (vek >= 27 && vek <= 64) {
    let cena = plnaCena;
    console.log(cena);
    console.log('Dospělí mají vstup za 12 EUR.');
} else if (vek >= 65) {
    let cena = plnaCena * 0.5;
    console.log(cena);
    console.log('Senioři mají slevu 50 %.');
};
*/

// úkol - FIT e-mail
/*
const jmeno = prompt('Zadejte Vaše jméno bez diakritiky:').trim();
const prijmeni = prompt('Zadejte Vaše příjmení bez diakritiky:').trim();

const upraveneJmeno = jmeno.slice(0, 3);
const upravenePrijmeni = prijmeni.slice(0, 5);
const koncovka = '@fit.cvut.cz';

document.write(
    `<h3>Váš nový školní e-mail: </h3>`,
    `${upraveneJmeno}${upravenePrijmeni}${koncovka}`,
);
*/

// úkol - Množstevní slevy

const pocetKusu = prompt('Zadejte počet kusů triček:');

if (pocetKusu < 50) {
    let cena = 300 * pocetKusu;
    console.log(`Celková cena objednávky je ${cena} Kč.`);
} else if (pocetKusu >= 50) {
    let cena = 250 * pocetKusu;
    console.log(`Celková cena objednávky je ${cena} Kč.`);
} else if (pocetKusu > 200) {
    let cena = 200 * pocetKusu;
    console.log(`Celková cena objednávky je ${cena} Kč.`);
} else if (pocetKusu > 500) {
    let cena = 150 * pocetKusu;
    console.log(`Celková cena objednávky je ${cena} Kč.`);
} else if (pocetKusu > 1000) {
    let cena = 120 * pocetKusu;
    console.log(`Celková cena objednávky je ${cena} Kč.`);
};


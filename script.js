const obj = {
    kolya: 350,
    petya: 420,
    vasya: 560,
    anna: 340,
    victoriya: 240,
};
console.log(obj.petya, obj.kolya);

delete obj.vasya;
obj.anastasia = 560;
console.log(obj);

let cat = {
    catName: 'Nora',
    eyeColor: 'green',
    coatColor: 'ginger',
    character: 'harmful',
    keticat : confirm('Кошка голодна?')
}
    if (cat.keticat === true) {
        console.log('Кыс-кыс, ' + cat.catName + '. Идем кушать.');
        cat.keticat === false;
    }
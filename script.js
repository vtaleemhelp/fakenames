let btnGen = document.querySelector('button');

btnGen.addEventListener('click', () => {
    let info = faker.helpers.createCard();
    
    
    let {name, email,phone, address:{city, country, zipcode}} = info;
    

    document.querySelector('#name').value = name;
    document.querySelector('#email').value = email;
    document.querySelector('#city').value = city;
    document.querySelector('#zipcode').value = zipcode;
    document.querySelector('#country').value = country;
    document.querySelector('#phone').value = phone;
});

// let btnGen1 = document.querySelector('#button1');

// btnGen1.addEventListener('click', () => {
//     let anim = faker.helpers.createCard();
//     let {bear, bird,cat, cow,Crocodilia,dog} = anim;

//     document.querySelector('#bear').value = bear;
//     document.querySelector('#bird').value = bird;
//     document.querySelector('#cat').value = cat;
//     document.querySelector('#cow').value = cow;
//     document.querySelector('#dog').value = Crocodilia;
//     document.querySelector('#Crocodilia').value = dog;
// });
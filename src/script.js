const imgContainer1=document.querySelector('.project-info-img'); //При max-width>1300px
const imgContainer2=document.querySelector('.projects-slider__img'); //При max-width<1300px
const city=document.getElementById('projectCity');
const time=document.getElementById('projectTime');
const area=document.getElementById('projectArea');
const cost=document.getElementById('projectCost');
//Кнопки управления влево/вправо (при max-width>1300px)
const leftBtn1=document.getElementById('btnLeft1');
const rightBtn1=document.getElementById('btnRight1');
//Кнопки управления влево/вправо (при max-width<1300px)
const leftBtn2=document.getElementById('btnLeft2');
const rightBtn2=document.getElementById('btnRight2');
//Кружочки рядом со стрелками
const circles=document.querySelectorAll('.carousel-item');
//Ссылки над картинкой
const lnkSlides=document.querySelectorAll('.projects-navigation__item');

let slides=[
    {
        city: 'Rostov-on-Don\nLCD admiral',
        time: '3.5 months',
        area: '81 m2',
        cost: 'Upon request',
        image: 'slide-1.jpg'
    },
    {
        city: 'Sochi\nThieves',
        time: '4 months',
        area: '105 m2',
        cost: 'Upon request',
        image: 'slide-2.jpg'
    },
    {
        city: 'Rostov-on-Don\nPatriotic',
        time: '3 months',
        area: '93 m2',
        cost: 'Upon request',
        image: 'slide-3.jpg'
    }
];

function setSlideContent(index){
    //При max-width>1300px
    imgContainer1.style.backgroundImage=`url(images/${slides[index]['image']})`;
    //При max-width<1300px
    imgContainer2.style.backgroundImage=`url(images/${slides[index]['image']})`;
    //Заполняем текст
    city.innerText=slides[index]['city'];
    time.innerText=slides[index]['time'];
    area.innerText=slides[index]['area'];
    cost.innerText=slides[index]['cost'];
    //Меняем класс ссылки
    setActive(index);
}

//Изменение класса ссылки на none-select
function setNone(index){
    lnkSlides[index].querySelector('.navigation__item-link').classList.remove('projects-navigation__item-select');
    lnkSlides[index].querySelector('.navigation__item-link').classList.add('projects-navigation-none-select');
    circles[index].classList.remove('carousel-item-active');
}

//Изменение класса ссылки на select
function setActive(index){
    lnkSlides[index].querySelector('.navigation__item-link').classList.remove('projects-navigation-none-select');
    lnkSlides[index].querySelector('.navigation__item-link').classList.add('projects-navigation__item-select');
    circles[index].classList.add('carousel-item-active');
}

//Устанавливаем значения по умолчанию
let index=0;
setSlideContent(index);

//Нажатие на кнопку влево (при max-width>1300px)
leftBtn1.addEventListener('click',()=>{
    //Меняем класс пред. ссылки на неактивный
    setNone(index);
    index-=1;
    if(index<0){ //Если картинка первая, перелистываем на последнюю
        index=slides.length-1;
        setSlideContent(index);
    }else{
        setSlideContent(index);
    }
});

//Нажатие на кнопку вправо (при max-width>1300px)
rightBtn1.addEventListener('click',()=>{
    setNone(index);
    index+=1;
    if(index>(slides.length-1)){ //Если картинка последняя, перелистываем на первую
        index=0;
        setSlideContent(index);
    }else{
        setSlideContent(index);
    }
});

//Нажатие на кнопку влево (при max-width<1300px)
leftBtn2.addEventListener('click',()=>{
    setNone(index);
    index-=1;
    if(index<0){ //Если картинка первая, перелистываем на последнюю
        index=slides.length-1;
        setSlideContent(index);
    }else{
        setSlideContent(index);
    }
});

//Нажатие на кнопку вправо (при max-width<1300px)
rightBtn2.addEventListener('click',()=>{
    setNone(index);
    index+=1;
    if(index>slides.length-1){ //Если картинка последняя, перелистываем на первую
        index=0;
        setSlideContent(index);
    }else{
        setSlideContent(index);
    }
});


//Нажатия на ссылки
for(let i=0;i<lnkSlides.length;i++){
    lnkSlides[i].addEventListener('click',()=>{
        setNone(index);
        index=i;
        setSlideContent(index);
    });
}

//Нажатия на кружочки
for(let i=0;i<circles.length;i++){
    circles[i].addEventListener('click',()=>{
        setNone(index);
        index=i;
        setSlideContent(index);
    });
}


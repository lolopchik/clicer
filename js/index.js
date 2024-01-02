let cookieNode = document.querySelector(`#cookie`);
let resultNode = document.querySelector(`#result`);
let mag = document.querySelector(`#mag`);
let text = document.querySelector(`#text`);
let on = document.querySelector(`#on`);
let to = document.querySelector(`#to`);
let fr = document.querySelector(`#fr`);
let fo = document.querySelector(`#fo`);
let fi = document.querySelector(`#fi`);

let on1 = document.querySelector(`#on1`);
let to1 = document.querySelector(`#to1`);
let fr1 = document.querySelector(`#fr1`);
let fo1 = document.querySelector(`#fo1`);
let fi1 = document.querySelector(`#fi1`);

let pec = document.querySelector(`#pec`);


let i = 0;

let on2 = 0;
let to2 = 0;
let fr2 = 0;
let fo2 = 0;
let fi2 = 0;
pec.innerHTML = `у вас ${i} печенек`;


on.addEventListener(`click`, function(){
    if(i >= 100){
        i = i-100;
        on2 = on2+1;
        resultNode.innerHTML =  i+ ` печенек`;
        pec.innerHTML = `у вас ${i} печенек`;
        on1.innerHTML = `кол-во ${on2}`
    } else {
        pec.innerHTML = `у вас ${i} печенек <p>недостаточно печенек</p>`;
    }
    let baf = (on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    id.innerHTML = `за 1 клик вы получаете ${baf} печенек`
});

to.addEventListener(`click`, function(){
    if(i >= 450){
        i = i-450;
        to2 = to2+1;
        resultNode.innerHTML =  i+ ` печенек`;
        pec.innerHTML = `у вас ${i} печенек`;
        to1.innerHTML = `кол-во ${to2}`
    } else {
        pec.innerHTML = `у вас ${i} печенек <p>недостаточно печенек</p>`;
    }
    let baf = (on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    id.innerHTML = `за 1 клик вы получаете ${baf} печенек`
});

fr.addEventListener(`click`, function(){
    if(i >= 1750){
        i = i-1750;
        fr2 = fr2+1;
        resultNode.innerHTML =  i+ ` печенек`;
        pec.innerHTML = `у вас ${i} печенек`;
        fr1.innerHTML = `кол-во ${fr2}`
    } else {
        pec.innerHTML = `у вас ${i} печенек <p>недостаточно печенек</p>`;
    }
    let baf = (on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    id.innerHTML = `за 1 клик вы получаете ${baf} печенек`
});

fo.addEventListener(`click`, function(){
    if(i >= 7500){
        i = i-7500;
        fo2 = fo2+1;
        resultNode.innerHTML =  i+ ` печенек`;
        pec.innerHTML = `у вас ${i} печенек`;
        fo1.innerHTML = `кол-во ${fo2}`
    } else {
        pec.innerHTML = `у вас ${i} печенек <p>недостаточно печенек</p>`;
    }
    let baf = (on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    id.innerHTML = `за 1 клик вы получаете ${baf} печенек`
});

fi.addEventListener(`click`, function(){
    if(i >= 30000){
        i = i-30000;
        fi2 = fi2+1;
        resultNode.innerHTML =  i+ ` печенек`;
        pec.innerHTML = `у вас ${i} печенек`;
        fi1.innerHTML = `кол-во ${fi2}`
    } else {
        pec.innerHTML = `у вас ${i} печенек <p>недостаточно печенек</p>`;
    }
    let baf = (on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    id.innerHTML = `за 1 клик вы получаете ${baf} печенек`
});


let id = document.querySelector(`#id`);
cookieNode.addEventListener(`click`, function(){
    i=i+(on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    resultNode.innerHTML = i + ` печенек`;
    pec.innerHTML = `у вас ${i} печенек`;
    let baf = (on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    id.innerHTML = `за 1 клик вы получаете ${baf} печенек`
});



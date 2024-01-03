let cookieNode = document.querySelector(`#cookie`);
let resultNode = document.querySelector(`#result`);
let id1 = document.querySelector(`#id1`)
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

let av1 = document.querySelector(`#av1`);
let av2 = document.querySelector(`#av2`);
let av3 = document.querySelector(`#av3`);
let av4 = document.querySelector(`#av4`);
let av5 = document.querySelector(`#av5`);

let av11 = document.querySelector(`#av11`);
let av21 = document.querySelector(`#av21`);
let av31 = document.querySelector(`#av31`);
let av41 = document.querySelector(`#av41`);
let av51 = document.querySelector(`#av51`);

let pec = document.querySelector(`#pec`);
let pec1 =document.querySelector(`#pec1`)


let nochit = 0;
let sec = 0;

let on2 = 0;
let to2 = 0;
let fr2 = 0;
let fo2 = 0;
let fi2 = 0;
pec.innerHTML = `у вас ${nochit} печенек`;
pec1.innerHTML = `у вас ${nochit} печенек`;

let av12 = 0;
let av22 = 0;
let av32 = 0;
let av42 = 0;
let av52 = 0;

let avbaf = (av12*1)+(av22*5)+(av32*20)+(av42*100)+(av52*500);
id1.innerHTML = `в сек вы получаете ${avbaf} печенек`;

av1.addEventListener(`click`, function(){
    if(nochit >= 300){
        nochit = nochit-300;
        av12 = av12+1;
        resultNode.innerHTML =  nochit+ ` печенек`;
        pec1.innerHTML = `у вас ${nochit} печенек`;
        av11.innerHTML = `кол-во ${av12}`;
        pec.innerHTML = `у вас ${nochit} печенек`;
        
    } else {
        pec1.innerHTML = `у вас ${nochit} печенек <p>недостаточно печенек</p>`;
    }
    let avbaf = (av12*1)+(av22*5)+(av32*20)+(av42*100)+(av52*500);
    id1.innerHTML = `в сек вы получаете ${avbaf} печенек`;
});

av2.addEventListener(`click`, function(){
    if(nochit >= 1200){
        nochit = nochit-1200;
        av22 = av22+1;
        resultNode.innerHTML =  nochit+ ` печенек`;
        pec1.innerHTML = `у вас ${nochit} печенек`;
        av21.innerHTML = `кол-во ${av22}`;
        pec.innerHTML = `у вас ${nochit} печенек`;
    } else {
        pec1.innerHTML = `у вас ${nochit} печенек <p>недостаточно печенек</p>`;
    }
    let avbaf = (av12*1)+(av22*5)+(av32*20)+(av42*100)+(av52*500);
    id1.innerHTML = `в сек вы получаете ${avbaf} печенек`;
});
av3.addEventListener(`click`, function(){
    if(nochit >= 5500){
        nochit = nochit-5500;
        av32 = av32+1;
        resultNode.innerHTML =  nochit+ ` печенек`;
        pec1.innerHTML = `у вас ${nochit} печенек`;
        av31.innerHTML = `кол-во ${av32}`;
        pec.innerHTML = `у вас ${nochit} печенек`;
    } else {
        pec1.innerHTML = `у вас ${nochit} печенек <p>недостаточно печенек</p>`;
    }
    let avbaf = (av12*1)+(av22*5)+(av32*20)+(av42*100)+(av52*500);
    id1.innerHTML = `в сек вы получаете ${avbaf} печенек`;
});

av4.addEventListener(`click`, function(){
    if(nochit >= 22000){
        nochit = nochit-22000;
        av42 = av42+1;
        resultNode.innerHTML =  nochit+ ` печенек`;
        pec1.innerHTML = `у вас ${nochit} печенек`;
        av41.innerHTML = `кол-во ${av42}`;
        pec.innerHTML = `у вас ${nochit} печенек`;
    } else {
        pec1.innerHTML = `у вас ${nochit} печенек <p>недостаточно печенек</p>`;
    }
    let avbaf = (av12*1)+(av22*5)+(av32*20)+(av42*100)+(av52*500);
    id1.innerHTML = `в сек вы получаете ${avbaf} печенек`;
});

av5.addEventListener(`click`, function(){
    if(nochit >= 100000){
        nochit = nochit-100000;
        av52 = av52+1;
        resultNode.innerHTML =  nochit+ ` печенек`;
        pec1.innerHTML = `у вас ${nochit} печенек`;
        av51.innerHTML = `кол-во ${av52}`;
        pec.innerHTML = `у вас ${nochit} печенек`;
    } else {
        pec1.innerHTML = `у вас ${nochit} печенек <p>недостаточно печенек</p>`;
    }
    let avbaf = (av12*1)+(av22*5)+(av32*20)+(av42*100)+(av52*500);
    id1.innerHTML = `в сек вы получаете ${avbaf} печенек`
});





on.addEventListener(`click`, function(){
    if(nochit >= 150){
        nochit = nochit-150;
        on2 = on2+1;
        resultNode.innerHTML =  nochit+ ` печенек`;
        pec.innerHTML = `у вас ${nochit} печенек`;
        on1.innerHTML = `кол-во ${on2}`;
        pec1.innerHTML = `у вас ${nochit} печенек`;
    } else {
        pec.innerHTML = `у вас ${nochit} печенек <p>недостаточно печенек</p>`;
    }
    let baf = (on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    id.innerHTML = `за 1 клик вы получаете ${baf} печенек`
});

to.addEventListener(`click`, function(){
    if(nochit >= 600){
        nochit = nochit-600;
        to2 = to2+1;
        resultNode.innerHTML =  nochit+ ` печенек`;
        pec.innerHTML = `у вас ${nochit} печенек`;
        to1.innerHTML = `кол-во ${to2}`;
        pec1.innerHTML = `у вас ${nochit} печенек`;
    } else {
        pec.innerHTML = `у вас ${nochit} печенек <p>недостаточно печенек</p>`;
    }
    let baf = (on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    id.innerHTML = `за 1 клик вы получаете ${baf} печенек`
});

fr.addEventListener(`click`, function(){
    if(nochit >= 2250){
        nochit = nochit-2250;
        fr2 = fr2+1;
        resultNode.innerHTML =  nochit+ ` печенек`;
        pec.innerHTML = `у вас ${nochit} печенек`;
        fr1.innerHTML = `кол-во ${fr2}`;
        pec1.innerHTML = `у вас ${nochit} печенек`;
    } else {
        pec.innerHTML = `у вас ${nochit} печенек <p>недостаточно печенек</p>`;
    }
    let baf = (on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    id.innerHTML = `за 1 клик вы получаете ${baf} печенек`
});

fo.addEventListener(`click`, function(){
    if(nochit >= 11000){
        nochit = nochit-11000;
        fo2 = fo2+1;
        resultNode.innerHTML =  nochit+ ` печенек`;
        pec.innerHTML = `у вас ${nochit} печенек`;
        fo1.innerHTML = `кол-во ${fo2}`;
        pec1.innerHTML = `у вас ${nochit} печенек`;
    } else {
        pec.innerHTML = `у вас ${nochit} печенек <p>недостаточно печенек</p>`;
    }
    let baf = (on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    id.innerHTML = `за 1 клик вы получаете ${baf} печенек`
});

fi.addEventListener(`click`, function(){
    if(nochit >= 50000){
        nochit = nochit-50000;
        fi2 = fi2+1;
        resultNode.innerHTML =  nochit+ ` печенек`;
        pec.innerHTML = `у вас ${nochit} печенек`;
        fi1.innerHTML = `кол-во ${fi2}`;
        pec1.innerHTML = `у вас ${nochit} печенек`;
    } else {
        pec.innerHTML = `у вас ${nochit} печенек <p>недостаточно печенек</p>`;
    }
    let baf = (on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    id.innerHTML = `за 1 клик вы получаете ${baf} печенек`
});


let id = document.querySelector(`#id`);

cookieNode.addEventListener(`click`, function(){
    nochit=nochit+(on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    resultNode.innerHTML = nochit + ` печенек`;
    pec.innerHTML = `у вас ${nochit} печенек`;
    pec1.innerHTML = `у вас ${nochit} печенек`;
    let baf = (on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    
    id.innerHTML = `за 1 клик вы получаете ${baf} печенек`
});

setInterval(function() {
    let avbaf = (av12*1)+(av22*5)+(av32*20)+(av42*100)+(av52*500);
    if(avbaf!=0){
        
        nochit= nochit+avbaf;
        resultNode.innerHTML=nochit + ` печенек`;
        pec.innerHTML = `у вас ${nochit} печенек`;
    pec1.innerHTML = `у вас ${nochit} печенек`;
    }
},1000)


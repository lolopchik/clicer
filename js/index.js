let cookieNode = document.querySelector(`#cookie`);
let container = document.querySelector(`.container`)
let cole = document.querySelector(`#cole`)
let resultNode = document.querySelector(`#result`);
let resultNode1 = document.querySelector(`#result1`);
let id1 = document.querySelector(`#id1`);

let str = document.querySelector(`#str`);
let schet = document.querySelector(`#schet`)
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



let on2 = 0;
let to2 = 0;
let fr2 = 0;
let fo2 = 0;
let fi2 = 0;
let nochit = 0;
pec.innerHTML = `у вас ${nochit} печенек`;


let av12 = 0;
let av22 = 0;
let av32 = 0;
let av42 = 0;
let av52 = 0;
function avbafmag(){
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
    av1.addEventListener(`click`, function(){
        if(nochit >= 300){
            nochit = nochit-300;
            av12 = av12+1;
            resultNode1.innerHTML = nochit+ ` печенек`;
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
            resultNode1.innerHTML = nochit+ ` печенек`;
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
            resultNode1.innerHTML = nochit+ ` печенек`;
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
            resultNode1.innerHTML = nochit+ ` печенек`;
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
            resultNode1.innerHTML = nochit+ ` печенек`;
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
    setInterval(function() {
        let avbaf = (av12*1)+(av22*5)+(av32*20)+(av42*100)+(av52*500);
        if(avbaf!=0){
            
            nochit= nochit+avbaf;
            resultNode1.innerHTML = nochit + ` печенек`;
            resultNode.innerHTML=nochit + ` печенек`;
            pec.innerHTML = `у вас ${nochit} печенек`;
        pec1.innerHTML = `у вас ${nochit} печенек`;
        }
    },1000);
}
function nachalo(){







let on2 = 0;
let to2 = 0;
let fr2 = 0;
let fo2 = 0;
let fi2 = 0;
pec.innerHTML = `у вас ${nochit} печенек`;


let av12 = 0;
let av22 = 0;
let av32 = 0;
let av42 = 0;
let av52 = 0;

let avbaf = (av12*1)+(av22*5)+(av32*20)+(av42*100)+(av52*500);
id1.innerHTML = `в сек вы получаете ${avbaf} печенек`;


avbafmag()



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


game1.addEventListener(`click`, coleseko);

on.addEventListener(`click`, function(){
    if(nochit >= 150){
        nochit = nochit-150;
        on2 = on2+1;
        resultNode1.innerHTML = nochit+ ` печенек`;
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
        resultNode1.innerHTML = nochit+ ` печенек`;
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
        resultNode1.innerHTML = nochit+ ` печенек`;
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
        resultNode1.innerHTML = nochit+ ` печенек`;
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
        resultNode1.innerHTML = nochit+ ` печенек`;
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
    resultNode1.innerHTML = nochit + ` печенек`;
    pec.innerHTML = `у вас ${nochit} печенек`;
    pec1.innerHTML = `у вас ${nochit} печенек`;
    let baf = (on2*1)+(to2*5)+(fr2*20)+(fo2*100)+(fi2*500)+1;
    
    id.innerHTML = `за 1 клик вы получаете ${baf} печенек`
});
}
nachalo()

let game11 = 0;

function coleseko(){
    let back= document.querySelector(`#back`);
        
        back.addEventListener(`click`, function(){
            
        game11=0;
        container.classList.remove(`d-none`)
        cole.classList.add(`d-none`)
        });
    
    function coleso(){
        game11++
    container.classList.add(`d-none`)
    cole.classList.remove(`d-none`)
    if(game11==1){
        let number = document.querySelector(`#number`);
        let start = document.querySelector(`#start`);
        let input = document.querySelector(`#input`)
        let fall = document.querySelector(`#fall`)
        let st1 = document.querySelector(`#st1`);
        let st2 = document.querySelector(`#st2`);
        let st3 = document.querySelector(`#st3`);
        let st4 = document.querySelector(`#st4`);
        let st5 = document.querySelector(`#st5`);
        let st6 = document.querySelector(`#st6`);
        let st7 = document.querySelector(`#st7`);
        let prov = document.querySelector(`#prov`)
        let chet = document.querySelector(`#chet`);
        let nochet = document.querySelector(`#nochet`);
        let black = document.querySelector(`#black`);
        let red = document.querySelector(`#red`);
        let do12 = document.querySelector(`#do12`);
        let do24 = document.querySelector(`#do24`);
        let do36 = document.querySelector(`#do36`);
        let het=0;
        let nohet=0;
        let bla=0;
        let re=0;
        let do1 = 0;
        let do2 = 0;
        let do3 = 0;
        let het1 =0;
        let nohet1=0;
        let bla1=0;
        let re1=0;
        let do11 = 0;
        let do21 = 0;
        let do31 = 0;
    function Colesofortuni(){
        let i = Math.floor(Math.random() * (37 - 1)) + 1;

        chet.addEventListener(`click`, function(){
            if(het==0 && input.value!=``&& input.value<= nochit){
                het1=input.value;
                nochit = nochit-input.value;
                het++
                input.value =0;
                resultNode1.innerHTML = nochit + ` печенек`;
                resultNode.innerHTML=nochit + ` печенек`;
            }
        });
    
        black.addEventListener(`click`, function(){
            if(bla==0 && input.value!=`` && input.value<= nochit){
                bla1=input.value;
                nochit = nochit-input.value;
                bla++
                input.value =0;
                resultNode1.innerHTML = nochit + ` печенек`;
                resultNode.innerHTML=nochit + ` печенек`;
            }
        });
        red.addEventListener(`click`, function(){
            if(re==0 && input.value!=``&& input.value<= nochit){
                re1=input.value;
                nochit = nochit-input.value;
                re++
                input.value =0;
                resultNode1.innerHTML = nochit + ` печенек`;
                resultNode.innerHTML=nochit + ` печенек`;
            }
        });

    
        do12.addEventListener(`click`, function(){
            if(do1==0 && input.value!=``&& input.value<= nochit){
                do11=input.value;
                nochit = nochit-input.value;
                do1++;
                input.value =0;
                resultNode1.innerHTML = nochit + ` печенек`;
                resultNode.innerHTML=nochit + ` печенек`;
            }
        });
        do24.addEventListener(`click`, function(){
            if(do2==0 && input.value!=``&& input.value<= nochit){
                do21=input.value;
                nochit = nochit-input.value;
                do2++;
                input.value =0;
                resultNode1.innerHTML = nochit + ` печенек`;
                resultNode.innerHTML=nochit + ` печенек`;
            }
        });
        do36.addEventListener(`click`, function(){
            if(do3==0 && input.value!=``&& input.value<= nochit){
                do31=input.value;
                nochit = nochit-input.value;
                do3++
                input.value =0;
                resultNode1.innerHTML = nochit + ` печенек`;
                resultNode.innerHTML=nochit + ` печенек`;
            }
        });

        setTimeout(function(){
        
            number.innerHTML=`<img class="start" src="./assets/coleso/${i}.jpg">`
            if(het==1){
                het=0;
            
        
                if(i==2 || i==4 ||i==6 || i==8 ||i==10 || i==12 ||i==14 || i==16 ||i==18 || i==20 ||i==22 || i==24 ||i==26 || i==28 ||i==30 || i==32 ||i==34 || i==36){
                    het1=het1*2;
                    nochit = nochit+het1;
                    resultNode1.innerHTML = nochit + ` печенек`;
                    resultNode.innerHTML=nochit + ` печенек`;
                    st1.innerHTML=`ставка чётное выйграла. `;
                    
                }else{
                
                    st1.innerHTML=`ставка чётное проиграла. `;
                }
            }
            if(nohet==1){
                nochet=0;
                
        
                if(i==1 || i==3 ||i==5 || i==7 ||i==9 || i==11 ||i==13 || i==15 ||i==17 || i==19 ||i==21 || i==23 ||i==25 || i==27 ||i==29 || i==31 ||i==33 || i==35){
                    nohet1=nohet*2;
                    nochit = nochit+nohet1;
                    resultNode1.innerHTML = nochit + ` печенек`;
                    resultNode.innerHTML=nochit + ` печенек`;
                    st2.innerHTML=`ставка нечётное выйграла. `;
            }else{
                
                    st2.innerHTML=`ставка нечётное проиграла. `;
                }
            }
            if(bla==1){
                bla=0;
            
        
                if(i==1 || i==3 ||i==5 || i==7 ||i==9 || i==11 ||i==13 || i==15 ||i==17 || i==19 ||i==21 || i==23 ||i==25 || i==27 ||i==29 || i==31 ||i==33 || i==35){
                    bla1=bla1*2;
                    nochit = nochit+bla1;
                    resultNode1.innerHTML = nochit + ` печенек`;
                    resultNode.innerHTML=nochit + ` печенек`;
                    st3.innerHTML=`ставка чёрное выйграла. `;
                }else{
                
                    st3.innerHTML=`ставка чёрное проиграла. `;
                }
            }
            if(re==1){
                re=0;
            
        
                if(i==2 || i==4 ||i==6 || i==8 ||i==10 || i==12 ||i==14 || i==16 ||i==18 || i==20 ||i==22 || i==24 ||i==26 || i==28 ||i==30 || i==32 ||i==34 || i==36){
                    re1=re1*2;
                    nochit = nochit+re1;
                    resultNode1.innerHTML = nochit + ` печенек`;
                    resultNode.innerHTML=nochit + ` печенек`;
                    st4.innerHTML=`ставка красное выйграла. `;
                }else{
                
                  st4.innerHTML=`ставка красное проиграла. `;
                }
            }

            if(do1==1){
            
            
             do1=0;
              if(i<=12){
                    do11=do11*3;
                    nochit = nochit+do11;
                    resultNode1.innerHTML = nochit + ` печенек`;
                    resultNode.innerHTML=nochit + ` печенек`;
                    st5.innerHTML=`ставка от 1 до 12 выйграла. `;
              }else{
                
                st5.innerHTML=`ставка от 1 до 12 проиграла. `;
               }
         }
           if(do2==1){
               do2=0;
            
        
                if(i>=13 && i<=24){
                    do21=do21*3;
                    nochit = nochit+do21;
                    resultNode1.innerHTML = nochit + ` печенек`;
                    resultNode.innerHTML=nochit + ` печенек`;
                  st6.innerHTML=`ставка от 13 до 24 выйграла. `;
               }else{
                
                    st6.innerHTML=`ставка от 13 до 24 проиграла. `;
                }
           }
         if(do3==1){
                do3=0;
            
             if(i<=36 && i>=25){
                do31=do31*3;
                nochit = nochit+do31;
                resultNode1.innerHTML = nochit + ` печенек`;
                    resultNode.innerHTML=nochit + ` печенек`;
                 st7.innerHTML=`ставка от 25 до 36 выйграла. `;
              }else{
                
                  st7.innerHTML=`ставка от 25 до 36 проиграла. `;
              }
          }
        }, 20000)}
    if(game11==1){
        Colesofortuni()
        setInterval(Colesofortuni, 30000)
    
        setInterval(function(){
          number.innerHTML=``
          st1.innerHTML =``;
          st2.innerHTML =``;
           st3.innerHTML =``;
           st4.innerHTML =``;
           st5.innerHTML=``;
           st6.innerHTML=``;
            st7.innerHTML=``;
        }, 30000)  
        nochet.addEventListener(`click`, function(){
           if(nohet==0 && input.value!=``){
            
            nochit = nochit-input.value;
            nohet++
            input.value =0;
            resultNode1.innerHTML = nochit + ` печенек`;
            resultNode.innerHTML=nochit + ` печенек`;
            }
        });
    }
    }
    }
        
      

    
    

    coleso()
    
}







// колесо






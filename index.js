

const vaderHealhArr = [...Array(10).keys()]
//const div_arr = ["C13/C14 Calculator", "Road works API", "ML Customer Prediction", "Binaric Static Generator", "Chef Robotiks"]

function redirectAfterDelay(target, ms = 1000) {
  
  window.__redirectScheduled = true;

  setTimeout(() => window.location.replace(target), ms);
}

// document.addEventListener("DOMContentLoaded", () => {
//   const page = window.location.pathname.split("/").pop();

//   if (page === "loadingPage.html") {
//     redirectAfterDelay("./textScrollSW.html", 1500);
//   }

//   if (page === "loadingPageGame.html") {
//     redirectAfterDelay("./gamePage.html", 1500);
//   }
// });





function showBabyYoda(){
    const babyYodaImg = document.getElementById('baby-yoda-container');



    let opacity = 0;


    if(opacity!==1){

        setInterval(()=>{
            opacity = opacity + 0.05;
            babyYodaImg.style.opacity = opacity;
        }, 150)
    }
   


}

function moveBabyYoda(){
    
    const babyYodaImg = document.getElementById('baby-yoda-container');
    const textBox = document.getElementById('text-container');
    const newTextBox = document.getElementById('text-container-pressed');
    textBox.remove()

    let x = 0;
    let opacity = 0;

    
    setInterval(()=>{

            x = x+0.35;
            opacity = opacity +0.01;
            if(x<45){
                babyYodaImg.style.left = x + 'vw';
                newTextBox.style.opacity = opacity + '';

                
            }
            else{
                window.location.replace('./gamePage.html')
            }   

    }, 10)
 


}





function moveUpDown(y_pos) {
    var babyYoda = document.getElementById('baby-yoda');
    
    
    let topBottomInt = Number(babyYoda.style.top.slice(0, -2));
    

    if(topBottomInt >= -80 && topBottomInt <= 640){

        babyYoda.style.top = y_pos +'px';
    }
    if(Number(babyYoda.style.top.slice(0, -2)) <= -80){
        babyYoda.style.top = -80 + 'px';
    }
    if(Number(babyYoda.style.top.slice(0, -2)) > 640){
        babyYoda.style.top = 640 + 'px';
    }

   
  }

  function moveLeftRight(x_pos){
    var babyYoda = document.getElementById('baby-yoda');
   
    let leftRightInt = Number(babyYoda.style.left.slice(0, -2));

    console.log( babyYoda.style.left.slice(0, -2))


    if(leftRightInt >= -60 && leftRightInt <= 1260){
        
        babyYoda.style.left = x_pos +'px';
    }
    if(leftRightInt <= -60){
        babyYoda.style.left = -59.5 + 'px';
    }
    if(leftRightInt > 1260){
        babyYoda.style.left = 1250 + 'px';
    }

  }

  function update(){
    document.addEventListener('keydown', moveYoda);
 }





function moveYoda(e){
    var move = document.getElementById("baby-yoda").getBoundingClientRect();

    // var babyYoda = document.getElementById('baby-yoda');

    // clampBabyYoda(babyYoda);

    

    var left = parseInt(move.left, 10);
    var top = parseInt(move.top, 10) ;

    if(e.keyCode === 37){
        moveLeftRight( left-30);

       
    }
    if(e.keyCode === 39){

        moveLeftRight( left+30);
        
    }
    //up
    if(e.keyCode === 38){

        moveUpDown( top-80);
        
    }
    

    //down
    

    if(e.keyCode === 40){
        moveUpDown( top+80);
    }

    if(e.keyCode === 32)
    {
        var babyYoda = document.getElementById('baby-yoda')

        let leftRightInt = Number(babyYoda.style.left.slice(0, -2));
        let topBottomInt = Number(babyYoda.style.top.slice(0, -2));

        var energyBall = document.createElement('div')
        energyBall.style.width = 15 + 'px';
        energyBall.style.height = 7 + 'px';
        energyBall.style.position = 'absolute';
        energyBall.style.top = (topBottomInt + 149) + 'px';
        energyBall.style.left = (leftRightInt+135)+'px';
        energyBall.style.zIndex = '5';
        energyBall.style.borderRadius = '9999px';
        energyBall.style.background = 'aqua';
        energyBall.style.boxShadow = ' 0px 0px 10px white'

        document.body.appendChild(energyBall);

        moveEnergyBall()

        function moveEnergyBall(){
            var vader = document.getElementById('vader')
            
            let x = Number(energyBall.style.left.slice(0, -2) );
            console.log(vader.style.right)
                    
            setInterval(()=>{
                //console.log(energyBall.style.top)

                x = x+30
                

             
                    energyBall.style.left =  x + 'px';

                    
                
               if(x > 1005 && Number(energyBall.style.top.slice(0,-2))>=309 && Number(energyBall.style.top.slice(0,-2))<= 549 ){
                   x = -10000;
                   energyBall.remove()
                   vaderHealhArr.pop()
                   setTimeout(()=>{vader.style.opacity = '0.2'},500)
                   setTimeout(()=>{vader.style.opacity = '1'},800)
                   console.log(vaderHealhArr.length)
                   energyBall.style.opacity = '0.01';
                   
               }
               if(vaderHealhArr.length === 0){
                //    window.location.replace('./index.html')

               }
               if(vaderHealhArr.length === 0){
                   
                vader.style.opacity = '0.3'
                   
                   var lightening = document.getElementById('lightening');
                   var textBox = document.getElementById('text-container')
                   textBox.style.opacity = '0.3'
                   lightening.style.opacity = '0.3'
                   setTimeout(()=>{

                    vader.remove()
                    lightening.remove();
                   textBox.remove()
                   }, 3000)
                   
                   setTimeout(()=>{
                       for(let i=0; i<5; i++){
                        let div = document.createElement('div');

                        div.style.width = '65px';
                        div.style.height = '65px';
                        div.style.position = 'absolute';
                        div.style.bottom = `${Math.random() * 38}vh`;
                        div.style.right = `${Math.random() * 38}%`;
                        div.style.background = `rgb(
                                                    ${40+ Math.random() * 250},
                                                    ${ Math.random() * 55},
                                                    ${Math.random() * 10}
                                                    )`;

                        div.style.borderRadius = '50%';
                        div.style.animation = 'buttonFadeIn 1s linear';
                                           setTimeout(()=>{

                    div.remove()

                   }, 350)
                     
                        document.body.appendChild(div)
                       }

                       let button = document.createElement('button');
                       button.style.width = '100px';
                       button.style.height = '50px';
                       button.style.position = 'absolute';
                       button.style.top = '85vh';
                       button.style.left = '45vw';
                       button.style.background = 'lightblue';
                       button.style.borderRadius = '9999px';
                       button.style.opacity = '1'
                       button.style.animation = 'buttonFadeIn 1s linear'
                       
       
                       button.innerHTML = 'Finish';
                       button.onclick = ()=>{
                        window.location.replace('./project.html')
                          
                       }
                          document.body.appendChild(button)
                   }, 2500)

                   
               

               }


            }, 200)
        }

        console.log('energy')

        
    }

}
update();

const starArr = [...Array(180).keys()];

starArr.map((_, index)=>{
    let randomNum = Math.random()*(5-0.09)+0.09;
    var star = document.createElement('span');
    star.style.width = randomNum + 'px';
    star.style.height = randomNum + 'px';
    star.style.position = 'absolute';
    star.style.top = `${(index* Math.random())*35}px`;
    star.style.left = `${(index* Math.random())*35}px`;
    star.style. borderRadius = 50 + '%';
    star.style.background = 'white';
    star.style.zIndex = '-1';
    //star.style.boxShadow = '0px 0px 3px lightblue';
    star.className = 'star';

    document.body.appendChild(star)
    
})
starArr.map((_, index)=>{
    let randomNum = Math.random()*(3-0.09)+0.09;
    var star = document.createElement('span');
    star.style.width = randomNum + 'px';
    star.style.height = randomNum + 'px';
    star.style.position = 'absolute';
    star.style.top = `${(index* Math.random())*35}px`;
    star.style.right = `${(index* Math.random())*35}px`;
    star.style. borderRadius = 50 + '%';
    star.style.background = 'white';
    star.style.zIndex = '-1';
    star.className = 'star';

    document.body.appendChild(star)
    
})
const starArrBlue = [...Array(60).keys()];

starArrBlue.map((_, index)=>{
    let randomNum = Math.random()*(5-0.09)+0.09;
    var star = document.createElement('span');
    star.style.width = randomNum + 'px';
    star.style.height = randomNum + 'px';
    star.style.position = 'absolute';
    star.style.top = `${(index* Math.random()+3)*45}px`;
    star.style.right = `${(index* Math.random()+17)*45}px`;
    star.style. borderRadius = 50 + '%';
    star.style.background = '#a9e4f3';
    star.style.zIndex = '-1';
    star.className = 'star';

    document.body.appendChild(star)
    
})

starArrBlue.map((_, index)=>{
    let randomNum = Math.random()*(3-0.09)+0.09;
    var star = document.createElement('span');
    star.style.width = randomNum + 'px';
    star.style.height = randomNum + 'px';
    star.style.position = 'absolute';
    star.style.top = `${(index* Math.random()+3)*45}px`;
    star.style.left = `${(index* Math.random()+7)*45}px`;
    star.style. borderRadius = 50 + '%';
    star.style.background = '#b395f7';
    star.style.zIndex = '-1';
    star.className = 'star';

    document.body.appendChild(star)
    
})
starArrBlue.map((_, index)=>{
    let randomNum = Math.random()*(3-0.09)+0.09;
    var star = document.createElement('span');
    star.style.width = randomNum + 'px';
    star.style.height = randomNum + 'px';
    star.style.position = 'absolute';
    star.style.top = `${(index* Math.random()+3)*35}px`;
    star.style.left = `${(index* Math.random()+7)*35}px`;
    star.style. borderRadius = 50 + '%';
    star.style.background = '#ebb520';
    star.style.zIndex = '-1';
    star.className = 'star';

    document.body.appendChild(star)
    
})
starArrBlue.map((_, index)=>{
    let randomNum = Math.random()*(3-0.09)+0.09;
    var star = document.createElement('span');
    star.style.width = randomNum + 'px';
    star.style.height = randomNum + 'px';
    star.style.position = 'absolute';
    star.style.top = `${(index* Math.random()+13)*40}px`;
    star.style.right = `${(index* Math.random()+7)*35}px`;
    star.style. borderRadius = 50 + '%';
    star.style.background = 'hsl(56, 86%, 48%)';
    star.style.zIndex = '-1';
    star.className = 'star';
    document.body.appendChild(star)
    
})


// function gotToGamePage(){

//     window.location.replace('./loadingPageGame.html')

// }

function clampBabyYoda(id){
    
    // console.log(id.style.top)
    // if(id.style.top <= '0px'){
    //     console.log('clamp')
    //     id.style.top = 0 + 'px';
    // }

}

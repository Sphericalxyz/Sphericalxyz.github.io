//most unefficient block of code ever. Beware.
let home = document.getElementById('abc');
let nav2 = document.getElementById('xyz1');
let nav3 = document.getElementById('xyz2');
let nav4 = document.getElementById('xyz3');
let nav5 = document.getElementById('xyz4');
let generalArea = document.getElementById('navarea');

function fixLoad(){
  home.style.cssText = "font-size: 22px; padding: 3px; border-bottom: 4px solid #E75480; transition: ease-in-out;"
}

function homeEnter() {
  timeoutID = setTimeout(function(){
    nav2.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav3.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav4.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav5.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    $("#abc").removeClass('leavehover').addClass('permahover');
    $("#xyz1").removeClass('permahover').addClass('leavehover');
    $("#xyz2").removeClass('permahover').addClass('leavehover');
    $("#xyz3").removeClass('permahover').addClass('leavehover');
    $("#xyz4").removeClass('permahover').addClass('leavehover');
}, 250);
};


function enter1() {
  timeoutID = setTimeout(function(){
    home.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav3.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav4.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav5.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    $("#xyz1").removeClass('leavehover').addClass('permahover');
    $("#xyz2").removeClass('permahover').addClass('leavehover');
    $("#xyz3").removeClass('permahover').addClass('leavehover');
    $("#xyz4").removeClass('permahover').addClass('leavehover');
    $("#abc").removeClass('permahover').addClass('leavehover');
}, 250);
};

function enter2() {
  timeoutID = setTimeout(function(){
    home.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav2.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav4.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav5.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    $("#xyz2").removeClass('leavehover').addClass('permahover');   
    $("#xyz1").removeClass('permahover').addClass('leavehover');
    $("#xyz3").removeClass('permahover').addClass('leavehover');
    $("#xyz4").removeClass('permahover').addClass('leavehover');
    $("#abc").removeClass('permahover').addClass('leavehover');
}, 250);
};

function enter3() {
  timeoutID = setTimeout(function(){
    home.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav2.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav3.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav5.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    $("#xyz3").removeClass('leavehover').addClass('permahover');
    $("#xyz1").removeClass('permahover').addClass('leavehover');
    $("#xyz2").removeClass('permahover').addClass('leavehover');
    $("#xyz4").removeClass('permahover').addClass('leavehover');
    $("#abc").removeClass('permahover').addClass('leavehover');
}, 250);
};

function enter4() {
  timeoutID = setTimeout(function(){
    home.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav2.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav3.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    nav4.style.cssText = "font-size: 14px; padding: 0px; border-bottom: none; transition: ease-in-out;"
    $("#xyz4").removeClass('leavehover').addClass('permahover'); 
    $("#xyz1").removeClass('permahover').addClass('leavehover');
    $("#xyz2").removeClass('permahover').addClass('leavehover');
    $("#xyz3").removeClass('permahover').addClass('leavehover'); 
    $("#abc").removeClass('permahover').addClass('leavehover');
}, 250);
};

//so unefficient... but im lazzyyyy
function leave1(){
  setTimeout(function(){
    $("#abc").removeClass('leavehover').addClass('permahover');
    $("#xyz1").removeClass('permahover').addClass('leavehover');
}, 150);
clearTimeout(timeoutID)
}

function leave2(){
  setTimeout(function(){
    $("#abc").removeClass('leavehover').addClass('permahover');
    $("#xyz2").removeClass('permahover').addClass('leavehover');
}, 150);
clearTimeout(timeoutID)
}

function leave3(){
  setTimeout(function(){
    $("#abc").removeClass('leavehover').addClass('permahover');
    $("#xyz3").removeClass('permahover').addClass('leavehover');
}, 150);
clearTimeout(timeoutID)
}

function leave4(){
  setTimeout(function(){
    $("#abc").removeClass('leavehover').addClass('permahover');
    $("#xyz4").removeClass('permahover').addClass('leavehover');
}, 150);
clearTimeout(timeoutID)
}

home.addEventListener('mouseenter', homeEnter);
 let hovered1 = document.getElementById('xyz1');

hovered1.addEventListener('mouseenter', enter1);

generalArea.addEventListener('mouseleave', leave1);
//2
 let hovered2 = document.getElementById('xyz2');

hovered2.addEventListener('mouseenter', enter2);

generalArea.addEventListener('mouseleave', leave2);
//3
 let hovered3 = document.getElementById('xyz3');

hovered3.addEventListener('mouseenter', enter3);

generalArea.addEventListener('mouseleave', leave3);

//4
 let hovered4 = document.getElementById('xyz4');

hovered4.addEventListener('mouseenter', enter4);

generalArea.addEventListener('mouseleave', leave4);

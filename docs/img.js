/////////////////////////////////
//// github.com/szumaster //////
///////////////////////////////

/*function swipe() {
   var largeImage = document.getElementById('img2');
   largeImage.style.display = 'block';
   largeImage.style.width=200+"px";
   largeImage.style.height=200+"px";
   var url=largeImage.getAttribute('src');
   window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}*/

function initlb(src) {
   let lightbox = document.createElement('div');
   lightbox.setAttribute('style',`position: fixed;z-index:1000;top: 0;left: 0; width: 100%; height: 100vh;background-color: #fff;background-position: center center; background-repeat: no-repeat;`);
   lightbox.style.backgroundImage = "url('" + src + "')";
   lightbox.style.display = 'block';
   lightbox.classList.add('lightbox');
   let closebutton = document.createElement('span');
   closebutton.setAttribute('style','padding:5px 10px 5px 10px;background:#000;color:#fff;position:absolute;top:0;right:0;font-family:inherit;color:#fff;cursor:pointer;');
   closebutton.classList.add('close_button');
   closebutton.innerHTML = '[x]close';
   lightbox.append(closebutton);
   document.getElementsByTagName('body')[0].append(lightbox);
   closebutton.addEventListener('click',()=> { lightbox.remove() });
   }
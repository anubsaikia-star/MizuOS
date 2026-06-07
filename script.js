if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('SW registered:', reg))
      .catch(err => console.log('SW failed:', err));
  });
}

let widbu = 0;

document.getElementById("widbu").addEventListener('click', ()=>{
    widbu++;
    if ( widbu == 1){
            document.getElementById("widbar").style.animation = ".3s widbu linear";
            document.getElementById("widbar").style.display = "block";
    }if ( widbu == 2){
        document.getElementById("widbar").style.display = "none";
        widbu = 0;
    }
        });
        
document.getElementById("qapp1").addEventListener('dblclick', ()=>{
            window.location.href = "tel: ";
        });
document.getElementById("qapp2").addEventListener('dblclick', ()=>{
            window.location.href = "fluid/fluidcalculator.html";
        });
document.getElementById("qapp3").addEventListener('dblclick', ()=>{
            window.location.href = "gallery://"
        });
document.getElementById("qapp4").addEventListener('dblclick', ()=>{
            
        });
document.getElementById("qapp5").addEventListener('dblclick', ()=>{
            
        });
document.getElementById("qapp6").addEventListener('dblclick', ()=>{
            
        });
document.getElementById("qapp7").addEventListener('dblclick', ()=>{
            window.location.href = 'https://www.google.com';
        });
        
let clickedOnce = false;
document.getElementById('allappbu').addEventListener('click', () => {
    if (!clickedOnce) {
        // First click
        document.getElementById('drawer').style.marginTop = '2vh';
        clickedOnce = true;
    } else {
        // Second click
        document.getElementById('drawer').style.marginTop = '100vh';
        clickedOnce = false;
    }
});
 const drawer = document.getElementById('drawer');
 
document.getElementById('closeDrawer').addEventListener('click', ()=>{
   drawer.style.marginTop = '100vh';
});

document.addEventListener('click', (e) => {
 
  if (drawer.style.marginTop.value == "2vh"){
  // Agar click div ke andar nahi hua AND div ke button pe bhi nahi hua
  if (!drawer.contains(e.target) && e.target.id !== 'openBtn') {
    drawer.style.marginTop = '100vh';
  }
  }
});
const homepage = document.getElementById('homepage');
const popup = document.getElementById('popup');
let holdTimer;

homepage.addEventListener('pointerdown', (e) => {
  holdTimer = setTimeout(() => {
    const rect = homepage.getBoundingClientRect();
    popup.style.left = (e.clientX - rect.left) + 'px';
    popup.style.top = (e.clientY - rect.top) + 'px';
    popup.classList.remove('hidden');
  }, 500);
});

homepage.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
    const rect = homepage.getBoundingClientRect();
    popup.style.left = (e.clientX - rect.left) + 'px';
    popup.style.top = (e.clientY - rect.top) + 'px';
    popup.classList.remove('hidden');
});


homepage.addEventListener('pointerup', () => clearTimeout(holdTimer));
homepage.addEventListener('pointerleave', () => clearTimeout(holdTimer));

// don’t hide when clicking inside the popup
popup.addEventListener('pointerdown', (e) => e.stopPropagation());

// hide when clicking outside homepage
document.addEventListener('pointerdown', () => {
  
    popup.classList.add('hidden');
});

document.getElementById('action1').addEventListener('click', ()=>{
    sessionStorage.setItem('justRefreshed','true');
    location.reload(true);
});

window.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('justRefreshed')) {
    console.log('Webapp successfully refreshed');
    // Show a toast, run init code, etc.
    
    sessionStorage.removeItem('justRefreshed'); // clear so it doesn’t fire again
  }
});

const wallpaperInput = document.createElement('input');
wallpaperInput.type = 'file'
wallpaperInput.accept = 'image/*';

document.getElementById('action2').addEventListener('click', ()=>{
   wallpaperInput.click(); 
});

wallpaperInput.addEventListener('change', (e)=>{
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ()=> {
        document.getElementById("homepage").style.backgroundImage = `url(${reader.result})`;
    }
    reader.readAsDataURL(file);
});

// Galat: har scroll pe DOM touch
window.addEventListener('scroll', () => {
  el.style.top = window.scrollY + 'px';
});

// Sahi: rAF use kar
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      el.style.transform = `translateY(${window.scrollY}px)`;
      ticking = false;
    });
    ticking = true;
  }
}, {passive: true});
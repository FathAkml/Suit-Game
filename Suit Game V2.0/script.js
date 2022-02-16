// agar nilainya berubah letakan variabel di scope luar
let sPlayer = 0;
let sComp = 0;



function getPilihanComp(){
 const comp = Math.random();
 if (comp < 0.34) return 'gajah';
 if (comp >= 0.34 && comp < 0.67) return 'orang';
 return 'semut';
}

function getHasil(comp, player){
  if (player == comp) return 'SERI!';
  if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
  if (player == 'orang') return (comp == 'semut') ? 'MENANG!' : 'KALAH!';
  if (player == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
}

function putar(){
  const imgComp = document.querySelector('.img-comp');
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function(){
    if ( new Date().getTime() - waktuMulai > 1000 ){
      clearInterval;
      return;
    }
    imgComp.setAttribute('src', 'img/'+gambar[i++]+'.png');
    if(i == gambar.length) i = 0;
  }, 100)
}

const pilihan = document.querySelectorAll('li img');

pilihan.forEach(function(pil) {
  pil.addEventListener('click', function() {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);

    putar();
  
  setTimeout(function(){
    const imgComp = document.querySelector('.img-comp');
    imgComp.setAttribute('src', 'img/' + pilihanComp + '.png');
    
    const info = document.querySelector('.info');
    info.innerHTML = hasil;
    
    const scoreP = document.querySelector('.score-p');

    const scoreC = document.querySelector('.score-c');
    
    if (hasil == 'MENANG!') {
      sPlayer += 1;
      scoreP.innerHTML = sPlayer;
      info.style.backgroundColor = 'royalblue';
    } else if (hasil == 'KALAH!') {
      sComp += 1;
      scoreC.innerHTML = sComp;
      info.style.backgroundColor = 'darkred';
    } else {
      info.style.backgroundColor = 'seagreen';
    }
    
  }, 1000)
  });
});




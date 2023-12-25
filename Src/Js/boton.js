console.log("😼");

const btnCentroIzquierda = document.querySelector("#btnCentroIzquierda");
const btnCentroDerecha = document.querySelector("#btnCentroDerecha");

let contPag1 = 0;

let contadorOrdenBtn = 0;

btnCentroDerecha.addEventListener('click', (e) => {
  e.preventDefault
  const pagina1 = document.querySelector('.pagina1');
  const pagina2 = document.querySelector('.pagina2');
  console.log("0")

    if (contPag1 === 0 && contadorOrdenBtn === 1) {
      pagina1.style.transform = 'rotateY(-180deg)';
      pagina2.style.transform = 'rotateY(-180deg)';
      console.log("1");
      contPag1 += 1;
      contadorOrdenBtn +=1;
      console.log(contadorOrdenBtn);
    } else if (contadorOrdenBtn === 2) {
      pagina1.style.transform = 'rotateY(0deg)';
      pagina2.style.transform = 'rotateY(0deg)';
      console.log("2");
      contPag1 -= 1;
      contadorOrdenBtn -=1;
      console.log(contadorOrdenBtn);
    };
});

let contPag2 = 0;
btnCentroIzquierda.addEventListener('click', (e) => {
  const pagina3 = document.querySelector('.pagina3');
  const pagina4 = document.querySelector('.pagina4');

    if (contPag2 === 0 && contadorOrdenBtn === 0) {
      pagina3.style.transform = 'rotateY(-180deg)';
      pagina4.style.transform = 'rotateY(-180deg)';
      console.log("3");
      contPag2 += 1;
      contadorOrdenBtn +=1;
      console.log(contadorOrdenBtn);
    } else if (contadorOrdenBtn === 1){
      pagina3.style.transform = 'rotateY(0deg)';
      pagina4.style.transform = 'rotateY(0deg)';
      console.log("4");
      contPag2 -=1
      contadorOrdenBtn -=1;
      console.log(contadorOrdenBtn);
    };
});

const btnDetener = document.querySelector("#btnDetener");
let contM1 = 0;
const musica1 = document.querySelector("#musica1");
const btnMusica1 = document.querySelector("#btnMusica1");

let contM2 = 0;
const musica2 = document.querySelector("#musica2");
const btnMusica2 = document.querySelector("#btnMusica2");

let contM3 = 0;
const musica3 = document.querySelector("#musica3");
const btnMusica3 = document.querySelector("#btnMusica3");

let contM4 = 0;
const musica4 = document.querySelector("#musica4");
const btnMusica4 = document.querySelector("#btnMusica4");

btnDetener.addEventListener( 'click', (e) => {
  e.preventDefault();
  musica1.pause();
  musica1.currentTime = 0;
  contM1 = 0;
  musica2.pause();
  musica2.currentTime = 0;
  contM2 = 0;
  musica3.pause();
  musica3.currentTime = 0;
  contM3 = 0;
  musica4.pause();
  musica4.currentTime = 0;
  contM4 = 0;
});

btnMusica1.addEventListener( 'click', (e) => {
  e.preventDefault();

  musica2.pause();
  musica2.currentTime = 0;
  contM2 = 0;
  musica3.pause();
  musica3.currentTime = 0;
  contM3 = 0;
  musica4.pause();
  musica4.currentTime = 0;
  contM4 = 0;

  if( contM1 === 0){
    musica1.play();
    contM1 += 1;
  }else if ( contM1 === 1){
    musica1.pause();
    musica1.currentTime = 0;
    contM1 -= 1;
  };
});

btnMusica2.addEventListener( 'click', (e) => {
  e.preventDefault();

  musica1.pause();
  musica1.currentTime = 0;
  contM1 = 0;
  musica3.pause();
  musica3.currentTime = 0;
  contM3 = 0;
  musica4.pause();
  musica4.currentTime = 0;
  contM4 = 0;

  if( contM2 === 0){
    musica2.play();
    contM2 += 1;
  }else if ( contM2 === 1){
    musica2.pause();
    musica2.currentTime = 0;
    contM2 -= 1;
  };
});

btnMusica3.addEventListener( 'click', (e) => {
  e.preventDefault();

  musica1.pause();
  musica1.currentTime = 0;
  contM1 = 0;
  musica2.pause();
  musica2.currentTime = 0;
  contM2 = 0;
  musica4.pause();
  musica4.currentTime = 0;
  contM4 = 0;

  if( contM3 === 0){
    musica3.play();
    contM3 += 1;
  }else if ( contM3 === 1){
    musica3.pause();
    musica3.currentTime = 0;
    contM3 -= 1;
  };
});

btnMusica4.addEventListener( 'click', (e) => {
  e.preventDefault();

  musica1.pause();
  musica1.currentTime = 0;
  contM1 = 0;
  musica2.pause();
  musica2.currentTime = 0;
  contM2 = 0;
  musica3.pause();
  musica3.currentTime = 0;
  contM3 = 0;

  if( contM4 === 0){
    musica4.play();
    contM4 += 1;
  }else if ( contM4 === 1){
    musica4.pause();
    musica4.currentTime = 0;
    contM4 -= 1;
  };
});

const controlVolumen = document.querySelector("#controlVolumen");

controlVolumen.value = 0.1;
musica1.volume = controlVolumen.value;
musica2.volume = controlVolumen.value;
musica3.volume = controlVolumen.value;
musica4.volume = controlVolumen.value;

controlVolumen.addEventListener( 'input', (e) => {
  e.preventDefault();

  musica1.volume = controlVolumen.value;
  musica2.volume = controlVolumen.value;
  musica3.volume = controlVolumen.value;
  musica4.volume = controlVolumen.value;
});
// const cesto = ["mela", "banana", "arancia", "prugna"];

// for(let i=0; i < cesto.length; i++){
//     const frutto = cesto[i];    
//     if(frutto !== 'mela' ){
//         console.log(frutto);
//     }
// }



// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// MILESTONE 1
// Per prima cosa, creiamo il markup statico: 
// costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. 
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


const slide = [
    'https://booleancareers.slack.com/files/U019PBPM0F8/F046JSCJ14Z/01.webp',
    'https://booleancareers.slack.com/files/U019PBPM0F8/F046JSD41PB/02.webp',
    'https://booleancareers.slack.com/files/U019PBPM0F8/F045ZK0144E/03.webp',
    'https://booleancareers.slack.com/files/U019PBPM0F8/F04667KGQSW/04.webp',
    'https://booleancareers.slack.com/files/U019PBPM0F8/F04667KGQSW/05.webp'
  ]

  const slideElement = document.querySelector('.slide')

  for(i = 0; i < slide.length; i++){
    const linkSlide = slide[i];
    
    const slideStructure = `<img class="${i === linkSlide ? 'active' : ''}" src="${linkSlide}" alt="">`
    
    slideElement.insertAdjacentHTML('beforeend', slideStructure)
  


    console.log(linkSlide);
  }

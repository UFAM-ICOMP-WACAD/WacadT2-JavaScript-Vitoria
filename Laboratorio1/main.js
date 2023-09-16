document.addEventListener('DOMContentLoaded', function () {
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'Um gato fofo estava no telhado, quando de repente :inserty:. Todos ficaram surpresos ao ver o gatinho :insertz:. Maria, correu para ajudar — :insertx:. Felizmente, o gatinho caiu de pé.';
const insertX = ['o gatinho estava ileso', 'o gatinho saiu correndo', 'o gatinho miou feliz'];
const insertY = ['ele escorregou e caiu', 'ele pulou para o chão', 'ele deslizou até o chão'];
const insertZ = ['Maria o pegou no ar', 'Maria começou a rir', 'Maria olhou com ternura'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Maria', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(3)} kg`; 
    const temperature =  `${Math.round(25)} graus Celsius`; 
    newStory = newStory.replaceAll('Um gato fofo estava no telhado', `Em um dia ensolarado, um gato fofo estava no telhado com uma temperatura de ${temperature}`);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
});
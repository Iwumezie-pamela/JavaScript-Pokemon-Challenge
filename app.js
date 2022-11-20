// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/

const container = document.querySelector('#container')

const baseURL='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++) {
    const theDiv = document.createElement('div')   //the images would be in the div
    theDiv.classList.add('pokemon')
    const label = document.createElement('span') //for numbering
    label.innerText = `#${i}`;
  const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`

    theDiv.appendChild(newImg)
    theDiv.appendChild(label)
     container.appendChild(theDiv)
    
}
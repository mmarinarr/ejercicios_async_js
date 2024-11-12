async function getCharacterInfo(){
  try {
      const respuesta = await fetch("https://thronesapi.com/api/v2/Characters");
      const datos = await respuesta.json();
      
      const select = document.querySelector("#character-list");
      datos.forEach(character =>{
      const option = document.createElement("option");
      option.value = character.fullName;
      option.textContent = character.fullName;
      select.appendChild(option)
      return option;
  
      });
      const defaultCharacter = datos[0];
      printCharacterImage(defaultCharacter);
      
      select.addEventListener('change', (event) => {
          const selectedCharacterName = event.target.value;
          const selectedCharacter = datos.find(character => character.fullName === selectedCharacterName);
          if (selectedCharacter) {
              printCharacterImage(selectedCharacter);
          }
      });

  } catch (error) {
      console.log("Error al obtener los datos");
      
  }
};

const printCharacterImage = (character) => {
  const characterImage = document.querySelector(".character-image");
  characterImage.innerHTML = `
      <h2>${character.fullName}</h2>
      <img src="${character.imageUrl}" alt="${character.fullName}" width="400px">
      <h3>"${character.title}"<h3>
  `;
};

getCharacterInfo(); 
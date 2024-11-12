async function getCharacterImage() {
    try {
      const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/1');
      const datos = await respuesta.json();
      
      // Selecciona el elemento <select> donde se agregarán los nombres de los personajes
      const select = document.getElementsByClassName("random-image");
      
        const image = document.createElement("img");
        image.value = usuario.id;             
        image.textContent = usuario.fullName;     
        select.appendChild(image);            
  
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  }
  
  getCharacterImage();
  
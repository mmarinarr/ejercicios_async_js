async function getCharacterInfo() {
  try {
    const respuesta = await fetch('https://thronesapi.com/api/v2/Characters');
    const datos = await respuesta.json();
    
    const select = document.getElementById("character-list");
    
    datos.forEach(usuario => {
      const opcion = document.createElement("option");
      opcion.value = usuario.id;             
      opcion.textContent = usuario.fullName;     
      select.appendChild(opcion);            
    });

    const imageContainer = document.getElementsByClassName("character-image")[0];

    select.addEventListener("change", () => {

      const selectedId = select.value;
      const usuarioSeleccionado = datos.find(usuario => usuario.id == selectedId);

      if (usuarioSeleccionado) {
        console.log("Image URL from API:", usuarioSeleccionado.image);

        const img = document.createElement("img"); 
        img.src = usuarioSeleccionado.image;       
        img.alt = usuarioSeleccionado.fullName;    
        imageContainer.appendChild(img);        
      }
    });

  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

getCharacterInfo();



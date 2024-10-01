const añadirTarea = () => {
    // obtener el valor del input
    const tareaInput = document.getElementById('tareaNova');
    const tarea = tareaInput.value;

    // crear y añadir el nuevo elemento de lista
    const li = document.createElement('li');
    li.textContent = tarea;
    document.getElementById('llistaTasques').appendChild(li);

    // Crear el botón de eliminación
    const deleteButton = document.createElement('button');
    deleteButton.textContent = ' Eliminar';
    deleteButton.className = 'delete-btn';

    // Botón eliminar usando función flecha
    deleteButton.onclick = () => eliminarTarea(li);

    // Añadir el botón a la lista
    li.appendChild(deleteButton);
};

// función eliminar usando función flecha
const eliminarTarea = (tarea) => {
    tarea.remove();
};

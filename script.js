const notes = [];

class NotesCreator {

    // Creation of intances for notes
    constructor(title, body, date) {
        this.title = title;
        this.body = body;
        this.date = date;
    }
/*
getNotes () {
    console.log(notes)
}
*/
}


function createNote(title, body, date, ) {
    const newNote = new NotesCreator(title, body, date);
    notes.push(newNote)
    alert("La nota ha sido creada!,")
}

function readNote(){

}

function updateNote(){
    
}

function deleteNote(){
    
}

function main() {
    let userInput = prompt('Bienvenido al creador de notas, para crear una nota escribe: "Create", para leer una nota escribe: "Read", para actualizar la nota escribe: "Update" y para borrar una nota: "Delete".')

    while (userInput.toLowerCase() !== 'exit') {
        if (userInput.toLowerCase() === 'create') {
            let title = prompt("Titulo de la nota: ");
            let body = prompt("Escribe la nota: ");
            let date = new Date().toLocaleString();
            createNote(title, body, date);
        } 
        else if (userInput.toLowerCase() === 'read') {
            let title = prompt("Escribe el nombre de la nota que quieres leer")
            notes.find(title)
        }
        else if (userInput.toLowerCase() === 'update') {

        }
        else if (userInput.toLowerCase() === 'delete') {

        }
        alert(notes)
        userInput = prompt('Escriba "Create", "Read", "Update", "Delete" o "Exit" para salir');
    }
}

main();
alert("Gracias por usar el simulador de creador de notas!")
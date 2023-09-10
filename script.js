const notes = [];


// Creation of intances for notes
class NotesCreator {

    constructor(title, body, date) {
        this.title = title;
        this.body = body;
        this.date = date;
        this.data = () => (`Tilte: ${this.title}\nBody: ${this.body}\nDate: ${this.date}`);
           
    }

}
// CRUD functions

function createNote(title, body, date, ) {
    const newNote = new NotesCreator(title, body, date);
    notes.push(newNote)
    alert("La nota ha sido creada!,")
}

function readNote(title){
    const noteToRead = notes.find(note => note.title === title);
    if (noteToRead) {
        alert(noteToRead.data())
    }
    else {
        alert("No tienes esa nota creada :c")
    }
}

function updateNote(title, body){
    
}

function deleteNote(title){
    
}


// MAIN program

function main() {
    let userInput = prompt('Bienvenido al creador de notas, para crear una nota escribe: "Create", para leer una nota escribe: "Read", para actualizar la nota escribe: "Update" y para borrar una nota: "Delete"., hay algunos comandos escondidos; descubrelos :)')

    while (userInput.toLowerCase() !== 'exit') {
        if (userInput.toLowerCase() === 'create') {
            let title = prompt("Titulo de la nota: ");
            let body = prompt("Escribe la nota: ");
            let date = new Date().toLocaleString();
            createNote(title, body, date);
        } 
        else if (userInput.toLowerCase() === 'read') {
            let titleToRead = prompt("Escribe el nombre de la nota que quieres leer")
            readNote(titleToRead)
        }
        else if (userInput.toLowerCase() === 'update') {

        }
        else if (userInput.toLowerCase() === 'delete') {

        }
        else if (userInput.toLowerCase() === 'all'){
            if (notes.length === 0) {
                alert("No tienes notas creadas aún.");
            } else {
                let allTitles = "Títulos de todas las notas:\n";
                notes.forEach((note) => {
                    allTitles += `- ${note.title}\n`;
                });
                alert(allTitles);
            }
        }
        userInput = prompt('Escriba "Create", "Read", "Update", "Delete" o "Exit" para salir');
    }
}

main();
alert("Gracias por usar el simulador de creador de notas!")
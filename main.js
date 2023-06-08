var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

function ajouterUneTache() {
    if (inputField.value !== "") {
        var paragraph = document.createElement('p');
        
        // Valoriser ce paragraphe avec le contenu de l'input
        paragraph.innerText = inputField.value;

        // Styliser le paragraphe
        paragraph.classList.add('paragraphe_style');

        // Insérer le paragraphe
        toDoContainer.appendChild(paragraph);

        // Vider l'input lorsque le paragraphe est ajouté
        inputField.value = "";

        // Barrer le paragraphe lorsque l'on clique dessus
        paragraph.addEventListener('click', function() {
            paragraph.classList.add('paragraph_click');
            paragraph.classList.remove('paragraph_style');
        });

        // Supprimer le paragraphe lorsque l'on double-clique dessus
        paragraph.addEventListener('dblclick', function() {
            toDoContainer.removeChild(paragraph);
        });
    }
}

// Ajouter un gestionnaire d'événement au bouton "Ajouter"
addToDoButton.addEventListener('click', ajouterUneTache);

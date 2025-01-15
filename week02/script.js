const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

button.addEventListener('click', function() {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        // Create a list item
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        li.append(deleteButton);

        // Append the list item to the unordered list
        list.append(li);

        // Add event listener to the delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

        // Clear the input field and set focus back to it
        input.value = '';
        input.focus();
    } else {
        // If input is blank, set focus back to the input field
        input.focus();
    }
});

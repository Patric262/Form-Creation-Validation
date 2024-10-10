// JavaScript code for fetching and displaying user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = '';  // Clear the loading message

        const userList = document.createElement('ul');  // Create the user list
        users.forEach(user => {
            const listItem = document.createElement('li');  // Create list item
            listItem.textContent = user.name;  // Set user's name as list item content
            userList.appendChild(listItem);  // Append list item to user list
        });

        dataContainer.appendChild(userList);  // Append user list to the container
    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.';  // Display error message
    }
}

// Ensure that fetchUserData is called after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);

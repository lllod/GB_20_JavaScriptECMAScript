document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('users');
    async function getUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Ошибка запроса');
            }
            const users = await response.json();
            displayUsersList(users);
        } catch (error) {
            console.error(`Ошибка получения списка пользователей: ${error}`);
            throw error;
        }
    }

    function displayUsersList(users) {
        users.forEach(i => {
            if (!i.name || !i.username || !i.email) {
                console.warn(`Запрошенные данные отсутствуют у пользователя: ${i}`);
                return;
            }
            const li = document.createElement('li');
            li.textContent = `${i.name} (Логин: ${i.username} | E-Mail: ${i.email})`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.addEventListener('click', () => {
                if (confirm('Вы уверены, что хотите удалить запись?')) {
                    li.remove();
                }
            });

            li.appendChild(deleteButton);
            userList.appendChild(li);
        });
    }

    getUsers().catch(error => {
        console.log(`Ошибка получения списка пользователей: ${error}`);
    });
});

function setTaskToLocalStorage(taskId, taskTitle, taskDescription) {
    localStorage.setItem(taskId, JSON.stringify({
        title: taskTitle,
        description: taskDescription
    }));
}

function readLocalStorage() {
    let array = [];

    for (let index = 0; index < localStorage.length; ++index) {
        const key = localStorage.key(index);
        let { title, description } = JSON.parse(localStorage.getItem(key));

        array[index] = { id: Number(key), title: title, description: description };
    }

    array.sort((a, b) => a.id - b.id);
    array.reverse();

    return array;
}

function deleteTaskFromLocalStorage(taskId) {
    localStorage.removeItem(taskId);

    if (taskId != localStorage.length + 1) {
        while(hasKey(taskId + 1)) {
            localStorage.setItem(taskId, localStorage.getItem(taskId + 1));
            localStorage.removeItem(taskId + 1);

            ++taskId;
        }
    }

    return readLocalStorage();
}

function hasKey(key) {
    return localStorage.getItem(key) !== null;
}

export { setTaskToLocalStorage, readLocalStorage, deleteTaskFromLocalStorage, hasKey };
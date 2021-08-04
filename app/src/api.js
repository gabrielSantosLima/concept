
export async function createNote(title, content) {
    const note = {
        title: title,
        content: content
    }

    return await fetch(`http://localhost:3333/notes`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    }).then(response => response.json())
}

export async function fetchNotes() {
    return await fetch('http://localhost:3333/notes')
    .then(response => response.json())
}

export async function updateNote(id, title, content) {
    const note = {
        title: title,
        content: content
    }

    return await fetch(`http://localhost:3333/notes/${id}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    }).then(response => response.json())
}

export async function deleteNote(id) {
    return await fetch(`http://localhost:3333/notes/${id}`, {
        method: 'DELETE' 
    }).then(response => response.status)
}
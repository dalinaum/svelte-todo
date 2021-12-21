import { writable } from 'svelte/store'

export const storeActions = {
    toggleTodo: id => {
        allTodos.update(todos => {
            const i = todos.findIndex(todo => todo.id === id)
            todos[i].done = !todos[i].done
            return todos
        })
        storeActions.invalidateTodos()
    },

    addTodo: comment => {
        allTodos.update(todos => {
            const length = todos.length
            const id = length > 0 ? todos[length - 1].id + 1 : 1
            todos.push({ id, comment, done: false })
            return todos
        })
        storeActions.invalidateTodos()
    },

    editTodo: (id, comment) => {
        allTodos.update(todos => {
            const i = todos.findIndex(todo => todo.id === id)
            todos[i].comment = comment
            return todos
        })
        storeActions.invalidateTodos()
    },

    deleteTodo: id => {
        allTodos.update(todos => {
            return todos.filter(todo => todo.id !== id)
        })
        storeActions.invalidateTodos()
    },

    enterEditMode: id => editTarget.set(id),

    updateViewMode: mode => {
        viewMode.set(mode)
        storeActions.invalidateTodos()
    },

    invalidateTodos: () => viewMode.subscribe(_viewMode => {
        allTodos.subscribe(all => {
            if (_viewMode === 0) {
                todos.set(all)
                return
            }
            todos.set(all.filter(todo =>
                _viewMode == 1 ? !todo.done : todo.done))
        })
        editTarget.set(-1)
    })
}

export const viewMode = writable(0)

export const editTarget = writable(-1)

export const allTodos = writable([])

export const todos = writable([])
import { FormEvent, useMemo, useState } from 'react';

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = task.trim();

    if (!value) {
      return;
    }

    setTodos((current) => [...current, { id: Date.now(), text: value, done: false }]);
    setTask('');
  };

  const toggleTodo = (id: number) => {
    setTodos((current) =>
      current.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    );
  };

  const removeTodo = (id: number) => {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

  const pendingCount = useMemo(() => todos.filter((todo) => !todo.done).length, [todos]);

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100">
      <section className="mx-auto w-full max-w-xl space-y-6">
        <header className="space-y-2">
          <p className="text-sm text-slate-400">Punjabi aa gye Oyee !</p>
          <h1 className="text-4xl font-semibold tracking-tight">Manish DevOps To-Do List</h1>
          <p className="text-slate-300">Add your tasks, mark them done, and remove what you finish.</p>
        </header>

        <form onSubmit={addTodo} className="flex gap-2">
          <input
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            placeholder="Write a task..."
            className="h-11 flex-1 rounded-md border border-slate-700 bg-slate-900 px-3 text-slate-100 outline-none transition focus:border-sky-500"
          />
          <button
            type="submit"
            className="h-11 rounded-md bg-sky-500 px-5 font-medium text-slate-950 transition hover:bg-sky-400"
          >
            Add
          </button>
        </form>

        <div className="text-sm text-slate-300">{pendingCount} task(s) remaining</div>

        <ul className="space-y-2">
          {todos.length === 0 ? (
            <li className="rounded-md border border-slate-800 bg-slate-900 px-3 py-4 text-slate-400">
              No tasks yet.
            </li>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-900 px-3 py-3"
              >
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo.id)}
                    className="h-4 w-4 accent-sky-500"
                  />
                  <span className={todo.done ? 'text-slate-500 line-through' : 'text-slate-100'}>
                    {todo.text}
                  </span>
                </label>

                <button
                  type="button"
                  onClick={() => removeTodo(todo.id)}
                  className="text-sm text-rose-300 transition hover:text-rose-200"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}

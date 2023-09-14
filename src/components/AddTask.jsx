import React from "react";

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (task.id) {
      const date = new Date();
      const updatedTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTaskList(updatedTaskList);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      setTask({});
    }
  };
  return (
    <div className="bg-slate-50 mt-8 p-3 md:w-3/4 xl:w-1/2 w-full rounded-sm ">
      <form className="flex gap-2" onSubmit={submitHandler}>
        <input
          name="task"
          type="text"
          autoComplete="off"
          placeholder="task here.."
          className="px-2 py-[0.3rem] w-full border outline-none"
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button
          className="px-5 py-[0.3rem] bg-green-500 rounded-sm active:scale-95"
          type="submit"
        >
          {task.id ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddTask;

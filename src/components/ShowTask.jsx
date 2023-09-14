import React from "react";

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const taskDeleteHandler = (id) => {
    setTaskList(taskList.filter((todo) => todo.id !== id));
  };

  const updateTaskHandler = (id) => {
    const selectedTask = taskList.find((todo) => todo.id === id);
    setTask(selectedTask);
  };

  return (
    <div className="flex flex-col border rounded-sm bg-slate-50 lg:w-3/4 w-full mt-4 p-2">
      <div className="flex justify-between border-b py-4">
        <div className="flex gap-2 items-center">
          <span className="font-semibold">Todo</span>
          <span className="bg-gray-300 px-1 py-0.5 rounded-full">
            {taskList.length}
          </span>
        </div>
        <button
          className="bg-blue-900 text-white text-sm rounded-[3px] p-2"
          onClick={() => setTaskList([])}
        >
          Clear All
        </button>
      </div>

      <ul className="grid xl:grid-cols-3 md:grid-cols-2 px-4 mt-8 gap-x-8 gap-y-2 pb-4">
        {taskList.map(({ id, name, date, time }) => {
          return (
            <li
              className="border border-l-4 border-l-blue-500 rounded-[4px] flex justify-between p-2 shadow-md"
              key={id}
            >
              <div>
                <p>{name}</p>
                <span className="text-xs text-gray-400">{time}</span>
                <span className="text-xs text-gray-400">{date}</span>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-700"
                  onClick={(e) => updateTaskHandler(id)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-700"
                  onClick={() => taskDeleteHandler(id)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowTask;

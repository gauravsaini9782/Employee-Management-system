import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#6c7681] mt-7 rounded">
    <form className="flex flex-wrap w-full items-start justify-between ">
      {/* Left side of the form */}
      <div className="w-1/2">
        <div>
          <h3 className="font-semibold mb-1">Task Title</h3>
          <input
            type="text"
            placeholder="Enter task title"
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <h3 className="font-semibold mb-1">Date</h3>
          <input
            type="date"
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <h3 className="font-semibold mb-1">Assign to</h3>
          <input
            type="text"
            placeholder="Employee name"
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <h3 className="font-semibold mb-1">Category</h3>
          <input
            type="text"
            placeholder="e.g., design, dev, etc."
            className="border p-2 w-full rounded"
          />
        </div>
      </div>

      {/* Right side - Description box and button */}
      <div className="w-2/5 flex flex-col items-start">
        <div>
          <h3 className="font-semibold mb-1">Description</h3>
          <textarea placeholder="Enter task description" cols="30" rows="5" className="border p-2 w-full h-44 text-sm px-4 rounded"> </textarea>
        </div>

        {/* Full-width button below the description */}
        <div >
          <button
            type="submit"
            className=" bg-blue-500 text-white py-3 px-7 rounded-lg hover:bg-blue-600 transition-all"> Create Task </button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default CreateTask
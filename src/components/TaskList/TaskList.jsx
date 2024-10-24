import React from 'react';

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[40%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl">
        <div className="flex justify-between items-center px-3 mt-3">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm py-1">23 October 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl px-3 font-semibold">Make a YouTube Video</h2>
        <p id="para" className="text-sm mt-2 px-3">
          Create an engaging video for the product launch campaign, focusing on customer engagement.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl">
        <div className="flex justify-between items-center px-3 mt-3">
          <h3 className="bg-yellow-600 text-sm px-3 py-1 rounded">Medium</h3>
          <h4 className="text-sm py-1">24 October 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl px-3 font-semibold">Prepare Marketing Report</h2>
        <p id="para" className="text-sm mt-2 px-3">
          Compile data and metrics from the latest marketing campaigns and prepare a detailed report for stakeholders.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center px-3 mt-3">
          <h3 className="bg-green-600 text-sm px-3 py-1 rounded">Low</h3>
          <h4 className="text-sm py-1">25 October 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl px-3 font-semibold">Design Landing Page</h2>
        <p id="para" className="text-sm mt-2 px-3">
          Work on the landing page design for the upcoming Black Friday promotion, ensuring responsiveness.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center px-3 mt-3">
          <h3 className="bg-orange-600 text-sm px-3 py-1 rounded">Urgent</h3>
          <h4 className="text-sm py-1">26 October 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl px-3 font-semibold">Client Presentation</h2>
        <p id="para" className="text-sm mt-2 px-3">
          Finalize and rehearse the client presentation for the upcoming sales pitch meeting.
        </p>
      </div>
    </div>
  );
};

export default TaskList;

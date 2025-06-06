import React from 'react';

const mockData = new Array(8).fill({
  device: "iPhone 12 Pro MAX, 256GB, Tony Red",
  date: "12/05/2025, 10:00AM",
  location: "Nigeria",
  action: "Cover letter created",
  description: "Submitted an application for the UI/UX Designer position at Company X",
})

export default function ActivityTable() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full overflow-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-gray-600  font-semibold">
          <tr>
            <th className="px-4 py-3">DEVICE NAME</th>
            <th className="px-4 py-3">DATE & TIME</th>
            <th className="px-4 py-3">LOCATION</th>
            <th className="px-4 py-3">ACTIONS</th>
            <th className="px-4 py-3">DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((row, idx) => (
            <tr key={idx} className=" hover:bg-gray-50">
              <td className="px-6 py-4">{row.device}</td>
              <td className="px-6 py-4">{row.date}</td>
              <td className="px-6 py-4">{row.location}</td>
              <td className="px-6 py-4">{row.action}</td>
              <td className="px-6 py-4">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination
      <div className="flex items-center justify-center gap-2 mt-4">
        <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {[1, 2, 3, "...", 10].map((item, idx) => (
          <Button
            key={idx}
            variant={item === 1 ? "default" : "ghost"}
            className={`rounded-full w-8 h-8 text-sm ${item === 1 ? "bg-blue-600 text-white" : ""}`}
          >
            {item}
          </Button>
        ))}

        <Button variant="outline" size="icon" className="rounded-full w-8 h-8">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div> */}
    </div>
  )
}

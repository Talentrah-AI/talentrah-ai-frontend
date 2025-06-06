import React from "react";

const data = [
  {
    date: "12/05/2025, 10:00AM",
    mentor: "John Okafor Ben",
    email: "johnokaforben123@gmail.com",
    duration: "45 min",
    type: "Resume review",
    status: "Cancelled",
  },
  // Repeat with varied status for demo
  ...Array(9).fill({
    date: "12/05/2025, 10:00AM",
    mentor: "John Okafor Ben",
    email: "johnokaforben123@gmail.com",
    duration: "45 min",
    type: "Resume review",
    status: "Completed",
  }),
];

const StatusPill = ({ status }: { status: string }) => {
  const isCompleted = status === "Completed";
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        isCompleted
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-600"
      }`}
    >
      {status}
    </span>
  );
};

export default function MentorshipTable() {
  return (
    <div className="p-4 rounded-lg bg-white shadow-sm overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        <thead className="text-gray-500 uppercase border-b">
          <tr>
            <th className="py-3 px-4">Date & Time</th>
            <th className="py-3 px-4">Mentor</th>
            <th className="py-3 px-4">Email Address</th>
            <th className="py-3 px-4">Duration</th>
            <th className="py-3 px-4">Mentorship Type</th>
            <th className="py-3 px-4">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((session, index) => (
            <tr key={index} className="border-b">
              <td className="py-3 px-4">{session.date}</td>
              <td className="py-3 px-4">{session.mentor}</td>
              <td className="py-3 px-4">{session.email}</td>
              <td className="py-3 px-4">{session.duration}</td>
              <td className="py-3 px-4">{session.type}</td>
              <td className="py-3 px-4">
                <StatusPill status={session.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

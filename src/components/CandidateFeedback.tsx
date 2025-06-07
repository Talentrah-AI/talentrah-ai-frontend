import { Star } from 'lucide-react';
import Image from 'next/image';

type FeedbackCardProps = {
  label?: string;
  name?: string;
  rating?: number;
  date?: string;
  message?: string;
  imageUrl?: string;
};

const FeedbackCard = ({
  label = "Mentorship",
  name = "Juliana Whalus",
  rating = 4.75,
  date = "12 April 2025, 06:59PM",
  message,
  imageUrl = "https://randomuser.me/api/portraits/women/44.jpg",
}: FeedbackCardProps) =>  {
  return (
    <div className="border-b pb-4 mb-4">
      

      <div className="flex gap-3 items-start">
        {/* Profile Image */}
        <Image
          src={imageUrl}
          alt="Profile"
          width={40}
          height={40}
          className=" rounded-full object-cover"
        />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                {label}
            </span>
              <p className="text-sm font-semibold">{name}</p>
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(rating) ? "#facc15" : "none"}
                    strokeWidth={1.5}
                  />
                ))}
                <span className="ml-2 text-xs text-gray-500">
                  ({rating.toFixed(2)})
                </span>
              </div>
            </div>
            <span className="text-xs text-gray-400">{date}</span>
          </div>

          <p className="text-sm text-gray-700 mt-2">
            {message ||
              `I felt more confident after just one session! My mentor broke things down clearly and even reviewed my portfolio. Can't recommend enough!`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FeedbackSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white rounded-xl shadow">
      {/* Left Feedback List */}
      <div className="md:col-span-2">
        {[...Array(5)].map((_, index) => (
          <FeedbackCard key={index} />
        ))}
      </div>

      {/* Right Statistics */}
      <div className="bg-gray-50 p-4 rounded-xl h-fit shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Statistics</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 font-bold text-sm rounded-full flex items-center justify-center">
                ★
              </div>
              <span className="text-sm">Average rating</span>
            </div>
            <span className="text-sm font-bold">4.75</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-100 text-orange-600 font-bold text-sm rounded-full flex items-center justify-center">
                📝
              </div>
              <span className="text-sm">Total Feedback Given</span>
            </div>
            <span className="text-sm font-bold">20</span>
          </div>
        </div>
      </div>
    </div>
  );
}

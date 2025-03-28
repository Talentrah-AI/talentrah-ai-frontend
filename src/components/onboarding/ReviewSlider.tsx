"use client";
import { useState, useEffect } from "react";

// Sample Reviews Data
const reviews = [
  {
    text: "This platform made creating my resume effortless! The AI suggestions were spot on, and my resume now looks more professional than ever.",
    user: "Jane Smith",
    job: "Tech Copywriter, Google",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "I've landed more job interviews since using this tool. It's user-friendly and helped me showcase my skills effectively.",
    user: "Mark Johnson",
    job: "Software Engineer, Microsoft",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "Absolutely love the AI-powered suggestions. They made my resume stand out in the job market!",
    user: "Emily Carter",
    job: "Product Designer, Apple",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Auto-slide reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        setFade(false);
      }, 300); // Wait for fade-out before switching
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Handle keyboard navigation (left & right arrow keys)
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    } else if (e.key === "ArrowLeft") {
      setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="mt-6 sm:mt-8">
      {/* Review Container */}
      <div
        className={`p-5 sm:p-6 bg-blue-500 text-white rounded-md transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="italic text-sm sm:text-base">"{reviews[index].text}"</p>

        {/* User Info with Profile Icon */}
        <div className="flex items-center mt-4">
          <img
            src={reviews[index].avatar}
            alt={reviews[index].user}
            className="w-9 sm:w-10 h-9 sm:h-10 rounded-full mr-3 border-2 border-white"
          />
          <div>
            <p className="font-bold text-sm sm:text-base">{reviews[index].user}</p>
            <p className="text-xs sm:text-sm opacity-80">{reviews[index].job}</p>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-3">
        {reviews.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to review ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 mx-1 rounded-full transition-all duration-300 focus:outline-none ${
              i === index ? "bg-white scale-110" : "bg-white opacity-50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;

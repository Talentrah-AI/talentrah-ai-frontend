"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle, FaLinkedin } from "react-icons/fa";

const AuthForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreedToTerms: false,
  });
  const router = useRouter();

  const languages = ["English", "French", "Spanish"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted form:", form);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      
      {/* Language Selector (Top Right) */}
      <div className="flex justify-between items-center mb-4">
        <div></div> {/* Empty div to push the language selector to the right */}
        <select className="border border-gray-300 rounded-md py-1 px-2 text-sm text-gray-700 focus:ring focus:ring-blue-200">
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
  
      {/* Form Title */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">Create an account</h2>
        <p className="text-gray-600 text-sm">
          Welcome to Talentrah - Let’s create your resume
        </p>
      </div>
  
      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              className="w-full border border-gray-300 px-3 py-1.5 rounded-md text-sm focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              className="w-full border border-gray-300 px-3 py-1.5 rounded-md text-sm focus:ring focus:ring-blue-200"
              required
            />
          </div>
        </div>
  
        {/* Email Address */}
        <div>
          <label className="block text-sm text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 px-3 py-1.5 rounded-md text-sm focus:ring focus:ring-blue-200"
            required
          />
        </div>
  
        {/* Password */}
        <div>
          <label className="block text-sm text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="**********"
            className="w-full border border-gray-300 px-3 py-1.5 rounded-md text-sm focus:ring focus:ring-blue-200"
            required
          />
        </div>
  
        {/* Terms Agreement */}
        <div className="flex items-start">
          <input
            type="checkbox"
            name="agreedToTerms"
            checked={form.agreedToTerms}
            onChange={handleChange}
            className="mt-1 mr-2"
            required
          />
          <label className="text-gray-600 text-xs">
            By checking this box, you confirm that you have read, understood, and agree to Talentrah’s{" "}
            <a href="#" className="text-blue-600">Terms and Conditions</a> and{" "}
            <a href="#" className="text-blue-600">Privacy Policy</a>.
          </label>
        </div>
  
        {/* Signup Button */}
        <button
          type="submit"
          className="w-full text-blue-600 bg-blue-100 py-2 rounded-md text-sm hover:bg-blue-200 transition"
        >
          Create Account
        </button>
      </form>
  
      {/* Divider */}
      <div className="flex items-center my-3">
        <div className="flex-grow border-t border-dashed border-gray-400"></div>
        <span className="px-2 text-xs text-gray-500">OR</span>
        <div className="flex-grow border-t border-dashed border-gray-400"></div>
      </div>
  
      {/* Social Login */}
      <div className="flex flex-col sm:flex-row gap-2">
        <button className="w-full sm:w-1/2 flex items-center justify-center gap-2 border py-2 rounded-md text-gray-700 text-sm hover:bg-gray-100 transition">
          <FaGoogle className="text-red-500" /> Google
        </button>
        <button
      onClick={() => router.push("/onboarding/linkedin/redirect")}
      className="w-full sm:w-1/2 flex items-center justify-center gap-2 border py-2 rounded-md text-gray-700 text-sm hover:bg-gray-100 transition"
    >
      <FaLinkedin className="text-blue-600" /> LinkedIn
    </button>
      </div>
  
      {/* Login Redirect */}
      <p className="text-center text-xs text-gray-600 mt-3">
        Already have an account? <a href="/login" className="text-blue-600">Log In</a>
      </p>
    </div>
  </div>
  
  );
};

export default AuthForm;

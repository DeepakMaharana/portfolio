import React, { useState } from "react";
import axios from "axios";
const Contact = () => {
  // const [isSubmit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email address";
        }
        break;
      case "message":
        if (!value.trim()) {
          error = "Message is required";
        }
        break;
      default:
        break;
    }
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    e.preventDefault();
    let isValid = true;
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        isValid = false;
      }
    });
    if (isValid) {
      // Handle form submission here
      console.log("Form submitted:", formData);
      axios.post("https://getform.io/f/azyymelb", formData,
      { headers: {'Accept': 'application/json'}})
      .then(response => alert("Message send successfully"))
      .catch(error => console.log(error))
    }
  };
  return (
    <div className="h-max mb-16">
      <h2 className="text-center sm:text-left text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
        Let’s Create Something <span className="text-orange-500">Amazing</span>
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 rounded-xl p-6 space-y-6"
      >
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white 
                       placeholder-gray-500 focus:outline-none focus:ring-2 
                       focus:ring-orange-500 transition duration-200"
          />
          {errors.name && <p className="text-red-500 mt-2">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your@email.com"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white 
                       placeholder-gray-500 focus:outline-none focus:ring-2 
                       focus:ring-orange-500 transition duration-200"
          />
          {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="6"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white 
                       placeholder-gray-500 focus:outline-none focus:ring-2 
                       focus:ring-orange-500 transition duration-200 resize-none"
          />
          {errors.message && (
            <p className="text-red-500 mt-2">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-lg
                     hover:bg-orange-600 transition duration-200
                     focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;

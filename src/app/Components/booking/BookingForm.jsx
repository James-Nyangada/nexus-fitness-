'use client'
import { useState } from "react";
import Calendar from "react-calendar";
import { send } from "emailjs-com";
import "react-calendar/dist/Calendar.css";
import "../../assets/main.css"; // For custom styling

const BookingForm = () => {
  const [formData, setFormData] = useState({
    dates: [],
    time: "",
    price: 0,
  });

  // Handle input changes for name, email, mobile, and service type
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle calendar date selection and toggle selected dates
  const handleDateChange = (date) => {
    const dateStr = date.toISOString().split("T")[0];
    let updatedDates = formData.dates.includes(dateStr)
      ? formData.dates.filter((d) => d !== dateStr) // Remove date if already selected
      : [...formData.dates, dateStr]; // Add date if not selected

    setFormData({ ...formData, dates: updatedDates, price: updatedDates.length * 500 });
  };

  // Handle time selection
  const handleTimeChange = (e) => {
    setFormData({ ...formData, time: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS
    send(
      "service_5v18slk", // Replace with your EmailJS service ID
      "template_gqny3x8", // Replace with your EmailJS template ID
      {
        dates: formData.dates.join(", "),
        time: formData.time,
        price: formData.price,
      },
      "NF9QhbBzn9FS2u1_7" // Replace with your EmailJS user ID
    )
      .then((response) => {
        alert("Booking successful!");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        alert("Failed to send booking.");
        console.log("FAILED...", err);
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Book a Service</h2>
      <form onSubmit={handleSubmit} className="space-y-4">





        <label className="block font-bold">Select Dates:</label>
        <Calendar
          onClickDay={handleDateChange}
          tileDisabled={({ date }) => date < new Date().setHours(0, 0, 0, 0)}
          tileClassName={({ date }) =>
            date < new Date().setHours(0, 0, 0, 0) ? "past-date" : formData.dates.includes(date.toISOString().split("T")[0]) ? "highlight" : null
          }
        />

        <label className="block font-bold mt-4">Select Time (9 AM - 9 PM):</label>
        <input
          type="time"
          min="09:00"
          max="21:00"
          className="w-full p-2 border rounded"
          onChange={handleTimeChange}
          required
        />

        <p className="font-bold">Total Price: ${formData.price}</p>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

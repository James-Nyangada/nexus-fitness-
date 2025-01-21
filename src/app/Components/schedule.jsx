"use client"

import Link from "next/link"
import { useState } from "react"


export default function Schedule() {
  const [activeDay, setActiveDay] = useState("Monday")

  const scheduleData = {
    Monday: [
      { className: "Zumba", time: "5:30am - 7:00am", trainer: "David Vila" },
      { className: "Step Aerobic", time: "5:30pm - 7:00pm", trainer: "John Weights" },
    ],
    Tuesday: [
      { className: "Step Aerobic", time: "5:30am - 7:00am", trainer: "Sarah Peace" },
      { className: "Zumba", time: "5:30pm - 7:00pm", trainer: "Mike Strong" },
    ],
    Wednesday: [
      { className: "Circuit", time: "5:30am - 7:00am", trainer: "Emma Core" },
      { className: "Fit Combo", time: "5:30pm - 7:00pm", trainer: "Jack Swift" },
    ],
    Thursday: [
      { className: "Katabox", time: "5:30am - 7:00am", trainer: "David Vila" },
      { className: "HIIT", time: "5:30pm - 7:00pm", trainer: "John Weights" },
    ],
    Friday: [
      { className: "HIIT", time: "5:30am - 7:00am", trainer: "Sarah Peace" },
      { className: "Katabox + Zumba", time: "5:30pm - 7:00pm", trainer: "Mike Strong" },
    ],
    Saturday: [
      { className: "Challanges", time: "7:00am - 9:00am", trainer: "Jack Swift" },
      { className: "Bootcamp", time: "10:00am - 12:00pm", trainer: "Tony Punch" },
      { className: "Self defense", time: "1:00pm - 5:00pm", trainer: "Tony Punch" },
    ],
    Sunday: [
      { className: "Free access and Training", time: "24 hrs", trainer: "Sarah Peace" },
      
    ],
  }

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  return (
    <div className="container">
      {/* Days of week tabs */}
      <div className="days-container">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`day-button ${activeDay === day ? "active" : ""}`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule list */}
      <div className="schedule-list">
        {scheduleData[activeDay].map((classInfo, index) => (
          <div key={index} className="schedule-item">
            <div className="schedule-item-content">
              <div className="schedule-item-field">
                <div className="schedule-item-label">Class Name</div>
                <div className="schedule-item-value">{classInfo.className}</div>
              </div>
              <div className="schedule-item-field">
                <div className="schedule-item-label">Time</div>
                <div className="schedule-item-value">{classInfo.time}</div>
              </div>
              <div className="schedule-item-field">
                <div className="schedule-item-label">Trainer</div>
                <div className="schedule-item-value">{classInfo.trainer}</div>
              </div>
              <div>
              <Link href={'/booking'}>
                <button className="join-button">Join Now</button>
              </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


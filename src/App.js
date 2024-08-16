import React from 'react';
import SkillerProfile from './SkillerProfile';

const skillerData = {
  name: "Ethan Lambeth",
  initials: "EL",
  location: "Dunedin",
  skills: [
    "Software development",
    "React Development",
    "Javascript",
    "CSS and styling",
    "UI & UX design awareness",
    "Attention to detail",
    "Project management",
    "Problem solving",
    "Critical thinking"
  ],
  description: "I am young, passionate and looking for work. I am proficient in software development and I have had experience developing software for a variety of stakeholders. I am passionate about helping people and I believe Skillzea is an amazing way to do that. I believe I can help you help people",
  availability: "Available",
  rating: 4.8,
  testimonials: [
    { author: "Jane Doe", content: "Positive Feedback One", rating: 5 },
    { author: "John Smith", content: "Positive Feeback Two", rating: 4.5 },
    { author: "Emily Brown", content: "Positive Feedback Three", rating: 5 },
  ]
};

function App() {
  return (
    <div className="App">
      <SkillerProfile {...skillerData} />
    </div>
  );
}

export default App;
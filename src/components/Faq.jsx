import { useState, useEffect } from "react";
import {  FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi"; // For right arrow

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(0);
  const questionsPerGroup = 5;
  const maxQuestions = 40;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // Fetch FAQ data from the local JSON file
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setAnswers(data))
      .catch((error) => console.error("Error fetching FAQ data:", error));
  }, []);

  const nextGroup = () => {
    // Check if there are more groups available
    if ((currentGroup + 1) * questionsPerGroup < Math.min(maxQuestions, answers.length)) {
      setCurrentGroup((prev) => prev + 1); // Increment to load the next group
      setOpenIndex(null); // Close any open FAQ when switching groups
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-[1441px] h-[700px] md:h-[614px] bg-white p-6 rounded-lg shadow-lg relative">
        {/* Heading placed outside the questions section */}
        <p className="text-center text-gray-700 text-2xl font-bold mb-6">Frequently Asked Questions</p>

        {/* Questions section */}
        <div className="space-y-4">
          {answers.length > 0 ? (
            answers
              .slice(currentGroup * questionsPerGroup, (currentGroup + 1) * questionsPerGroup)
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 mb-4 border-l-4 rounded-lg shadow-md flex flex-col cursor-pointer"
                  style={{ borderImage: "linear-gradient(to top, blue, orange) 1" }}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-lg font-semibold">{item.question}</p>
                    {openIndex === index ? <FaChevronDown size={15} /> : <FaChevronRight size={15} />}
                  </div>
                  {openIndex === index && (
                    <p className="text-gray-700 mt-2">{item.answer}</p>
                  )}
                </div>
              ))
          ) : (
            <p className="text-center text-gray-500">Loading FAQs...</p>
          )}
        </div>

        {/* Show More button */}
        {(currentGroup + 1) * questionsPerGroup < Math.min(maxQuestions, answers.length) && (
          <div className="flex justify-center mt-4">
            <button
              className="flex items-center gap-2 text-white font-semibold bg-blue-950 hover:bg-blue-800 py-2 px-6 rounded-lg"
              onClick={nextGroup}
            >
              Show More <HiArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
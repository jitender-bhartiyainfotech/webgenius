import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import axios from "axios";


const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [mainheading, setMainheading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [words, setWords] = useState(["Innovation", "Excellence", "Creativity"]);
  const [backgroundVideo, setBackgroundVideo] = useState("");

  const [experience, setExperience] = useState("");
  const [projectDone, setProjectDone] = useState("");
  const [team, setTeam] = useState("");

//   const words = ;
  const typingSpeed = 75;
  const deletingSpeed = 50;
  const pauseTime = 300;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (!isDeleting && displayText.length < currentWord.length) {
        // Typing the word
        setDisplayText((prev) => prev + currentWord[prev.length]);
      } else if (isDeleting && displayText.length > 0) {
        // Deleting the word
        setDisplayText((prev) => prev.slice(0, -1));
      } else if (!isDeleting && displayText.length === currentWord.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText.length === 0) {
        // Move to the next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, words, currentWordIndex]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/pages/5271`).then((resd) => {
        // setUrl(resd.data.guid.rendered);

        // let worddd = resd.data.acf.keywords;

        console.log(resd.data.acf);
        setMainheading(resd.data.acf.main_heading);
        setSubHeading(resd.data.acf.sub_heading);
        setWords(stringToArray(resd.data.acf.keywords));
        setBackgroundVideo(resd.data.acf.background_video.url);

        setExperience(resd.data.acf.experience);
        setProjectDone(resd.data.acf.project_done);
        setTeam(resd.data.acf.team);
    })
  }, [])

  function stringToArray(inputString) {
    if (!inputString) return []; // Handle empty or null input
    return inputString.split(',').map(word => word.trim());
  }

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Video */}
      
      {backgroundVideo && 
      <video
      autoPlay
      muted
      loop
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      }

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-4xl font-extrabold mb-4">
          {mainheading}
        </h1>

        {/* Typing Animation */}
        <div className="text-3xl md:text-4xl font-medium h-10 mb-4">
          <span>{displayText}</span>
          <span className="border-r-2 border-white animate-blink"></span>
        </div>

        {/* Subheading */}
        <p className="text-3xl md:text-3xl mb-8 font-extrabold">
          {subHeading}
        </p>

        {/* Counter Section */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          <div className="text-center">
            <p className="text-4xl font-bold">{experience}</p>
            <p className="text-sm uppercase tracking-wide mt-2">Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{projectDone}</p>
            <p className="text-sm uppercase tracking-wide mt-2">Project Done</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">{team}</p>
            <p className="text-sm uppercase tracking-wide mt-2">
                Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

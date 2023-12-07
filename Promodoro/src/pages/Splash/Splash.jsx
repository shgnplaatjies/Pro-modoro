import { useState, useEffect } from "react";

function Splash() {
  const loadingTextArray = [
    "Loading.",
    "Loading..",
    "Loading...",
    "Loading..",
    "Loading.",
    "Still loading..",
    "Still loading...",
  ];
  const [loadingText, setLoadingText] = useState("Loading");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex(
        currentIndex === loadingTextArray.length - 1 ? 0 : currentIndex + 1
      );
      setLoadingText(loadingTextArray[currentIndex]);
    }, 250);
  });

  return (
    <div className="splash-screen">
      <h2>{loadingText}</h2>
    </div>
  );
}

export default Splash;

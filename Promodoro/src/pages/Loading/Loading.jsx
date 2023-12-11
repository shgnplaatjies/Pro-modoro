import { useState, useEffect } from "react";
import { DotLoader } from "react-spinners";
import "./Loading.css";

function Loading() {
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
    <div className="loading-screen">
      <h2>{loadingText}</h2>
      <DotLoader className="dot-loader" loading size={"2.3rem"} color="black" />
    </div>
  );
}

export default Loading;

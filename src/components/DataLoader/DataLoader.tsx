import React, { useRef, useEffect, useState } from "react";
import "./DataLoader.scss";

interface iProps {
  nextUrl: string | null;
  setNextUrl: Function;
}

const DataLoader = ({ nextUrl, setNextUrl }: iProps) => {
  const [lastLoaded, setLastLoaded] = useState("");

  const ref = useRef<any>();

  const handleObserved = ([entry]: any) => {
    if (entry.intersectionRatio === 1) {
      if (nextUrl !== null && nextUrl !== lastLoaded) {
        console.log("AYY");
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserved, {
      root: null,
      threshold: 1,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }
  });

  return <div className="dataLoader" ref={ref} />;
};

export default DataLoader;

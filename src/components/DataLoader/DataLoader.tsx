import React, { useRef, useEffect, useState } from "react";
import "./DataLoader.scss";

interface iProps {
  onViewed: Function;
}

const DataLoader = ({ onViewed }: iProps) => {
  const [hasRendered, setHasRendered] = useState(false);

  const ref = useRef<any>();

  const handleObserved = ([entry]: any) => {
    if (entry.intersectionRatio === 1) {
      onViewed();
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
  }, []);

  return <div className="dataLoader" ref={ref} />;
};

export default DataLoader;

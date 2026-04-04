import { useEffect, useState, useRef } from "react";

export const useEventPlayer = (events) => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    setCurrentEvents([]);
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (indexRef.current >= events.length) {
        clearInterval(intervalRef.current);
        return;
      }

      setCurrentEvents((prev) => [
        ...prev,
        events[indexRef.current]
      ]);

      indexRef.current++;
    }, 800);

    return () => clearInterval(intervalRef.current);
  }, []);

  return currentEvents;
};
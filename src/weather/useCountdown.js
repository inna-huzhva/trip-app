import { useState, useEffect } from "react";

export const useCountdown = (targetDate) => {
  const countdownDate = new Date(targetDate).getTime();
  const [countdown, setCountdown] = useState();

  useEffect(() => {
    setCountdown(countdownDate - new Date().getTime());

    const interval = setInterval(() => {
      setCountdown(countdownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return getReturnValues(countdown);
};

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds, countDown];
}

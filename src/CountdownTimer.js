import { useCountdown } from "./useCountdown";

function CountdownTimer({targetDate}) {
  const [days, hours, minutes, seconds, totalMillis] = useCountdown(targetDate);

  if (totalMillis <= 0) {
    return (
      <div className="countdown-timer-container">
        <div>Oops...time is over!</div>
      </div>
    );
  } else {
    return (
      <div className="countdown-timer-container">
        <div>
          <div className="time-number">{ days }</div>
          <div className="time-item">DAYS</div>
        </div>
        <div>
          <div className="time-number">{ hours }</div>
          <div className="time-item">HOURS</div>
        </div>
        <div>
          <div className="time-number">{ minutes }</div>
          <div className="time-item">MINUTES</div>
        </div>
        <div>
          <div className="time-number">{ seconds }</div>
          <div className="time-item">SECONDS</div>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;

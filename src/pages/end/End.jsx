import "./End.css";
import done from "../../assets/images/icon-thank-you.svg";

const End = () => {
  return (
    <div className="end">
      <div className="end__icon">
        <img src={done} alt="done" />
      </div>
      <div className="end__title">Thank you!</div>
      <div className="end__text">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
    </div>
  );
};

export default End;

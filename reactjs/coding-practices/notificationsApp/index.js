const Notification = ({ icon, text, bgClass }) => {
  //  Write your code here.
  return (
    <div className={`notification ${bgClass}`}>
      <img src={icon} className="icon" alt="icon" />
      <p className="message">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notifications-container">
    <h1 className="heading">Notifications</h1>

    <Notification
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      text="Information Message"
      bgClass="primary"
    />

    <Notification
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      text="Success Message"
      bgClass="success"
    />

    <Notification
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      text="Warning Message"
      bgClass="warning"
    />

    <Notification
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      text="Error Message"
      bgClass="danger"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

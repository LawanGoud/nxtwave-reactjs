const Button = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return <button className={className}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="content">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons">
        <Button text="Like" className="like" />
        <Button text="Comment" className="comment" />
        <Button text="Share" className="share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

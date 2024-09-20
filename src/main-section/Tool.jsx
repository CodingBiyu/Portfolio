function Tool(props) {
  return (
    <div className="tool-card">
      <div className="bgImg">
        <img src={props.Image} />
      </div>
      <div className="toolInfo">
        <h2>{props.Heading}</h2>
        <p>{props.Description}</p>
      </div>
    </div>
  );
}

export default Tool;

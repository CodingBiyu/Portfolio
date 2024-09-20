function Heading(props) {
  return (
    <h1 className="mainHeading">
      {props.head1} <br />
      <span className="grey-color">{props.head2}</span>
      <p className="p">{props.p1}</p>
    </h1>
  );
}

export default Heading;

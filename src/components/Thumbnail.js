import "../App.css";

function Thumbnail(props) {
  return (
    <div className="project mt-3 mb-3">
      <h1>{props.name}</h1>
      <div className="project-category">{props.category}</div>
      <div className="project-title">{props.title}</div>
    </div>
  );
}

export default Thumbnail;

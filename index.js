const element = (
  // Write your code here.
  <div className="background-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="card-container">
      <img
        alt=""
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <h1>Kumara Harish</h1>
      <p>Lendi Institute of Engineering and Technology,Vizianagaram.</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt=""
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

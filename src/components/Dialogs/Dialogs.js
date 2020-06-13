import React from "react";
import "./Dialogs.css";

const Dialogs = () => {
  return (
    <div className="container col l8">
      <nav id="dialogs_nav">
        <div className="nav-wrapper white">
          <span id="dialogs_logo" className="brand-logo red-text">Dialogs</span>
        </div>
      </nav>
      <div className="row">
        <div className="col l4">

          <div class="collection">

            <a href="#!" class="collection-item active">
              <i className="small left material-icons diag_icons">account_circle</i>
              <span class="badge">1</span>Andrey
            </a>

            <a href="#!" class="collection-item">
              <i className="small left material-icons">account_circle</i>
              <span class="new badge blue">4</span>Sveta
            </a>

            <a href="#!" class="collection-item">
              <i className="small left material-icons">account_circle</i>
              Sasha
            </a>

            <a href="#!" class="collection-item">
              <i className="small left material-icons">account_circle</i>
              <span class="badge">14</span>Dima
            </a>
          </div>
        </div>

        <div className="col l1"></div>

        <div className="col l7">
          <div className = "card-panel white">
            <span className="card-title"><i className="small left material-icons">chat_bubble_outline</i></span>
             <p className = "teal-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error consequuntur facere.</p>
          </div>
          <div className = "card-panel white">
            <span className="card-title"><i className="small left material-icons">chat_bubble_outline</i></span>
             <p className = "teal-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error consequuntur facere.</p>
          </div>
          <div className = "card-panel white">
            <span className="card-title"><i className="small left material-icons">chat_bubble_outline</i></span>
             <p className = "teal-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error consequuntur facere.</p>
          </div>
          <div className = "card-panel white">
            <span className="card-title"><i className="small left material-icons">chat_bubble_outline</i></span>
             <p className = "teal-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error consequuntur facere.</p>
          </div>
        </div>
      </div>
    </div>
    )
};

export default Dialogs;

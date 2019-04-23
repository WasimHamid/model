import React from "react";
import ReactDOM from "react-dom";

import css from "./Portal.module.css";

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div onClick={this.props.onClose} className={css.container}>
        <div
          onClick={event => {
            event.stopPropagation();
          }}
          className={css.modal}
        >
          <h2>My Favourite Hobbies</h2>
          <p>
            You can do some stuff in here, and we have attached this whole this
            to the body, not the react tree
          </p>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>,
      document.body
    );
  }
}

export default Modal;

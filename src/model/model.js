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
          <li>
<b>Football</b>
</li>
<li>
<b>Snooker</b>
</li>
<li>
<b>Cricket</b>
</li>
<li>
<b>Swimming</b>
</li>
<li>
<b>Gaming</b>
</li>
<li>
<b>Table Tennis</b>
</li>
<li>
<b>Basketball</b>
</li>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>,
      document.body
    );
  }
}

export default Modal;

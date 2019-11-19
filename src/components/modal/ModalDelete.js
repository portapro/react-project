import React from 'react';
import ReactDOM from 'react-dom';

const ModalDelete = ({ isShow, toggle, removeUser }) => isShow ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-wrapper">
      <div className="modal">
          <button type="button" onClick={removeUser}>Delete user</button>
          <button type="button" onClick={toggle}>Close</button>        
        </div>
    </div>
    </React.Fragment>, document.body
) : null;

export default ModalDelete;
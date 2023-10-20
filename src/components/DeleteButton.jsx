import React from 'react';
 
function DeleteButton({ id, onDelete }) {
  return <button className="btn text-danger" onClick={() => onDelete(id)}><i class="bi bi-x-circle-fill h5 mb-0"></i></button>
}
 
export default DeleteButton;
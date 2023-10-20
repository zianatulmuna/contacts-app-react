import React from 'react';
 
function ContactItemBody({ name, tag }) {
 return (
   <div className="me-auto">
     <h6 className="text-primary fw-bold mb-1">{name}</h6>
     <p className="text-secondary">@{tag}</p>
   </div>
 );
}
 
export default ContactItemBody;
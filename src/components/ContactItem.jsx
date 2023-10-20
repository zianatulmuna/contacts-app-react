import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';
 
function ContactItem({ imageUrl, name, tag, id, onDelete }) {
 return (
   <div className="contact-item card rounded-4 mb-3 shadow-sm p-3 hstack gap-3">
     <ContactItemImage imageUrl={imageUrl} />
     <ContactItemBody name={name} tag={tag} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default ContactItem;
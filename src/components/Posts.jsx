import React, { useState, useEffect } from "react";
import "../styling/Posts.css";


   
export default function Posts({name, email, title, entry}) {
  return (
      <div className='card'>
            <h2 className='card-title'>{title}</h2>
            <p className='card-role'>{name}</p>
            <p className='card-role'>{email}</p>
            <p className='card-org-description'>{entry}</p>
        </div>
  );
}

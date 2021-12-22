import React from 'react';

export default function Video({ link }) {
  return (
    <div>
      <iframe title={link} width="100%" height="400px" src={link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
    </div>
  )
}
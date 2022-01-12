import React from 'react';
import "./styles.css";

const MusicCard = (props: { name: string; favorite: boolean }) => {
  return (
    <div className="card">
      <p className="name">{props.name}</p>

      {props.favorite ? <span className="fav-icon">❤️</span> : null}
    </div>
  );
};

export default MusicCard;

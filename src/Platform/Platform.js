import React from 'react';
import Book from './Book'
import './Platform.scss'

export default function Platform() {
  return (
    <div className="container PlatformContainer">
      <div className="col col-lg PlatformCol2">
        A thousand generations live in you now. But this is your fight.
      </div>
      <div className="row">
        <div className="col col-lg PlatformCol">
          <Book />
        </div>
      </div>
    </div>
  );
}
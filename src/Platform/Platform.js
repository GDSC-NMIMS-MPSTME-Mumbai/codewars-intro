import React from 'react';
import Book from './Book'
import './Platform.scss'

export default function Platform() {
  return (
    <div className="container PlatformContainer">
      <div className="row">
        <div className="col col-lg PlatformCol2 PlatformTop">
          I like firsts. Good or bad, they’re always memorable
        </div>
        <div className="row">
          <div className="col col-lg PlatformCol">
            <Book />
          </div>
        </div>
        <div className="col col-lg PlatformCol2 PlatformBottom">
          I like firsts. Good or bad, they’re always memorable
        </div>
      </div>
    </div>
  );
}
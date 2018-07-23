import React, { Component } from 'react';
import './ShowImages.css';
//Images
import toSara from './img/sara_hist.jpg';
import saraWall from './img/sarawall.jpg';
import ampel from './img/ampel.jpg';

const Poster = props => (
  <div className="Images">
    <img className={`img-${props.className}`} alt={`dowland-${props.title}`} src={props.src} />
  </div>
);

class ShowImages extends Component {
  render() {
    return (
      <div>
        <Poster className="movil" title="to-sara-movil" src={toSara} />
        <Poster className="wall" title="to-sara" src={saraWall} />
        <Poster className="movil" title="ampel-movil" src={ampel} />
      </div>
    );
  }
}

export default ShowImages;

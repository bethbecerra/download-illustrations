import React, { Component } from 'react';
import ampel from './img/ampel.jpg';
import toSara from './img/to-sara.jpg';
import toys from './img/toys.jpg';

const Poster = function(props) {
  return (
    <div className="Images">
      <img className="download-img" alt={`dowland-${props.title}`} src={props.src} />
    </div>
  );
};

class ShowImages extends Component {
  render() {
    return (
      <div>
        <Poster title="ampel" src={ampel} />
        <Poster title="to-sara" src={toSara} />
        <Poster title="toys" src={toys} />
      </div>
    );
  }
}

export default ShowImages;

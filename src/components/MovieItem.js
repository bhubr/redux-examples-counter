import React from 'react';

export default class MovieItem extends React.Component {
  render() {
    const { title, poster, overview } = this.props;
    const posterUrl = 'https://image.tmdb.org/t/p/w500_and_h281_bestv2' + poster;
    return (
      <div className="media media-box">
        <img className="mr-3" src={posterUrl} alt={title} />
        <div className="media-body">
          <h5 className="mt-0">{title}</h5>
          <p>{overview}</p>
        </div>
      </div>
    );
  }
}

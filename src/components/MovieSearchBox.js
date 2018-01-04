import React from 'react';

export default class MovieSearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    // if (nextProps.value !== this.props.value) {
    //   this.setInputValue(nextProps.value)
    // }
  }

  onChange(event) {
    console.log('change');
    this.setState({ value: event.target.value });
  }

  onKeyUp(event) {
    // console.log(e);
    if (event.keyCode === 13) {
      console.log('pressed return', this.state);
      this.props.onSubmit(this.state.value);
    }
  }
  render() {
    return (
      <input className="form-control" type="text" placeholder="Search movies" value={this.state.value} onKeyUp={this.onKeyUp} onChange={this.onChange} />
    );
  }
}
//
// const mapStateToProps = state => {
//   return {
//     value: state.movies.query
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     setQuery: query => dispatch(setMovieQuery(query))
//   };
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MovieSearchBox);

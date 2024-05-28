class Movie extends React.Component {

  constructor(props) {
      console.log("constructor");
      super(props);
      this.state = {   
        title: this.props.data.title,
        director: this.props.data.director,
        release: this.props.data.release,
        production: this.props.data.production,
        poster: this.props.data.poster 
      };
  }
  render() {
    console.log("render");
    return (
        <div>
          <p>Title: {this.state.title}</p>
          <p>Director: {this.state.director}</p>
          <p>Release: {this.state.release}</p>
          <p>Production: {this.state.production}</p>
          <img src={this.state.poster} alt="Poster"/>
        </div>
    );
  }
}
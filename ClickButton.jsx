class ClickButton extends React.Component {
  // События в React используют camelCase
  // В JSX в обработчик события передается функция компонента, а не строка
  constructor(props) {
    super(props);
    // Объект state описывает внутреннее состояние компонента.
    // Состояние определяется внутри компонента и доступно только из компонента.
    // В отличие от props значения в state можно изменять.
    this.state = { class: "off", label: "Hide" };

    // По умолчанию в функцию обработчика не передается текущий объект компонента,
    // поэтому this будет иметь значение undefined.
    this.press = this.press.bind(this); // чтобы в метод press корректно передавалась ссылка на текущий объект через this
  }
  press(e) {
    // React использует концепцию SyntheticEvent - специальных объектов,
    // которые представляют собой обертки для объектов событий, передаваемых в функцию события.
    console.log(e);

    let className = this.state.class === "off" ? "on" : "off";
    let labelName = this.state.label === "Hide" ? "Show" : "Hide";
    this.setState({ class: className, label: labelName });
    //if(this.state.className === 'Hide') {movie1.visability = "hidden" ? "visible" :"hidden";}
    //if(this.state.class == "off"){movie1.visibility = hidden ? visible : hidden;}
    if (movie1.style.visibility == 'hidden') {movie1.style.visibility = 'visible'} else {movie1.style.visibility = 'hidden'}; 
  }
  render() {
    
    console.log("render");

    return (      
    <button onClick={this.press} className={this.state.class}>
      {this.state.label}
    </button>
      );
    }     
}

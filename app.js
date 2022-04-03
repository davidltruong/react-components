var GroceryList = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Fried Chicken', 'Pizza', 'Ice Cream']}/>
  </div>
);

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      'font-weight': this.state.done ? 'bold' : 'normal'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onMouseEnter={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

var TodoList = (props) => (
  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);

// var TodoList = (props) => {

//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   };

//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// };

// var TodoList = () => (
//   <ul>
//     <Kale />
//     <Cucumber />
//   </ul>
// )

// var Kale = () => (
//   <li>Buy Kale</li>
// )

// var Cucumber = () => (
//   <li>Buy 2x Cucumber</li>
// )

ReactDOM.render(<GroceryList />, document.getElementById("app"));
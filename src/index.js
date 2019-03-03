import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             term: '',
//             items: []
//         };
//     }
//    onChange = (event) => {
//        this.setState({ term: event.target.value });
//    }
//    onSubmit = (event) => {
//        event.preventDefault();
//        this.setState({
//            term: '',
//            items: [...this.state.items,this.state.term]
//        });
//    }
//     render() {
//         return (
//             <div className="main">
//                 <input type="text"
//                     value={this.state.term}
// tate                    onChange={this.onChange} />
//                 <button className="plusBtn" onSubmit={this.onSubmit}>Submit</button>
//                 <div className="todo">
//                     <h1>TODO</h1>
//                     <List items={this.state.items} />
//                 </div>
//             </div>
//         );
//     }
// }

ReactDOM.render(<App />, document.getElementById('root'));
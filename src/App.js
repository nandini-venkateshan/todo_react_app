import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './List.js'
import Form from './Form.js'
import './index.css'

class App extends React.Component {
    state = {
        characters: []
    };
    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }
    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });
    }
    render() {
        return (
            <div className="main">
                <div>
                    <h1>TODO</h1>
                    <div className="cards">
                        <Todo characterData={this.state.characters}
                            removeCharacter={this.removeCharacter}
                        />
                    </div>

                </div>
                
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}
export default App;
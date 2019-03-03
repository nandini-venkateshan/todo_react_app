import React from 'react';

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <div key={index}>
            <p className="content">{row.name}</p>
            <p class="clickbutton"><i class="fa fa-check-circle-o" onClick={() => props.removeCharacter(index)}></i></p>
           
        </div>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Todo extends React.Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
           
                
                <TableBody 
                    characterData={characterData} 
                    removeCharacter={removeCharacter} 
                />
           
        );
    }
}
// class Todo  extends React.Component{ 
//     render() {
//         const { characterData } = this.props;

//         return (
//             <div className="cards">
//             <p className="content"></p>
//             <p className="clickbutton"><i class="fa fa-check-circle-o" onClick=""></i></p>
//         </div>
//         );
//     }
// }
export default Todo;
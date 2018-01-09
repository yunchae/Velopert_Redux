import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.store.dispatch(increase(1));
    }

    render() {
        let centerStyle = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect: 'none',
            userSelect: 'none',
            cursor: 'pointer'
        };

        return (
            <div onClick={this.onClick}
                  style={centerStyle}
            >
                <h1>Hello React Skeleton</h1>
            </div>
        );
    }
}

export default App;
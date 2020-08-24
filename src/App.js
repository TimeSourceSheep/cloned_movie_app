import React from 'react';

class App extends React.Component {
    state = {
        isLoading: true,
        data: [],
    };
    componentDidMount(){
        //Here goes loading code
    }
    render(){
        const {isLoading}=this.state;
        return <div>{isLoading?'Loading...':'Loading Complete.'}</div>;
    }
}

export default App;
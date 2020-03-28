import React, {Component} from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {hasError:false}
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        let {hasError} = this.state;
        if(hasError){
            return (<h1 className='f1 gold b'> Oooopps not good  to see!!! </h1>)
        }else{
            return(this.props.children);
        }
    }


}

export default ErrorBoundry;
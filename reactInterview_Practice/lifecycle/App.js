import React, {Component} from 'react'




class App extends Component{
    constructor(){
        super()
        this.state={color:'red'}
        console.log("this is constructor method")
    }

    render(){
        console.log("this is render method", this.state.color)
        return <h1>This is class LifeCycle Method {this.state.color}</h1>
    }
    componentDidMount(){
        this.setState({color:"blue"})
        console.log("this is componentDidMoun methodt",  this.state.color)
    }
    static getDerivedStateFromProps(props, state){
        console.log("this is getDerivedStateFromProps method")
        return {} //color:props.color
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate", prevState.color)
        return {}
    }
    
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
}

export default App
import { Component } from "react";
import Robotcard from "../Component/robotcard";
import SearchBox from "../Component/SearchBox"
import Scroll from"../Component/Scroll"
import "./App.css"


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:[],
            searchField: ""
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({robots:users}))
    }

    searchRobot = (e) =>{
        this.setState({searchField : e.target.value})
    }

    render(){
        const {robots , searchField}=this.state
        const filterRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        if( !robots.length){
            return  <h1 className=" tc f1">Loading</h1>
        }else{
            return (
                <div className="tc">
                    <h1 className="f1">Your RobotFriends</h1>
                    <SearchBox searchChange = {this.searchRobot} />
                    <Scroll>
                        <Robotcard robots = {filterRobots}/>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;
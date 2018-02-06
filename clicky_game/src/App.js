import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";



  
class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friendsToClick: friends,
    friendsClicked: [],
    points: 0,
    endGame: false,
    cardArray: friends.slice()

  };

  // Set function for starting the game over

  startGameOver = () => this.setState({
    friendsToClick: friends,
    friendsClicked: [],
    points: 0,
    endGame: false,
    cardArray: friends.slice()
  })

 
  // Set the function for when one of the images is clicked

  clickedFriend = id => {

    if (this.state.friendsClicked.indexOf(id) > -1) {
      this.setState({ endGame: true });
   
      
    }
    else{
      const theFriendsClicked = this.state.friendsClicked.slice();
      theFriendsClicked.push(id);

      this.setState({
        points: this.state.points +1,
        friendsClicked: theFriendsClicked
      });
      
    }

  }

  
  render() {

    // This will make the images move places each time they are clicked

    this.state.cardArray.sort((a, b) => 0.5 - Math.random());

    return (
      <Wrapper>
        

        <h1 className="points">Points: {this.state.points}</h1>
        <Title>Famous People Clicky Game</Title>
        
        {this.state.endGame ? <h1>Game Over! <button onClick={this.startGameOver} >Restart</button></h1>:
        
        
       
        this.state.cardArray.map(friend => (
          <FriendCard
            
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={this.clickedFriend}
            points = {this.state.points}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;

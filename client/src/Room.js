import React from 'react';
import Players from './Players';
import BlackCard from './BlackCard';
import CardDisplay from './CardDisplay';
import JoinStartButton from './Join';

const Room = ({submittedCards, submitted, submittedTrue, currentUser, addToUsedBlackPile, blackCards, maxUsers, numberOfUsers, startGame, waitingRoom, whiteCards, saveCards, addJoinedUser}) => {
  const playing = () => {
    return (
      <div>
        <Players />
        <BlackCard addToUsedBlackPile={addToUsedBlackPile} blackCards={blackCards} />
        <CardDisplay currentUser={currentUser} whiteCards={whiteCards} submittedTrue={submittedTrue} submitted={submitted} submittedCards={submittedCards} saveCards={saveCards}/>
      </div>
    )
  }
  const waiting = () => {
    return (
      <div className='room'>

        {/* <p> Current </p>
        <p id='slots'>0</p>
        <p> / 6 players</p> */}
        {/* <p id='slots'>Current {numberOfUsers}</p> */}
        {/* <button id='joinButton' type='button'>Join</button> */}
        <p id='slots'>{numberOfUsers}</p>
        {/* <p id='slots'>Current </p> <p id='userNum'>0</p> <p id='slots'> / {maxUsers} Max</p> */}
        <JoinStartButton numberOfUsers={numberOfUsers} startGame={startGame} addJoinedUser={addJoinedUser}/>

      </div>
    )
  }
  let view = waitingRoom ? waiting() : playing();

  return (

    <div>
      {view}
    </div>
  )
}

export default Room;

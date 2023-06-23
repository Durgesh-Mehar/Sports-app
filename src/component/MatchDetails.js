import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMatchDetails } from '../services/Api';

function MatchDetails() {
  const { matchId } = useParams();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    const fetchMatchData = async () => {
      const data = await fetchMatchDetails(matchId);
      setMatch(data.response.squads);
      console.log(data.response.squads)
      console.log(data.response)
    };

    fetchMatchData();
  }, [matchId]);

  if (!match) {
    return <div>Loading...</div>;
  }
  return (
    <div  className=" d-flex justify-content-around mx-5 p-1 shadow">
      <h1>Match Details :-</h1>
      {
        match.map((team) => {
           return (
           <div key={team.id}>{team.players.map((play) => {
              return (
                <div>
                <p>pid:  {play.pid} </p>
                <p>Title:  {play.title} </p>
                <p>short_name:  {play.short_name} </p>
                <p>first_name:  {play.first_name} </p>
                
                </div>
                
                
              )
           })}</div>
           )
        })
      }

    </div>
  );
}

export default MatchDetails;

import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { fetchMatches } from '../services/Api';

function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatchData = async () => {
      const data = await fetchMatches();
      setMatches(data.response.items);
      console.log(data)

    };

    fetchMatchData();
  }, []);

  return (
    <div>
      <h1>Matches</h1>
      {matches.map((match) => (
        <div key={match.matchId}>
          <Link to={`/matches/${match.matchId}`}>
            <h3>{match.title}</h3>
          </Link>
          <p>short_title: {match.short_title}</p>
          <p>match_id: {match.match_id}</p>
        </div>
      ))}
    </div>
  );
}

export default Matches;

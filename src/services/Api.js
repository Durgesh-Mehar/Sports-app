// api.js

const API_URL = 'https://rest.entitysport.com/v2/competitions/111297/squads/?token=ec471071441bb2ac538a0ff901abd249';
  //const API_URL = 'https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249&per_page=10&&paged=1'
export const fetchMatches = async () => {
  const response = await fetch('https://rest.entitysport.com/v2/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249&per_page=10&&paged=1');
  const data = await response.json();
  return data;
};

export const fetchMatchDetails = async () => {
  const response = await fetch(`${API_URL}/matches/?status=2&token=ec471071441bb2ac538a0ff901abd249&per_page=10&p‌​aged=1`);
  const data = await response.json();
  return data;
};

// Other API request functions can be added here

import { useEffect, useState } from 'react';
import { getPlayers, createPlayer } from '../services/api';
import { Player } from '../types';

const PlayerPage: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [newPlayerName, setNewPlayerName] = useState('');

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await getPlayers();
      setPlayers(response.data);
    };
    fetchPlayers();
  }, []);

  const handleCreatePlayer = async () => {
    try {
      const response = await createPlayer({ name: newPlayerName });
      setPlayers([...players, response.data]);
      setNewPlayerName('');
    } catch (error: any) {
      alert('Error creating player: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Player Management</h1>
      <input
        type="text"
        placeholder="New Player Name"
        value={newPlayerName}
        onChange={(e) => setNewPlayerName(e.target.value)}
      />
      <button onClick={handleCreatePlayer}>Add Player</button>

      <ul>
        {players.map((player) => (
          <li key={player._id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerPage;
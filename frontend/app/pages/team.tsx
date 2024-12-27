import { useEffect, useState } from 'react';
import { getTeams, createTeam } from '../services/api';
import { Team } from '../types';

const TeamPage: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [newTeamName, setNewTeamName] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await getTeams();
      setTeams(response.data);
    };
    fetchTeams();
  }, []);

  const handleCreateTeam = async () => {
    try {
      const response = await createTeam({ name: newTeamName });
      setTeams([...teams, response.data]);
      setNewTeamName('');
    } catch (error: any) {
      alert('Error creating team: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Team Management</h1>
      <input
        type="text"
        placeholder="New Team Name"
        value={newTeamName}
        onChange={(e) => setNewTeamName(e.target.value)}
      />
      <button onClick={handleCreateTeam}>Add Team</button>

      <ul>
        {teams.map((team) => (
          <li key={team._id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
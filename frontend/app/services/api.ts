import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your backend URL
  });

// Authentication
export const login = (credentials: { email: string; password: string }) => API.post('/auth/login', credentials);
  
// Teams
export const getTeams = () => API.get('/teams');
export const createTeam = (teamData: { name: string }) => API.post('/teams', teamData);
  
// Players
export const getPlayers = () => API.get('/players');
export const createPlayer = (playerData: { name: string }) => API.post('/players', playerData);
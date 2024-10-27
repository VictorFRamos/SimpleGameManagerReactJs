import { useState } from 'react';

const useGames = () => {
  const [games, setGames] = useState([
    { 
      id: 1, 
      name: 'Final Fantasy VII', 
      console: 'PS1',
      hoursPlayed: [
        { date: '2024-01-01', hours: 2 },
        { date: '2024-01-02', hours: 3 },
      ]
    }
  ]);

  const addGame = (gameData) => {
    const newGame = {
      id: games.length + 1,
      name: gameData.name,
      console: gameData.console,
      hoursPlayed: []
    };
    setGames(prevGames => [...prevGames, newGame]);
  };

  const deleteGame = (gameId) => {
    setGames(prevGames => prevGames.filter(game => game.id !== gameId));
  };

  const addHoursToGame = (gameId, hours, date) => {
    setGames(prevGames => prevGames.map(game => {
      if (game.id === gameId) {
        return {
          ...game,
          hoursPlayed: [...game.hoursPlayed, { date, hours: Number(hours) }]
        };
      }
      return game;
    }));
  };

  return { games, addGame, deleteGame, addHoursToGame };
};

export default useGames;

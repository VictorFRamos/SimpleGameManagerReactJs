import { useMemo, useCallback } from 'react';

const useGameAnalytics = (games) => {
  const getHoursPerConsole = useMemo(() => {
    return games.reduce((acc, game) => {
      const totalHours = game.hoursPlayed.reduce((sum, entry) => sum + entry.hours, 0);
      acc[game.console] = (acc[game.console] || 0) + totalHours;
      return acc;
    }, {});
  }, [games]);

  const getChartData = useMemo(() => {
    return Object.entries(getHoursPerConsole).map(([console, hours]) => ({
      console,
      hours
    }));
  }, [getHoursPerConsole]);

  const getTotalHoursForGame = useCallback((gameId) => {
    const game = games.find(g => g.id === gameId);
    return game?.hoursPlayed.reduce((sum, entry) => sum + entry.hours, 0) || 0;
  }, [games]);

  return { getChartData, getTotalHoursForGame };
};

export default useGameAnalytics;

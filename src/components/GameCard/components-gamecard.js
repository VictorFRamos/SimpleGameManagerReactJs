import React from 'react';
import { Trash2, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useGameForm from '../../hooks/useGameForm';
import useGameAnalytics from '../../hooks/useGameAnalytics';

const GameCard = ({ game, onDelete, onAddHours }) => {
  const { formData, updateFormField, resetForm } = useGameForm({
    hoursPlayed: 0,
    date: new Date().toISOString().split('T')[0]
  });
  const { getTotalHoursForGame } = useGameAnalytics([game]);

  const handleAddHours = () => {
    onAddHours(game.id, formData.hoursPlayed, formData.date);
    resetForm();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {game.name}
          <Button variant="destructive" size="icon" onClick={() => onDelete(game.id)}>
            <Trash2 size={16} />
          </Button>
        </CardTitle>
        <CardDescription>{game.console}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Total de horas: {getTotalHoursForGame(game.id)}</p>
          </div>
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Horas jogadas"
              value={formData.hoursPlayed}
              onChange={(e) => updateFormField('hoursPlayed', e.target.value)}
            />
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => updateFormField('date', e.target.value)}
            />
            <Button onClick={handleAddHours}>
              <Clock size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;

import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Dashboard from '../Dashboard';
import GameCard from '../GameCard';
import useGames from '../../hooks/useGames';
import useDialog from '../../hooks/useDialog';
import useGameForm from '../../hooks/useGameForm';
import { CONSOLES } from '../../utils/constants';

const GameManager = () => {
  const { games, addGame, deleteGame, addHoursToGame } = useGames();
  const { isOpen, open, close } = useDialog();
  const { formData, updateFormField, resetForm } = useGameForm({
    name: '',
    console: '',
  });

  const handleAddGame = () => {
    addGame(formData);
    resetForm();
    close();
  };

  return (
    <div className="p-4 max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gerenciador de Jogos PlayStation</h1>
        <Dialog open={isOpen} onOpenChange={(open) => open ? open() : close()}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus size={16} />
              Adicionar Jogo
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar Novo Jogo</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                placeholder="Nome do Jogo"
                value={formData.name}
                onChange={(e) => updateFormField('name', e.target.value)}
              />
              <Select
                value={formData.console}
                onValueChange={(value) => updateFormField('console', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o Console" />
                </SelectTrigger>
                <SelectContent>
                  {CONSOLES.map(console => (
                    <SelectItem key={console.value} value={console.value}>
                      {console.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={handleAddGame}>Adicionar</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Dashboard games={games} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map(game => (
          <GameCard
            key={game.id}
            game={game}
            onDelete={deleteGame}
            onAddHours={addHoursToGame}
          />
        ))}
      </div>
    </div>
  );
};

export default GameManager;

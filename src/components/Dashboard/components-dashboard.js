import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useGameAnalytics from '../../hooks/useGameAnalytics';

const Dashboard = ({ games }) => {
  const { getChartData } = useGameAnalytics(games);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard de Horas Jogadas</CardTitle>
        <CardDescription>Distribuição de horas por console</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={getChartData}>
              <XAxis dataKey="console" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;

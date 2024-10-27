# Game Manager

Um aplicativo React para gerenciar sua coleção de jogos PlayStation e acompanhar suas horas jogadas.

## Características

- Gerenciamento completo de jogos (CRUD)
- Registro de horas jogadas
- Dashboard com análise de tempo de jogo
- Interface moderna e responsiva
- Organização usando Hooks pattern

## Tecnologias

- React 18
- Tailwind CSS
- Recharts
- Shadcn/ui
- Lucide Icons

## Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

##

#Estrutura de Pastas do Projeto
game-manager/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.jsx
│   │   │   └── index.js
│   │   ├── GameCard/
│   │   │   ├── GameCard.jsx
│   │   │   └── index.js
│   │   └── GameManager/
│   │       ├── GameManager.jsx
│   │       └── index.js
│   ├── hooks/
│   │   ├── useDialog.js
│   │   ├── useGameAnalytics.js
│   │   ├── useGameForm.js
│   │   └── useGames.js
│   ├── utils/
│   │   └── constants.js
│   └── App.jsx
├── package.json
└── README.md

export const App = () => {
  const ideas = [
    {
      nick: 'User 1',
      name: 'Idea 1',
      description: 'Description',
    },
    {
      nick: 'User 2',
      name: 'Idea 1',
      description: 'Description',
    },
    {
      nick: 'User 3',
      name: 'Idea 1',
      description: 'Description',
    },
  ];
  return (
    <div>
      {ideas.map((idea) => {
        return (
          <div key={idea.nick}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
        );
      })}
    </div>
  );
};

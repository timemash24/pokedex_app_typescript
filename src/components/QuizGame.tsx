import React from 'react';
import { IMG_URL, PokemonList } from './Thumbnail';

type Props = {
  answer: PokemonList;
  qList: PokemonList[];
};

function QuizGame({ answer, qList }: Props) {
  return (
    <div>
      {answer && <img src={`${IMG_URL}/${answer.id}.png`} alt="question img" />}
      <ul>{qList && qList.map((q) => <li key={q.name}>{q.name}</li>)}</ul>
    </div>
  );
}

export default QuizGame;

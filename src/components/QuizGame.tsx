import React, { useState } from 'react';
import { QuizChoice, QuizChoiceContainer } from './styles/Game';
import { ImageContainer } from './styles/Info';
import { IMG_URL, PokemonList } from './Thumbnail';

type Props = {
  answer: PokemonList;
  qList: PokemonList[];
};

function QuizGame({ answer, qList }: Props) {
  const [correct, setCorrect] = useState<number>(0);
  const onClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLLIElement;
    if (target.innerText === answer.name) setCorrect(1);
    else setCorrect(-1);
  };

  return (
    <>
      {answer && (
        <ImageContainer isBaby isCorrect={correct}>
          <img src={`${IMG_URL}/${answer.id}.png`} alt="question img" />
        </ImageContainer>
      )}
      <QuizChoiceContainer onClick={onClick}>
        {qList && qList.map((q) => <QuizChoice key={q.name}>{q.name}</QuizChoice>)}
      </QuizChoiceContainer>
    </>
  );
}

export default QuizGame;

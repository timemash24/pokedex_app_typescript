import React from 'react';
import { Circle, HeadDeco, TextDisplay } from './styles/Card';

type Props = {
  text: string;
};

function PokedexHead({ text }: Props) {
  return (
    <HeadDeco>
      <Circle color="blue" big />
      <Circle color="red" big={false} />
      <Circle color="yellow" big={false} />
      <Circle color="green" big={false} />
      <TextDisplay small={false} type="">
        <span>{text}</span>
      </TextDisplay>
    </HeadDeco>
  );
}

export default PokedexHead;

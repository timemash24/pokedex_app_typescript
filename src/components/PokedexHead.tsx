import React from 'react';
import { Circle, HeadDeco, TextDisplay } from './styles/Card';

type Props = {
  text: string;
  isInput: boolean;
};

function PokedexHead({ text, isInput }: Props) {
  return (
    <HeadDeco>
      <Circle color="blue" big />
      <Circle color="red" big={false} />
      <Circle color="yellow" big={false} />
      <Circle color="green" big={false} />
      <TextDisplay small={false} type="">
        {isInput ? (
          <form>
            <input type="text" placeholder={text} />
            <input type="submit" value="search" />
          </form>
        ) : (
          <span>{text}</span>
        )}
      </TextDisplay>
    </HeadDeco>
  );
}

export default PokedexHead;

interface Info {
  name: string;
  url: string;
}

export interface Sprites {
  frontDefault: string;
  backDefault: string;
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Ability {
  ability: {
    name: string;
  };
}

export interface Response {
  name: string;
  id: number;
  forms: Info[];
  sprites: Sprites;
  types: Type[];
  abilities: Ability[];
}

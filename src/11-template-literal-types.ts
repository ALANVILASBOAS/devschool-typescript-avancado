export type Hello = `Hello`;
export type World = `World`;
export type HelloWorld = `${Hello} ${World}`;


export type Size = 'small' | 'medium' | 'large';
export type Icon = 'user' | 'www' | 'checkmark'

// template literal tipes utilizando a mesma sintaxe de template strings no javascript mas para definição de tipos
export type IconSize = `${Icon}-${Size}`;


// types auxiliáres nativos do typescript
export type IconUppercase = Uppercase<Icon>;
export type IconLowercase = Lowercase<IconUppercase>;
export type IconCapitalized = Capitalize<Icon>;
export type IconUnCapitalized = Uncapitalize<IconCapitalized>;

export type User = {
    id: number;
    name: string;
}

export type UserOnChangedProps = `${keyof User}Changed`;

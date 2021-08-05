export type Hello = `Hello`;
export type World = `World`;
export type HelloWorld = `${Hello} ${World}`;


export type Size = 'small' | 'medium' | 'large';
export type Icon = 'user' | 'www' | 'checkmark';

export type IconSize = `${Icon}-${Size}`;


// types auxiliáres
export type IconUppercase = Uppercase<Icon>;
export type IconLowercase = Lowercase<IconUppercase>;
export type IconCapitalized = Capitalize<Icon>;
export type IconUnCapitalized = Uncapitalize<IconCapitalized>;

export type User = {
    id: number;
    name: string;
}

export type UserOnChangedProps = `${keyof User}Changed`;

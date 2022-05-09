//Estos en models son los archivos .models son archivos donde queremos crear interfaces

export interface ICity {
    createdAt: string;
    name: string;
    image: string;
    price: string;
    description: string;
    category: string;
    id: string;
}

export enum Category {
    Electronic,
    Luxurious,
    Oriental,
    Modern,
    Unbranded,
    Licensed,
    Elegant,
    Generic,
    Incredible,
    Refined,
    Fantastic,
    Small,
    Sleek,
    Intelligent,
    Rustic
}

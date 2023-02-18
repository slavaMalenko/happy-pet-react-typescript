export type TAnimalСategories = {
    category: "dog" | "bird" | "cat" | "fish"
}

export interface IAnimal extends TAnimalСategories {
    id: number,
    imageUrl: string,
    name: string,
    description: string,
    kind: string,
    age: number,
    ageValue: string,
    price: number
}

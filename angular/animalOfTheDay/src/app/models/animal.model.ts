export class Animal {

    static readonly CLASSES = {
        MAMMAL: "mammal",
        BIRD: "bird",
        REPTILE: "reptile",
        INVERTEBRATE: "invertebrate",
        FISH: "fish",
        AMPHIBIAN: "amphibian"
    }

    static readonly DIETS = {
        OMNIVORE: "omnivore",
        HERBIVORE: "herbivore",
        CARNIVORE: "carnivore"
    }

    _id?: any;

    name: string; // dog - all lowercase
    className: string; // mamal, bird, fish
    numLegs: number;

    latinName?: string; // Canis lupus - capital first word
    diet?: string;
    habitat?: string; // jungle, desert, forest

    constructor(obj: any) {
        Object.assign(this, obj);
        
    }
}
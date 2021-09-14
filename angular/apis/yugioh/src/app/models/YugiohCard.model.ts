export class YugiohCard {

    public "id": number;
    public "name": string;
    public "type": string;
    public "desc": string;
    public "atk": number;
    public "def": number;
    public "level": number;
    public "race": string;
    public "attribute": string;
    public "card_sets"?: {
        "set_name": string;
        "set_code": string;
        "set_rarity": string;
        "set_rarity_code": string;
        "set_price": string
    }[];
    public "card_images": {
        "id": number;
        "image_url": string;
        "image_url_small": string;
    }[];
    public "card_prices": {
        "cardmarket_price"?: string;
        "tcgplayer_price"?: string;
        "ebay_price"?: string;
        "amazon_price"?: string;
        "coolstuffinc_price"?: string;
    }[];

    public readonly ATTRIBUTES = [
        "DARK",
        "EARTH",
        "FIRE",
        "LIGHT",
        "WATER",
        "WIND",
        "DIVINE"
    ]

    public readonly RACES = {
        MONSTERS: [
            "Aqua",
            "Beast",
            "Beast-Warrior",
            "Creator-God",
            "Cyberse",
            "Dinosaur",
            "Divine-Beast",
            "Dragon",
            "Fairy",
            "Fiend",
            "Fish",
            "Insect",
            "Machine",
            "Plant",
            "Psychic",
            "Pyro",
            "Reptile",
            "Rock",
            "Sea Serpent",
            "Spellcaster",
            "Thunder",
            "Warrior",
            "Winged Beast",
            "Wyrm",
            "Zombie"
        ],
        SPELLS: [
            "Continuous",
            "Equip",
            "Field",
            "Normal",
            "Quick-Play",
            "Ritual"
        ],
        TRAPS: [
            "Continuous",
            "Counter",
            "Normal"
        ]
    }

    public readonly TYPES = {
        MAIN_DECK: [
            "Effect Monster",
            "Flip Effect Monster",
            "Flip Tuner Effect Monster",
            "Gemini Monster",
            "Normal Monster",
            "Normal Tuner Monster",
            "Pendulum Effect Monster",
            "Pendulum Flip Effect Monster",
            "Pendulum Normal Monster",
            "Pendulum Tuner Effect Monster",
            "Ritual Effect Monster",
            "Ritual Monster",
            "Skill Card",
            "Spell Card",
            "Spirit Monster",
            "Toon Monster",
            "Trap Card",
            "Tuner Monster",
            "Union Effect Monster"
        ],
        EXTRA_DECK: [
            "Fusion Monster",
            "Link Monster",
            "Pendulum Effect Fusion Monster",
            "Synchro Monster",
            "Synchro Pendulum Effect Monster",
            "Synchro Tuner Monster",
            "XYZ Monster",
            "XYZ Pendulum Effect Monster"
        ]
    }

    public readonly LANGUAGE_CODES = {
        ENGLISH: "en",
        FRENCH: "fr",
        GERMAN: "de",
        ITALIAN: "it",
        PORTUGUESE: "pt"
    }

    public readonly EFFECTS = [
        "Back to Deck",
        "Back to Hand",
        "Banish",
        "Change ATK or DEF",
        "Control",
        "Counter",
        "Damage LP",
        "Destroy Monster",
        "Direct Arrack",
        "Draw",
        "Effect Damage",
        "Fusion-Related",
        "Gamble",
        "Graveyard",
        "Increase Level",
        "LINK-Related",
        "Negate",
        "Pendulum-Related",
        "Piercing",
        "Revover LP",
        "Repeat Arrack",
        "Ritual-Related",
        "Search",
        "Select",
        "Special Summon",
        "Synchro-Related",
        "Token",
        "Tuner-Related",
        "Win the Dual",
        "XYZ-Related"
    ]

    public readonly BAN_LISTS = [
        "TCG",
        "OCG",
        "Goat"
    ]

    public readonly FORMATS = [
        "TCG",
        "Dual Links",
        "Speed Duel",
        "Rush Duel",
        "GOAT",
        "OCG GOAT",

    ]

}
export interface Data {
    id: string;
    name: string;
    photo: string;
    price: number;
    category: string;
}

// Не забываем писать export
export type Condition = ">" | ">=" | "<" | "<=" | "==" | "!=" | "text_search";

export interface CardProps {
    title:       string;
    description: string;
    price:       number;
    rating:      number;
    superhost:   boolean;
    location:    string;
    capacity:    Capacity;
    image:       string;
}

export interface Capacity {
    people:  number;
    bedroom: number;
}
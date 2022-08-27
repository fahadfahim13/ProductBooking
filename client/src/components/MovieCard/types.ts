import { Actor } from "components/ActorItem/types";

export interface Category {
    id: number;
    name: string;
    MovieCategories: {
        movieId: number;
        categoryId: number;
    }
}

export interface Movie {
    id: number;
    title: string;
    description: string;
    image: string;
    actors: Actor[];
    categories: Category[];
}

export interface MovieProps extends Movie {
    showActor?: boolean;
}
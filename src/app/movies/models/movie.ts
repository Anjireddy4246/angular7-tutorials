export class Movie {
    movieName: string;
    review: string;
    hide: boolean;
    id: number;
    constructor(id: number, movieName: string, review: string) {
        this.movieName = movieName;
        this.review = review;
        this.hide = true;
        this.id = id;
    }
    toggle() {
        this.hide = !this.hide;
    }
}
export class Movie {
    movieName: string;
    review: string;
    hide: boolean;
    constructor(movieName: string, review: string) {
        this.movieName = movieName;
        this.review = review;
        this.hide = true;
    }
    toggle() {
        this.hide = !this.hide;
    }
}
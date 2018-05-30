export interface Pelicula {
    imdb_id: string;
    title: string;
    year: string;
    synopsis: string;
    trailer: string;
    torrents: ITorrents;
    images: IImages;
}
interface ITorrents {
    en: IEn;
}
interface IEn {
    '1080p': {
        filesize: string;
        size: number;
        peer: number;
        seed: number;
        url: string;
    };
    '720p': {
        filesize: string;
        size: number;
        peer: number;
        seed: number;
        url: string;
    };
}
interface IImages {
    poster: string;
    fanart: string;
    banner: string;
}

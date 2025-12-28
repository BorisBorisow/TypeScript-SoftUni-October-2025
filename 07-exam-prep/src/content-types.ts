import { BaseContent, ContainsId, ContentType } from "./models";

export abstract class DetailedContent implements BaseContent {
  readonly id: number;
  readonly title: string;
  readonly releaseDate: Date;
  private readonly _type: ContentType;

  constructor(id: number, title: string, releaseDate: Date, type: ContentType) {
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this._type = type;
  }

  get type() {
    return this._type;
  }

  set type(_: ContentType) {
    throw new Error("Content type is immutable");
  }

  abstract getDetails(): string;
}

export class Movie extends DetailedContent {
  readonly director: string;

  constructor(id: number, title: string, releaseDate: Date, direcor: string) {
    super(id, title, releaseDate, ContentType.Movie);
    this.director = direcor;
  }

  getDetails(): string {
    return `[MOVIE] "${this.title}" directed by ${
      this.director
    } (Released: ${String(this.releaseDate.getDate()).padStart(
      2,
      "0"
    )}/${String(this.releaseDate.getMonth() + 1).padStart(2, "0")}/${String(
      this.releaseDate.getFullYear()
    )})`;
  }
}

export class Series extends DetailedContent {
  readonly platformUrl: string;

  constructor(
    id: number,
    title: string,
    releaseDate: Date,
    platformUrl: string
  ) {
    super(id, title, releaseDate, ContentType.Series);
    this.platformUrl = platformUrl;
  }

  getDetails(): string {
    return `[SERIES] "${this.title}" (Released: ${String(
      this.releaseDate.getDate()
    ).padStart(2, "0")}/${String(this.releaseDate.getMonth() + 1).padStart(
      2,
      "0"
    )}/${String(this.releaseDate.getFullYear())}), available at: ${
      this.platformUrl
    }`;
  }
}

export function findItemById<T extends ContainsId>(arr: T[], id: number) {
  return arr.find((item) => item.id === id);
}

export interface Translation {
  startTime: number;
  translation: string;
}

export interface Project {
  id?: string;
  name: string;
  description: string;
  url: string;
  thumbnail?: string;
  translations: {number: Translation};
}

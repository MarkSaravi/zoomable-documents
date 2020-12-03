export type Content = string | Sentences;
type SentenceId = string;

type After = SentenceId;

export type Decorator = (content: Content) => Content;
type LevelPosition = {
  after: After;
  decorators?: Decorator[];
};

export type Sentence = {
  id: SentenceId;
  positions: { [LevelId: number]: LevelPosition };
  content: Content;
};

export type Sentences = {
  id: string;
  sentences: Array<Sentence>;
}

export type LevelSentences = { [After: string]: Sentence };

export type ZoomResult = {
  content: string;
  level: number;
}

export type SentencesLevels = {
  [id: string]: {
    zoomLevel: number;
    depth: number;
    maxLevel: number;
  }
}

export interface IZoomable {
  sentences: Array<Sentence>;
  toString: () => ZoomResult;
  zoomIn: () => ZoomResult;
  zoomOut: () => ZoomResult;
  getMaxLevel: () => number;
}

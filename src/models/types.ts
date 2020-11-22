type SentenceId = string;

type After = SentenceId;

type LevelPosition = {
  after: After;
};

export type Sentence = {
  id: SentenceId;
  positions: { [LevelId: number]: LevelPosition };
  content: string | Sentences;
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

export interface IZoomable {
  sentences: Array<Sentence>;
  toString: () => ZoomResult;
  zoomIn: () => ZoomResult;
  zoomOut: () => ZoomResult;
  getMaxLevel: () => number;
}

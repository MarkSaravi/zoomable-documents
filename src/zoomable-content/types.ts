type LevelId = number;

type SentenceId = string;

type After = SentenceId;

type LevelPosition = {
  after: After;
  eol?: boolean;
};

export type Sentence = {
  id: SentenceId;
  positions: { [LevelId: number]: LevelPosition };
  content: string;
};

export type ZoomResult = {
  content: string;
  level: number;
}

export interface IZoomable {
  sentences: Array<Sentence>;
  toString: () => ZoomResult;
  zoomIn: () => ZoomResult;
  zoomOut: () => ZoomResult;
}

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

export interface IZoomable {
  sentences: Array<Sentence>;
  toString: (zoomLevel: number) => string;
}

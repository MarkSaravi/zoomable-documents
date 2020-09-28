type LevelId = string;

type SentenceId = string;

type After = SentenceId;

type LevelPosition = {
  levelId: LevelId;
  isVisible: boolean;
  after: After;
  isEndOfLine: boolean;
  // eslint-disable-next-line no-use-before-define
  zoom: ZoomableSentences | null;
};

type Sentence = {
  positions: Array<LevelPosition>;
};

export type ZoomableSentences = {
  levels: Array<LevelId>;
  sentences: Array<Sentence>;
};

export interface ZoomableContent {
  sentences: ZoomableSentences;
  toString: (zoomLevel: number) => string;
}

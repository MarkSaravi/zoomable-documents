type LevelId = string;

type SentenceId = string;

type After = SentenceId;

type LevelPosition = {
  levelId: LevelId;
  isVisible: boolean;
  after: After;
  isEndOfLine: boolean;
  // eslint-disable-next-line no-use-before-define
  zoom: ZoomableDocument | null;
};

type Sentence = {
  positions: Array<LevelPosition>;
};

export type ZoomableDocument = {
  levels: Array<LevelId>;
  sentences: Array<Sentence>;
};

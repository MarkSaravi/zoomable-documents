type LevelId = string;

type SentenceId = string;

type After = SentenceId;

type LevelPosition = {
  levelId: LevelId;
  isVisible: boolean;
  after: After;
  isEndOfLine: boolean;
};

type Sentence = {
  id: SentenceId;
  positions: Array<LevelPosition>;
  content: string;
};

export type ZoomableSentences = {
  levels: Array<LevelId>;
  sentences: Array<Sentence>;
};

export interface ZoomableContent {
  sentences: ZoomableSentences;
  toString: (zoomLevel: number) => string;
}

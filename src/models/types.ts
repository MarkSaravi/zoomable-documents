import { isArray } from "lodash";

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

export type Sentences = Array<Sentence>;

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

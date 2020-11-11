export type Element = {
  y: number;
  ref: HTMLDivElement | HTMLSpanElement;
  styles: string;
};

export interface ElementsState {
  elementsRefs: Element[];
}

export enum ImageActionTypes {
  Previous = "previous",
  Next = "next",
}

export type ImagePreviewAction =
  | ImageActionTypes.Previous
  | ImageActionTypes.Next;

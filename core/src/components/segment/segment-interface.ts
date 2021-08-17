
export type SegmentButtonLayout = 'icon-top' | 'icon-start' | 'icon-end' | 'icon-bottom' | 'icon-hide' | 'label-hide';

export interface SegmentChangeEventDetail {
  value: string | undefined;
}

export interface SegmentCustomEvent extends CustomEvent {
  target: HTMLIonSegmentElement;
  detail: SegmentChangeEventDetail;
}

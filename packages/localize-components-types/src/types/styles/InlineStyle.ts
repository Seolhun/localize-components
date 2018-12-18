export interface InlineStyleState {
  checked?: boolean;
  disabled?: boolean;
  focused?: boolean;
  hasError?: boolean;
  hovered?: boolean;
  required?: boolean;
  useGradient?: boolean;
}

export type InlineStyleHandler = (state: InlineStyleState) => {};

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface LocalizeFormUIProps {
  label?: React.ReactNode;

  error?: React.ReactNode;

  help?: React.ReactNode;

  // state?: 'normal' | 'comfirmed' | 'error';

  disabled?: InputProps['disabled'];

  required?: InputProps['required'];

  checked?: InputProps['checked'];

  readOnly?: InputProps['readOnly'];

  /**
   * @default true
   */
  visibleIcon?: boolean;
}

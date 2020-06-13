/* eslint-disable no-underscore-dangle */
import FormBuilder, { Properties } from './FormBuilder';

type FormLineGroupConstructor<T> = {
  [key in keyof T]: Properties;
};

type FormLineGroupValues<T> = {
  [key in keyof T]: FormBuilder;
};

class FormGroupBuilder<T> {
  group: FormLineGroupValues<T>;
  isDisabled: boolean;

  constructor(
    forms: FormLineGroupConstructor<T>,
    {
      isDisabled = false,
      isOnCreatedValidation = false,
      isOnChangeValidation = false,
      onGroupValidation = () => ({
        hasError: false,
        message: '',
      }),
    },
  ) {
    this.isDisabled = isDisabled;
    this.group = Object.keys(forms).reduce(
      (obj, key) => ({
        ...obj,
        [key]: new FormBuilder(forms[key as keyof T], {
          isOnChangeValidation,
          isOnCreatedValidation,
          onGroupValidation,
        }),
      }),
      {} as FormLineGroupValues<T>,
    );
    if (isOnCreatedValidation) {
      this._executeAllFormValidation();
    }
  }

  _executeAllFormValidation = () => {
    this.isDisabled = Object.keys(this.group).some((key) =>
      this.group[key as keyof T]
        .handleOnValidation()
        .getPropertyValueBy('hasError'),
    );
    return this;
  };

  /**
   * Finished Methods
   */
  getHasErrorAllForm = () => this._executeAllFormValidation().isDisabled;

  getFormByName = (formKey: keyof T) => this.group[formKey];

  getGroup = () => this.group;
}

export default FormGroupBuilder;

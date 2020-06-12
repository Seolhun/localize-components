interface ValidationResponse {
  hasError: boolean;
  message: string;
}

export interface FormBuilderProps {
  properties: Properties;
  handleOnValidation: (value?: any) => FormBuilder;
  setProperties: (properties: Properties) => FormBuilder;
  setValue: (value: any) => FormBuilder;
  getPropertyValueBy: (keyName: keyof Properties) => any;
  getProperties: () => Properties;
  getValues: () => void;
}

export interface Properties {
  value: any;
  hasError: boolean;
  message: string;
  isRequired: boolean;
  requiredMessage: string;
  // Events
  onValidation: (value: string) => ValidationResponse;
}

export interface Options {
  // Options
  isOnCreatedValidation: boolean;
  isOnChangeValidation: boolean;
  onGroupValidation: (value: string) => ValidationResponse;
}

class FormBuilder implements FormBuilderProps {
  properties: Properties;
  options: Options;

  constructor(properties: Properties, options: Options) {
    const formProperties = this._initForm(properties, options);
    this.properties = formProperties.properties;
    this.options = formProperties.options;
  }

  private _initForm = (
    {
      // Values
      value,
      hasError = false,
      message = '',
      isRequired = false,
      requiredMessage,
      // Events
      onValidation = () => ({
        hasError: false,
        message: '',
      }),
    }: Properties,
    {
      isOnCreatedValidation = false,
      isOnChangeValidation = false,
      onGroupValidation,
    }: Options,
  ) => {
    let isValidObject = {
      hasError,
      message,
    };
    if (isOnCreatedValidation) {
      isValidObject = onValidation(value);
    }

    const properties = {
      value,
      hasError: isValidObject.hasError,
      message: isValidObject.message,
      isRequired,
      requiredMessage,
      onValidation,
    };
    const options = {
      isOnCreatedValidation,
      isOnChangeValidation,
      onGroupValidation,
    };
    return {
      properties,
      options,
    };
  };

  handleOnValidation = (value = this.properties.value) => {
    if (this.properties.isRequired && !value) {
      this.setProperties({
        hasError: true,
        message: this.properties.requiredMessage,
      });
      return this;
    }
    const isValidObject = this.properties.onValidation(value);
    this.setProperties({
      ...isValidObject,
    });
    return this;
  };

  setProperties(newProperties: Partial<Properties>) {
    this.properties = {
      ...this.properties,
      ...newProperties,
    };
    return this;
  }

  setValue(value: Properties['value']) {
    if (this.options.isOnChangeValidation) {
      this.handleOnValidation(value);
    }
    this.setProperties({
      value,
    });
    return this;
  }

  /**
   * Finished Methods
   */
  getPropertyValueBy(propertyKey: keyof Properties) {
    return this.properties[propertyKey];
  }

  getProperties() {
    return this.properties;
  }

  getValues() {
    const { value, hasError, message } = this.properties;

    return {
      value,
      hasError,
      message,
    };
  }
}

export default FormBuilder;

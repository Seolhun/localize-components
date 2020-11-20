import React from 'react';
import styled from '@emotion/styled';
import { Form, Input } from 'antd';

const EditableCellValueWrap = styled.div`
  padding: 5px 12px;
  cursor: pointer;
  &:hover {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 4px 11px;
  }
`;

interface EditableCellProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  onPressEscape?: () => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  defaultValue,
  onChange,
}) => {
  const inputRef = React.useRef<any>();
  const [editing, setEditing] = React.useState(false);

  React.useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = React.useCallback(() => {
    setEditing(!editing);
  }, []);

  const onBlur = React.useCallback(() => {
    setEditing(false);
  }, []);

  const onInputValueChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    },
    [],
  );

  return editing ? (
    <Form.Item style={{ margin: 0 }}>
      <Input
        ref={inputRef}
        style={{ background: 'transparent' }}
        onChange={onInputValueChange}
        onBlur={onBlur}
        defaultValue={defaultValue}
      />
    </Form.Item>
  ) : (
    <EditableCellValueWrap onClick={toggleEdit}>
      {defaultValue || '\u00a0'}
    </EditableCellValueWrap>
  );
};

export { EditableCell };
export default EditableCell;

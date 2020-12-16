import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LocalizeTable, LocalizeTableProps, LocalizeTableColumnProps } from '../../../packages/table/dist';

import { storiesColorOptions, storiesIntentOptions } from '../controls';
import { datasources, TableDummyProps } from './table.dummy';

export default {
  title: 'Table | LocalizeTable',
  component: LocalizeTable,
  argTypes: {
    intent: {
      defaultValue: 'default',
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
    bgColor: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    bdColor: {
      defaultValue: 'neutral3',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    fontColor: {
      defaultValue: 'conversion1',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
  },
};

const columns: LocalizeTableColumnProps<TableDummyProps>[] = [{
  header: 'id',
  width: '100px',
  render: (data) => (
    <div>
        {data.id}
    </div>
  )
},{
  header: 'first_name',
  width: '200px',
  render: (data) => (
    <div>
        {data.first_name}
    </div>
  )
},{
  header: 'last_name',
  width: '200px',
  render: (data) => (
    <div>
        {data.last_name}
    </div>
  )
},{
  header: 'email',
  width: '200px',
  render: (data) => (
    <div>
        {data.email}
    </div>
  )
},{
  header: 'gender',
  width: '100px',
  render: (data) => (
    <div>
        {data.gender}
    </div>
  )
},{
  header: 'ip_address',
  width: '200px',
  render: (data) => (
    <div>
        {data.ip_address}
    </div>
  )
}];

const renderEmptyData = () => {
  return (
    <div>
      There are no data
    </div>
  )
}

const renderOption = () => {
  return (
    <div>
      This is Footer
    </div>
  )
}

const Table: Story<LocalizeTableProps<TableDummyProps>> = (args) => {
  const localize = {
    bgColor: args.bgColor,
    bdColor: args.bdColor,
    color: args.color,
  };

  const onClick = React.useCallback((data: TableDummyProps, rowIndex: number) => {
    console.log({
      data,
      rowIndex,
    })
  }, []);

  return (
    <LocalizeTable
      {...args}
      localize={localize}
      datasources={datasources.slice(0, 100)}
      columns={columns}
      onClickRow={onClick}
      selectedRowClassName={() => 'Selected__Row'}
      renderEmptyData={renderEmptyData}
      renderOption={renderOption}
    />
  );
};

export const TableStories = Table.bind({});
TableStories.args = {
  bordered: false,
  rowHeight: 50,
};


const FixedTable: Story<LocalizeTableProps<TableDummyProps>> = (args) => {
  const localize = {
    bgColor: args.bgColor,
    bdColor: args.bdColor,
    color: args.color,
  };

  const onClick = React.useCallback((data: TableDummyProps, rowIndex: number) => {
    console.log({
      data,
      rowIndex,
    })
  }, []);

  return (
    <LocalizeTable
      {...args}
      localize={localize}
      datasources={datasources.slice(0, 100)}
      columns={columns}
      onClickRow={onClick}
      selectedRowClassName={() => 'Selected__Row'}
      renderEmptyData={renderEmptyData}
      renderOption={renderOption}
    />
  );
};

export const FixedTableStories = FixedTable.bind({});
FixedTableStories.args = {
  bordered: false,
  fixedHeader: true,
  fixedTableHeight: 300,
  rowHeight: 50,
};

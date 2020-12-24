import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import {
  LocalizeTable,
  LocalizeTableProps,
  LocalizeTableColumnProps,
} from '../../../packages/table/dist';

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
    primaryColor: {
      defaultValue: 'default',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    neutralColor: {
      defaultValue: 'transparent',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    fontColor: {
      defaultValue: 'inversed1',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    inversedColor: {
      defaultValue: 'inversed10',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
  },
};

const columns: LocalizeTableColumnProps<TableDummyProps>[] = [{
  header: 'id',
  width: '10%',
  render: (data) => (
    <div>
      {data.id}
    </div>
  )
},{
  header: 'first_name',
  width: '20%',
  render: (data) => (
    <div>
      {data.first_name}
    </div>
  )
},{
  header: 'last_name',
  width: '20%',
  render: (data) => (
    <div>
      {data.last_name}
    </div>
  )
},{
  header: 'email',
  width: '20%',
  render: (data) => (
    <div>
      {data.email}
    </div>
  )
},{
  header: 'gender',
  width: '10%',
  render: (data) => (
    <div>
      {data.gender}
    </div>
  )
},{
  header: 'ip_address',
  width: '20%',
  render: (data) => (
    <div>
      {data.ip_address}
    </div>
  )
}];

const renderEmptyData = () => {
  return <div>There are no data</div>;
};

const Table: Story<LocalizeTableProps<TableDummyProps>> = (args) => {
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    color: args.color,
  };

  const onClick = React.useCallback((data: TableDummyProps, rowIndex: number) => {
    console.log({
      data,
      rowIndex,
    });
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
    />
  );
};

export const TableStories = Table.bind({});
TableStories.args = {
  bordered: true,
  rowHeight: 50,
};


const FixedTable: Story<LocalizeTableProps<TableDummyProps>> = (args) => {
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
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
    />
  );
};

export const FixedTableStories = FixedTable.bind({});
FixedTableStories.args = {
  bordered: true,
  fixedHeader: true,
  fixedTableHeight: 500,
  rowHeight: 50,
};

import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import {
  LocalizeVirtualTable,
  LocalizeVirtualTableProps,
  LocalizeVirtualTableColumnProps,
} from '../../../packages/table/dist';

import { storiesColorOptions, storiesIntentOptions } from '../controls';
import { datasources, TableDummyProps } from './table.dummy';

export default {
  title: 'Table/LocalizeVirtualTable',
  component: LocalizeVirtualTable,
  argTypes: {
    intent: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: storiesIntentOptions,
      },
    },
    primaryColor: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
    neutralColor: {
      defaultValue: 'neutral3',
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
    inversedFontColor: {
      defaultValue: 'inversed10',
      control: {
        type: 'select',
        options: storiesColorOptions,
      },
    },
  },
};

const columns: LocalizeVirtualTableColumnProps<TableDummyProps>[] = [
  {
    header: 'id',
    width: '10%',
    render: (data) => <div>{data.id}</div>,
  },
  {
    header: 'first_name',
    width: '20%',
    render: (data) => <div>{data.first_name}</div>,
  },
  {
    header: 'last_name',
    width: '20%',
    render: (data) => <div>{data.last_name}</div>,
  },
  {
    header: 'email',
    width: '20%',
    freezing: true,
    render: (data) => <div>{data.email}</div>,
  },
  {
    header: 'gender',
    width: '10%',
    freezing: true,
    render: (data) => <div>{data.gender}</div>,
  },
  {
    header: 'ip_address',
    width: '20%',
    render: (data) => <div>{data.ip_address}</div>,
  },
];

const renderEmptyData = () => {
  return <div>There are no data</div>;
};

const VirtualTable: Story<LocalizeVirtualTableProps<TableDummyProps>> = (args) => {
  const localize = {
    primaryColor: args.primaryColor,
    neutralColor: args.neutralColor,
    fontColor: args.fontColor,
    inversedFontColor: args.inversedFontColor,
  };

  const onClick = React.useCallback((data: TableDummyProps, rowIndex: number) => {
    console.log({
      data,
      rowIndex,
    });
  }, []);

  return (
    <LocalizeVirtualTable
      {...args}
      localize={localize}
      datasources={datasources.slice(0, 100)}
      columns={columns}
      selectedRowClassName={() => 'Selected__Row'}
      onClickRow={onClick}
      renderEmptyData={renderEmptyData}
    />
  );
};

export const VirtualTableStories = VirtualTable.bind({});
VirtualTableStories.args = {
  bordered: true,
  fixedTableHeight: 500,
  rowHeight: 50,
};

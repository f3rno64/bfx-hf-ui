/* eslint-disable react/prop-types */
import React from 'react'
import Switch from 'react-switch'
import { store } from '../../StoreWrapper'
import AlgoOrderActions from '../../redux/actions/algo-orders'
import AlgoOrderForm from '../AlgoOrderForm'
export default [{
  width: 300,
  label: 'Name',
  dataKey: 'name',
  cellRenderer: ({ rowData = {} }) => rowData.name,
}, {
  width: 300,
  label: 'Created',
  dataKey: 'mts',
  cellRenderer: () => 'Default',
}, {
  width: 300,
  label: 'Actions',
  dataKey: 'gid',
  cellRenderer: ({ rowData = {} }) => (
    <Switch
      onChange={() => {
        store.dispatch(AlgoOrderActions.changeStatus(rowData.id, !rowData.active))
      }}
      checked={rowData.active}
      height={14}
      width={28}
      onColor='#9dc24a'
      offColor='#2c3940'
    />
  ),
}, {
  width: 300,
  label: 'Create',
  dataKey: 'add',
  cellRenderer: ({ rowData }) => (
    <AlgoOrderForm data={rowData} />
  ),
}]

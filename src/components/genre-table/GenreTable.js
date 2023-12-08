import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import style from './GenreTable.module.css';

const GenreTable = (props) => {


  const columns = [
    { field: 'id', header: 'Id' },
    { field: 'name', header: 'Name' },
  ];


  return (
    <div className={style.card}>
      <DataTable
        cellClassName={style.cell}
        dataKey='id'
        rowClassName={style.row}
        value={props.genres}
        cellSelection
        selectionMode="single"
        selection={props.selected}
        onSelectionChange={(e) => props.setSelected(e.value)}
        tableStyle={{ minWidth: '50rem' }}
      >
        {columns.map((col, i) => (
          <Column key={col.field} sortable field={col.field} header={col.header} />
        ))}
      </DataTable>
    </div>
  );
}

export default GenreTable;

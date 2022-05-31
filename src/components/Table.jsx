import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function Table(props) {
    const [datatable, setDatatable] = React.useState({
        columns: props.header,
        rows: props.data
    });

    return (
        <MDBDataTableV5
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={datatable}
            className='table'
            searchTop
            searchBottom={false}
            barReverse
            scrollX

        />
    );
}


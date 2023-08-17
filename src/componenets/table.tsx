import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { customerState } from '../types/customer/State';
import { customerData } from '../types/customer/Data';
import { Box, Chip, colors } from '@mui/material';

function defineGridColDefs(): GridColDef[] {
  const colDef: GridColDef[] = [
    {
      field: 'firstName',
      headerName: 'name',
      width: 150,
      valueGetter: (params) => `${params.row.firstName}, ${params.row.lastName}`,
    },
    {
      field: 'status',
      headerName: 'status',
      width: 100,
      renderCell: (params) => {
        let colour: string;
        switch (params.row.state){
        case('contact'):
          colour = 'red';
          break;
        case('lead'):
          colour = 'orange';
          break;
        case('project'):
          colour = 'green';
          break;
        default:
          colour = 'gray';
          break;
        }
        return(
          <Box
            sx={{
              backgroundColor: colour,
            }}
          >
            {params.row.state}
          </Box>
        );

      }
    }
  ];
  return colDef;
}

const gridStyle = {
  borderColour: 'primary.light',
};

interface customerTaskTableProps {
  Data: customerData[];
}

export default function customerTaskTable({ Data }: customerTaskTableProps) {
  return <DataGrid 
    columns={defineGridColDefs()}
    rows={Data}
    sx={gridStyle}
    getRowId={(row) => row.customerId}
  />;
}
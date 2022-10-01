import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons'
import {productRows} from '../../dummyData'
import {Link} from 'react-router-dom'
import { useState } from 'react';

import './productList.css'

const ProductList = () => {
    const[data, setData] =  useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Productos', width: 200 , renderCell:(params) => {
          return(
            <div className='productlistItem'>
              <img className='productListImg' src={params.row.img} alt=''/>
              {params.row.name}
            </div>
          )
        }},
        { field: 'stock', headerName: 'Inventario', width: 200 },
        {
          field: 'status',
          headerName: 'Estado',
          width: 130,
        },
        {
          field: 'price',
          headerName: 'Precio',
          width: 240,
        },
        {
          field:'action',
          headerName:'Acción',
          width:150,
          renderCell:(params) =>{
            return(
              <>
                <Link to={"/product/" + params.row.id}>
                    <button className="productListEdit">Editar</button>
                </Link>
                <DeleteOutline className='productListDelete' onClick={() => handleDelete(params.row.id)}/>
              </>
            )
          },
        },
        
      ];

  return (
    <div className='productList'>
        <DataGrid 
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    </div>
  )
}

export default ProductList
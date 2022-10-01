import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import {DeleteOutline} from '@material-ui/icons'
import {userRows} from '../../dummyData'
import {Link} from 'react-router-dom'
import { useState } from 'react';

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }
 
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'Usuario', width: 200 , renderCell:(params) => {
      return(
        <div className='UserlistUser'>
          <img className='userListImg' src={params.row.avatar} alt=''/>
          {params.row.username}
        </div>
      )
    }},
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Estado',
      width: 130,
    },
    {
      field: 'transaction',
      headerName: 'Volumen de Transacciones',
      width: 240,
    },
    {
      field:'action',
      headerName:'Acción',
      width:150,
      renderCell:(params) =>{
        return(
          <>
            <Link to={'/user/'+params.row.id }>
              <button className='UserListEdit'>Editar</button>
            </Link>
            <DeleteOutline className='UserListDelete' onClick={() => handleDelete(params.row.id)}/>
          </>
        )
      },
    },
    
  ];
  
 
  

  return (
    <div className='userList'>
      
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

export default UserList
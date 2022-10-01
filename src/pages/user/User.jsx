import './user.css'
import { Link } from 'react-router-dom'

import {
    PermIdentity,CalendarToday,PhoneAndroid,
    EmailOutlined,HomeOutlined,Publish
} from '@material-ui/icons'

const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Editar Usuario</h1>
            <Link to='/newUser'>
                <button className="userAddButton">Crear</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  className='userShowImg'/>
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">User 1</span>
                        <span className="userShowUserTitle">Trabajo</span>
                    </div>
                </div>
                <div className="userShowBottom">

                    <span className="UserShowTitle">Detalles de Usuario</span>
                    <div className="userShowInfo">
                        <PermIdentity className='userShowIcon'/>
                        <span className="userShowInfoTitle">cifu1199</span>
                    </div>

                    <div className="userShowInfo">
                        <CalendarToday className='userShowIcon'/>
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <span className="UserShowTitle">Contactos</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className='userShowIcon'/>
                        <span className="userShowInfoTitle">+1 123 456 67</span>
                    </div>
                    <div className="userShowInfo">
                        <EmailOutlined className='userShowIcon'/>
                        <span className="userShowInfoTitle">correo@correo.com</span>
                    </div>
                    <div className="userShowInfo">
                        <HomeOutlined className='userShowIcon'/>
                        <span className="userShowInfoTitle">Bogota | Colombia</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Editar</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label> Nombre de Usuario</label>
                            <input 
                                type="text" 
                                placeholder='cifu1199'  
                                className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                            <label> Nombre Completo</label>
                            <input 
                                type="text" 
                                placeholder='Edward Cifuentes'  
                                className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                            <label> Email</label>
                            <input 
                                type="email" 
                                placeholder='correo@correo.com'  
                                className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                            <label>Telefono</label>
                            <input 
                                type="text" 
                                placeholder='+1 123 456 67'  
                                className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                            <label>Direccion</label>
                            <input 
                                type="text" 
                                placeholder='Bogota | Colombia'  
                                className='userUpdateInput'/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='userUpdateImg'/>
                            <label htmlFor="file"><Publish className='UserUpdateIcon'/></label>
                            <input type="file" id='file' style={{display:'none'}}/> 
                            
                        </div>
                        <button className="userUpdateButton">Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User
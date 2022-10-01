
import './sidebar.css'
import {
    LineStyle, Timeline, TrendingUp,
    PersonOutline,Storefront,AttachMoney,
    BarChart,MailOutline,DynamicFeed,
    Message,Work,Report,
} from '@material-ui/icons'

import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to='/' className='link'>
                        <li className="sidebarListItem active">
                            <LineStyle className='sidebarIcon'/>
                            Inicio
                        </li>
                    </Link>

                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>

                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Ventas
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Menú</h3>
                <ul className="sidebarList">
                    <Link to='/users' className='link'>
                        <li className="sidebarListItem active">
                            <PersonOutline className='sidebarIcon'/>
                            Usuarios
                        </li>
                    </Link>
                    <Link to='/products' className='link'>
                        <li className="sidebarListItem">
                            <Storefront className='sidebarIcon'/>
                            Productos
                        </li>
                    </Link>

                    <li className="sidebarListItem">
                        <AttachMoney className='sidebarIcon'/>
                        Transacciones
                    </li>

                    <li className="sidebarListItem">
                        <BarChart className='sidebarIcon'/>
                        Reportes
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notificaciones</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <MailOutline className='sidebarIcon'/>
                        Correo
                    </li>

                    <li className="sidebarListItem">
                        <DynamicFeed className='sidebarIcon'/>
                        Retroalimentación
                    </li>

                    <li className="sidebarListItem">
                        <Message className='sidebarIcon'/>
                        Mensajes
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Equipo</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <Work className='sidebarIcon'/>
                        Administrar
                    </li>

                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>

                    <li className="sidebarListItem">
                        <Report className='sidebarIcon'/>
                        Informes
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
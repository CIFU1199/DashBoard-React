import './widgetSm.css'
import {Visibility} from '@material-ui/icons'

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">Nuevos miembros</span>
        <ul className="widgetSmList">
            
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">User 1</span>
                    <span className="widgetSmUserTitle">Yob</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Mostrar
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">User 2</span>
                    <span className="widgetSmUserTitle">Yob</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Mostrar
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">User 3</span>
                    <span className="widgetSmUserTitle">Yob</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Mostrar
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">User 4</span>
                    <span className="widgetSmUserTitle">Yob</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Mostrar
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">User </span>
                    <span className="widgetSmUserTitle">Yob</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Mostrar
                </button>
            </li>

            
        </ul>
    </div>
  )
}

export default WidgetSm
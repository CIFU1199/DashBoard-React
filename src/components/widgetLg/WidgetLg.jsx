import './widgetLg.css'

const WidgetLg = () => {
  const Button = ({type}) =>{
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }

  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Últimas Transacciones</h3>
        <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Clientes</th>
            <th className="widgetLgTh">Fecha</th>
            <th className="widgetLgTh">Monto</th>
            <th className="widgetLgTh">Estado</th>
          </tr>
        
          
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
              <span className="widgetLgName">User 1</span>
            </td>
            <td className="widgetLgDate">26 sept 2022</td>
            <td className="widgetLgMonto">$122.00</td>
            <td className="widgetLgState"><Button type='Aprobado' /></td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
              <span className="widgetLgName">User 1</span>
            </td>
            <td className="widgetLgDate">26 sept 2022</td>
            <td className="widgetLgMonto">$122.00</td>
            <td className="widgetLgState"><Button type='Rechazado' /></td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
              <span className="widgetLgName">User 1</span>
            </td>
            <td className="widgetLgDate">26 sept 2022</td>
            <td className="widgetLgMonto">$122.00</td>
            <td className="widgetLgState"><Button type='Pendiente' /></td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
              <span className="widgetLgName">User 1</span>
            </td>
            <td className="widgetLgDate">26 sept 2022</td>
            <td className="widgetLgMonto">$122.00</td>
            <td className="widgetLgState"><Button type='Aprobado' /></td>
          </tr>


        </tbody>
        </table>
    </div>
  )
}

export default WidgetLg
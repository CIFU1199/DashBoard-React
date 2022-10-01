import './newPage.css'

const NewUser = () => {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">Nuevo Usuario</h1>
        <form className="newUserForm">

          <div className="newUserItem">
            <label > Nombre de Usuario</label>
            <input type="text" placeholder='cifu1199'/>
          </div>

          <div className="newUserItem">
            <label > Nombre Completo</label>
            <input type="text" placeholder='Edward Cifuentes'/>
          </div>

          <div className="newUserItem">
            <label >Correo</label>
            <input type="email" placeholder='correo@correo.com'/>
          </div>

          <div className="newUserItem">
            <label > Contraseña</label>
            <input type="text" placeholder='Contraseña'/>
          </div>
          
          <div className="newUserItem">
            <label > Telefono</label>
            <input type="text" placeholder='+1 123 456 78'/>
          </div>

          <div className="newUserItem">
            <label > Dirección</label>
            <input type="text" placeholder='Bogota | Colombia'/>
          </div>

          <div className="newUserItem">
            <label > Genero</label>
            <div className="newUserGen">
              <input type="radio" name="genero" id='masculino' value='masculino'/>
              <label htmlFor="masculino">Masculino</label>

              <input type="radio" name="genero" id='femenino' value='femenino'/>
              <label htmlFor="femenino">Femenino</label>

              <input type="radio" name="genero" id='nobin' value='nobin'/>
              <label htmlFor="nobin">No Binario</label>
            </div>

          </div>
          <div className="newUserItem">
            <label>Activo</label>
            <select name="activo" id="activo" className="newUserSelect">
              <option value="yes">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className="newUserButton">Crear</button>
        </form>
    </div>
  )
}

export default NewUser
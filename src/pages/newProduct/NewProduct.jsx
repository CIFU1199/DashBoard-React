import './newProduct.css'

const NewProduct = () => {
  return (
    <div className='newProducto'>
        <h1 className="addProductTitle">Nuevo Producto</h1>
        <form className='addProductForm'>
            <div className="addProductItem">
                <label>Imagen</label>
                <input type="file"  id='file'/>
            </div>

            <div className="addProductItem">
                <label>Nombre</label>
                <input type="text"  id='Apple Airpods'/>
            </div>

            <div className="addProductItem">
                <label>Inventario</label>
                <input type="text"  id='123'/>
            </div>

            <div className="addProductItem">
                <label>Activo</label>
                <select name="activo" id="activo">
                    <option value="yes">Si</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="addProductButton">Crear</button>

        </form>
    </div>
  )
}

export default NewProduct
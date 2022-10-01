import { Link } from 'react-router-dom'
import './product.css'
import Chart from '../../components/chart/Chart'
import {productData} from '../../dummyData'
import { Publish } from '@material-ui/icons'



const Product = () => {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Producto</h1>
            <Link to = '/newproduct'>
                <button className="productAddButton">Crear</button>
            </Link>
        </div>
        <div className="productTop"> 
            <div className="productTopLeft">
                <Chart data={productData} title='Reporte de Ventas' dataKey="Ventas" />
                
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">Ventas:</span>
                        <span className="productInfoValue">5123</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">Activo:</span>
                        <span className="productInfoValue">Si</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">En Inventario:</span>
                        <span className="productInfoValue">No</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className='productForm'>
                <div className="productFormLeft">
                    <label>Nombre del Producto</label>
                    <input type="text" placeholder='Apple AirPod' />
                    <label>En Inventario</label>
                    <select name="inStock" id="idStock">
                        <option value="yes">Si</option>
                        <option value="no">No</option>
                    </select>

                    <label>Activo</label>
                    <select name="activo" id="activo">
                        <option value="yes">Si</option>
                        <option value="no">No</option>
                    </select>

                </div>
                
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                        <label htmlFor="file">
                            <Publish/>
                        </label>
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className='productButton'>Actualizar</button>

                </div>
            </form>
        </div>

    </div>
  )
}

export default Product
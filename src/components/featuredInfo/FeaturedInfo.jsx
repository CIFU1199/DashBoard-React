import './featuredInfo.css'
import {ArrowDownward,ArrowUpward} from '@material-ui/icons'

const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Ingresos</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">$-11,4<ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">en comparación con el mes pasado</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Ventas</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate">$-1,4<ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className="featuredSub">en comparación con el mes pasado</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Costo</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,225</span>
                <span className="featuredMoneyRate">$+2,4<ArrowUpward className='featuredIcon '/></span>
            </div>
            <span className="featuredSub">en comparación con el mes pasado</span>
        </div>
    </div>
  )
}

export default FeaturedInfo
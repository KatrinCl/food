import { assets } from './../../Assets/assets.js'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> La Katrin App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload
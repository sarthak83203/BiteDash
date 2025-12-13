import { assets } from "../../assets/assets";
import "./AppDownload.css"
export default function AppDownload(){
    return(
        <div className='app-download' id='app-download'>
            <p>For Better Delivery Download <br/>BiteDash</p>
            <div className="app-dowload-platform">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>


        </div>

    );

}
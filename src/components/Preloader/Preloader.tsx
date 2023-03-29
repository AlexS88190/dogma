import React, {FC} from 'react'
import './Preloader.css'


type PreloaderProps = {
    isPreloader: boolean
}

const Preloader: FC<PreloaderProps> = ({ isPreloader }) => {
    return (
        <div className= {`preloader ${isPreloader && "preloader_visible"}`}>
            <div className="preloader__container">

                <div className="preloader__self">
                    <div className="preloader__self-container">
                        <span className="preloader__round"></span>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Preloader

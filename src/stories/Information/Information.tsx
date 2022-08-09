import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Image} from "../Image/Image";
import './information.scss'

interface InformationProps {
    img_size?:number
    info?:Array<string>
}

export const Information = ({
    img_size=16,
    info=[],
    ...props
}: InformationProps) => {
    return (
        <div className="rucio-info">
            <Popup trigger={
                <button>
                    <Image
                        type="popup"
                        src="https://img.icons8.com/ios/50/000000/info--v1.png"
                        height={img_size}
                        width={img_size}
                    />
                </button>
            }>
                {info.map(x => {
                    return <p>{x}</p>
                })}
            </Popup>
        </div>
    )
}

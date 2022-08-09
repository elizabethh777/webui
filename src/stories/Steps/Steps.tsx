import { Image } from '../Image/Image'

import './steps.scss'

interface StepsProps {
    steps?:Array<string>
    selected?: number
}

export const Steps = ({
    steps=['1 step', '2 step', '3 step'],
    selected=1,
}: StepsProps) => (
    <div className="steps_wrapper">
        {steps.map((element, index )=> {
            return (index === selected) ?
                (
                    <div className="step">
                        <Image
                            type="step_img"
                            src={require('/src/images/step_selected.png')}
                        />
                        <div className="over">{element}</div>
                    </div>
                )
                :(
                    <div className="step">
                        <Image
                            type="step_img"
                            src={require('/src/images/step.png')}
                        />
                        <div className="over">{element}</div>
                    </div>
                );
        })}
    </div>
)
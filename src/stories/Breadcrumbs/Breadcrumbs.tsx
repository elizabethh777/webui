import { Button } from '../Button/Button'
import { Image } from '../Image/Image'

import './breadcrumbs.scss'

interface BreadcrumbsProps {
    version?: string
    path?:Array<any>
}


export const Breadcrumbs = ({
    version = '1.30',
    path=[["1st element_link","1st element"],[ "2nd element","2nd element"]],
}: BreadcrumbsProps) => (
    <div className="breadcrumbs_wrapper">
        <>
            <div className="version">
                <a href="/home">
                    <Image
                        src={require('/src/images/logo_white.png')}
                    />
                </a>
                <span className="version_number">
                    {version}
                </span>
            </div>
            <div className="path">
                {path.map((element, index )=> {
                    return (index === 0) ?
                        (<a href={element[0]}> {element[1]}</a>)
                        :(<a href={element[0]}> &#x2192; {element[1]}</a>);
                })}
            </div>
            <div className="buttons">
                <a href="https://github.com/rucio/rucio/issues" target="_blank">
                <Button
                    kind="secondary"
                    size="small"
                    title="Report to our GitHub error section if you find any errors or if you have any suggestions for interface improvements"
                    label="Report error"
                />
                </a>
            </div>
        </>
    </div>
)
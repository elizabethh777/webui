import { Button } from '../Button/Button'
import { Image } from '../Image/Image'

import './breadcrumbs.scss'

interface BreadcrumbsProps {
    version?: string
    pathElement1?: string
    pathElement1Link?:string
    pathElement2?: string
    pathElement2Link?:string
}

export const Breadcrumbs = ({
    version = '1.30',
    pathElement1,
    pathElement1Link,
    pathElement2,
    pathElement2Link,
}: BreadcrumbsProps) => (
    <div className="breadcrumbs_wrapper">
        <>
            <div className="version">
                <Image
                    src={require('/src/images/logo_white.png')}
                />
                <span className="version_number">
                    {version}
                </span>
            </div>
            <div className="path">
                <a href={pathElement1Link}>
                    {pathElement1}
                </a>
                &#x2192;
                <a href={pathElement2Link}>
                    {pathElement2}
                </a>
            </div>
            <div className="buttons">
                <a href="https://forms.gle/QQdhuWPLrFhgcWaNA" target="_blank">
                    <Button
                        kind="secondary"
                        size="small"
                        title="Fill the survey, if you would like to help improve Rucio"
                        label="Improve Rucio"
                    />
                </a>
                &nbsp;
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
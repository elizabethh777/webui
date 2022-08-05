import './dropdown.scss'

interface DropdownProps {
    label?: string
    required?:boolean
    name?: string
    show?: 'success' | 'warn' | 'danger' | 'normal'
    size?: number
    multiple?: boolean
    options?: Array<any>
    header?:string
    headerSelected?:boolean
    onChange?: (args: any) => void
}

export const Dropdown =({
    label = 'Purpose of dropdown',
    required=true,
    name='Example Dropdown',
    show,
    size=1,
    multiple=false,
    options=['option1','option2'],
    headerSelected=true,
    header,
    onChange,
    ...props
}: DropdownProps) => {
    return (
        <label>
            {label}
            <select
                name={name}
                className={`rucio-dropdown menu ${show}`}
                required={required}
                size={size}
                multiple={multiple}
                onChange={onChange}
            >
                {headerSelected == true ?
                    <option disabled selected>{header}</option> :
                    <option disabled>{header}</option>
                }
                {options.map(x => {
                    return <option value={x} key={x} >{x}</option>
                })}
            </select>
        </label>
    )
}
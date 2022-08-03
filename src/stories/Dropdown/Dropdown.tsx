import './dropdown.scss'

interface DropdownProps {
    label?: string
    required?:boolean
    name?: string
    show?: 'success' | 'warn' | 'danger'
    size?: number
    multiple?: boolean
    options?:any
    onChange?: (args: any) => void
}

export const Dropdown =({
    label = 'Purpose of dropdown',
    required=true,
    name='Example Dropdown',
    show,
    size=1,
    multiple=false,
    options,
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
                <option>1st option</option>
                <option>2nd option</option>
                <option>3rd option</option>
            </select>
        </label>
    )
}
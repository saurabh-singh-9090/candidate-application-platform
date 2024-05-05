import Select from 'react-select'

const Dropdown = (props) => {

    const {title,options,isMultipleOptionsAllowed} = props;

    return(
        <div className='dropdown'>
            <p>{title}</p>
            <Select
                closeMenuOnSelect={true}
                isMulti={isMultipleOptionsAllowed}
                options={options}
                placeholder={title}
            />
        </div>
    )
}

export default Dropdown;
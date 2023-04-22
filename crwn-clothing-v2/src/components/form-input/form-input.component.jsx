import './form-input.styles.scss'


const Forminput=({label,...otherProps})=>{
    return(<div className="group">
        <lable className={`${otherProps.value.length? 'shrink':''}
        form-input-lable`}> {label}</lable>
        <input className="form-input"  {...otherProps}></input>
        </div>
    )
}

export default Forminput;
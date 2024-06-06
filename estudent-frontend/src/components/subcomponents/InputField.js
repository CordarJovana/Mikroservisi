import 'bootstrap/dist/css/bootstrap.min.css';
function InputField({ labelName, fieldType, placeholder, propertyValue, parentCallback }) {

    const onChangedValue = (event) => {
          parentCallback(event.target.value);
          event.preventDefault();
      }
    return (
      <div className="form-group mt-3">
      <label>{labelName}</label>
      <input
        type={fieldType}
        className="form-control mt-1"
        placeholder={placeholder}
        value = {propertyValue}
        onChange = {onChangedValue}
      />
    </div>
    );
  }
 
  export default InputField;
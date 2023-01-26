import "./Checkbox.css";

const CheckBox = ({ label, value, onChange }) => {
  return (
    <div className="Checkbox">
      <div className="checkbox">
        <input
          className="checkbox"
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
      </div>
      <div className="checkbox-label">
        <label>{label}</label>
      </div>
    </div>
  );
};

export default CheckBox;

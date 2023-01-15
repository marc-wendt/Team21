import "./Checkbox.css";

const CheckBox = ({ label, value, onChange }) => {
  return (
    <div className="Checkbox">
      <div className="checkbox">
        <label>
          <input
            className="checkbox"
            type="checkbox"
            checked={value}
            onChange={onChange}
          />
        </label>
      </div>
      <div className="checkbox-label">
        <label>{label}</label>
      </div>
    </div>
  );
};

export default CheckBox;

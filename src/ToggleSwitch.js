import "./ToggleSwitch.css";

const ToggleSwitch = ({ label, isOn, handleToggle }) => {
  return (
    <div className="ToggleSwitch">
      <div className="switch">
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          style={{ background: isOn && "rgb(25, 96, 189)" }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
      </div>
      <div className="toggleswitch-label">
        <label>{label}</label>
      </div>
    </div>
  );
};

export default ToggleSwitch;

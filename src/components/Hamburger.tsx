import "./Hamburger.css";
export default function Hamburger(props: {
  onButtonClick: () => void;
  active: boolean;
}) {
  return (
    <button
      onClick={props.onButtonClick}
      id="Hamburger-Menu"
      aria-label="Hamburger-Menu"
      title="Menu"
    >
      <div className={`cursor-pointer hamburger ${props.active ? "open" : ""}`}>
        <span />
        <span />
        <span />
      </div>
    </button>
  );
}

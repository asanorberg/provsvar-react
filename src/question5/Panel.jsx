import { useState } from "react";

export default function Panel({ children, title, collapsible }) {
  const [isOpen, setIsOpen] = useState(open);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div title={title}>
      <div>{title}</div>
      {collapsible ? (
        <button type="button" className="btn" onClick={handleFilterOpening}>
          {!isOpen ? <p>Visa mer</p> : <p>Visa mindre</p>}
        </button>
      ) : (
        <p className="text-red-500">inte collapsible</p>
      )}

      <div>{isOpen && <div className="p-3">{children}</div>}</div>
    </div>
  );
}

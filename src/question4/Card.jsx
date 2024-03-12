function Card({ children }) {
  return (
    <div className="rounded-xl w-80 h-96 mb-10 flex-shrink-0 border shadow-lg overflow-hidden">
      <div className=" h-28 p-8 pt-4"> {children} </div>
    </div>
  );
}

export default Card;

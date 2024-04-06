export default function Indicators({ prev, next }) {
  return (
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href={`#slide${prev}`} className="btn btn-circle">
        ❮
      </a>
      <a href={`#slide${next}`} className="btn btn-circle">
        ❯
      </a>
    </div>
  );
}

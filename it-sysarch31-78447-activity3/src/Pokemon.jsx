
import "./index.css";

function Pokemon({ name, type, base, image, id }) {
  const baseStats = Object.entries(base);

  return (
    <div className="Pokemon">
      <img src={image} alt={name} />
      <p>{id}</p>
      <p>{name}</p>
      <p>{type}</p>
      <ul>
        {baseStats.map(([stat, value]) => (
          <li key={stat}>
            {stat}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokemon;

import "./index.css";

function Pokemon({ name, type, base, image, id, language }) { 
  const baseStats = Object.entries(base);
  
  return (
    <div className="Pokemon">
          <img className="pic" alt=" " src={image} />
          <h2 className="id">{id}</h2>
          <h2 className="name">{name[language]}</h2> 
      {type.length === 1 ? (
        <h2 className="type">Type: {type[0]}</h2>
      ) : (
        <>
          <h2 className="type">{type[0]}</h2>
          <h2 className="type2"> {type[1]}</h2>
        </>
      )}
      <h3 className="base">
        HP: {base.HP}, Attack: {base.Attack}, Defense: {base.Defense}, 
        Sp. Attack: {base.Sp_Attack}, Sp. Defense: {base.Sp_Defense}, Speed: {base.Speed}
      </h3>
    </div>
  );
}

export default Pokemon;
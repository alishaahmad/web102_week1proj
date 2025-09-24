/* Simple, reusable card component that receives props */
const Card = ({ title, date, location, link, type, blurb }) => {
  return (
    <article className={`card ${type?.toLowerCase() || ''}`}>
      <div className="card-header">
        <span className="badge">{type}</span>
        <h3>{title}</h3>
      </div>

      <ul className="meta">
        {date && <li><strong>Date:</strong> {date}</li>}
        {location && <li><strong>Location:</strong> {location}</li>}
      </ul>

      {blurb && <p className="blurb">{blurb}</p>}

      {link && (
        <a className="btn" href={link} target="_blank" rel="noreferrer">
          learn more
        </a>
      )}
    </article>
  );
};

export default Card;

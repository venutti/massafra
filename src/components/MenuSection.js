export default function MenuSection({ title, items }) {
  const renderedItems = () => {
    return items.map((item, index) => (
      <div key={index} className="section-item">
        <div className="item-info">
          <h5 className="item-name">{item.name}</h5>
          <p className="item-description">{item.description}</p>
        </div>
        <p className="item-price">$ {item.price}</p>
      </div>
    ));
  };
  return (
    <section className="section">
      <h4 className="section-title">{title}</h4>
      {renderedItems()}
    </section>
  );
}

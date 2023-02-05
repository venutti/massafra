import MenuSection from "./MenuSection";

export default function MenuCategory({ category, description, sections }) {
  return (
    <div className="category">
      <h3 className="category-title">{category}</h3>
      <p className="category-description">{description}</p>
      {sections.map((section, index) => (
        <MenuSection key={index} title={section.title} items={section.items} />
      ))}
    </div>
  );
}

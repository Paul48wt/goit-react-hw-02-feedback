export const Section = ({ title, children }) => {
  return (
    <section className="section">
      <p className="sectionTitle">{title}</p>
      {children}
    </section>
  );
};

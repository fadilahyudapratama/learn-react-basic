function Section({ children }) {
  return (
    <section style={{ marginBottom: "60px" }}>
      {children}
      <hr />
    </section>
  );
}

export default Section;
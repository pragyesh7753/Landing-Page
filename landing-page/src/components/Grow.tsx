
const Grow = () => {
  return (
    <section
      style={{
        background: "rgba(217, 33, 33, 1)",
        color: "#fff",
        textAlign: "center",
        padding: "100px 0",
        position: "relative",
      }}
    >
      <h2 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "2rem" }}>
        Ready to Grow Your Business?
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button
          style={{
            background: "#fff",
            color: "#d92121",
            border: "none",
            borderRadius: "2rem",
            padding: "0.7rem 2rem",
            fontSize: "1.1rem",
            fontWeight: 500,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          Start selling
        </button>
        <button
          style={{
            background: "transparent",
            color: "#fff",
            border: "2px solid #fff",
            borderRadius: "2rem",
            padding: "0.7rem 2rem",
            fontSize: "1.1rem",
            fontWeight: 500,
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          Chat with consultant
        </button>
      </div>
    </section>
  );
};

export default Grow;
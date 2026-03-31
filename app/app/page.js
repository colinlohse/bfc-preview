export default function Home() {
  return (
    <div>

      <section style={{
        height: "100vh",
        background: "#0B1F3A",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
        <div>
          <h1 style={{ fontSize: "48px" }}>
            Business & Finance Club Flensburg
          </h1>
          <p>Connecting Students with Capital Markets</p>
        </div>
      </section>

      <section style={{ padding: "80px", maxWidth: "800px", margin: "auto" }}>
        <h2>Über uns</h2>
        <p>
          Der Business & Finance Club Flensburg verbindet Studierende mit Kapitalmärkten,
          Unternehmen und Karrierechancen.
        </p>
      </section>

      <section style={{ padding: "80px", background: "#f5f5f5" }}>
        <h2 style={{ textAlign: "center" }}>Team</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          maxWidth: "900px",
          margin: "auto"
        }}>
          <div style={{ background: "white", padding: "20px" }}>Colin Lohse</div>
          <div style={{ background: "white", padding: "20px" }}>Daneel Klink</div>
          <div style={{ background: "white", padding: "20px" }}>Jakob Barth</div>
        </div>
      </section>

      <section style={{
        padding: "80px",
        background: "black",
        color: "white",
        textAlign: "center"
      }}>
        <h2>Mitglied werden</h2>
      </section>

    </div>
  );
}

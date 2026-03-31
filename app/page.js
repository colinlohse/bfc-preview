export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section style={{
        height: "100vh",
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white"
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)"
        }} />

        <div style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px"
        }}>
          <h1 style={{ fontSize: "56px", marginBottom: "20px" }}>
            Business & Finance Club Flensburg
          </h1>
          <p style={{ fontSize: "18px", maxWidth: "600px" }}>
            Wir verbinden ambitionierte Studierende mit Kapitalmärkten,
            Unternehmen und Karrierechancen im Finance-Bereich.
          </p>
        </div>
      </section>

      {/* ÜBER UNS */}
      <section style={{
        padding: "100px 20px",
        maxWidth: "900px",
        margin: "auto"
      }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Über uns
        </h2>

        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Der Business & Finance Club Flensburg ist eine studentische Initiative,
          die Studierende frühzeitig mit Kapitalmärkten, Unternehmen und realen
          Karrierewegen im Finance-Bereich verbindet.
        </p>
      </section>

      {/* VALUES */}
      <section style={{
        background: "#f7f7f7",
        padding: "80px 20px"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "auto"
        }}>
          {["Praxisnähe", "Netzwerk", "Karriere"].map((title, i) => (
            <div key={i} style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px"
            }}>
              <h3>{title}</h3>
              <p style={{ color: "#666" }}>
                Hochwertige Einblicke und Kontakte im Finance-Bereich.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: "100px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Unser Team
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "auto"
        }}>
          {["Colin Lohse", "Daneel Klink", "Jakob Barth"].map((name, i) => (
            <div key={i} style={{
              background: "#fff",
              border: "1px solid #eee",
              padding: "30px",
              textAlign: "center"
            }}>
              <div style={{
                height: "150px",
                background: "#ddd",
                marginBottom: "15px"
              }} />
              <h4>{name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section style={{
        padding: "80px 20px",
        background: "#111",
        color: "white",
        textAlign: "center"
      }}>
        <h2>Events & Konferenzen</h2>
        <p style={{ color: "#bbb" }}>
          BVH Konferenzen, Vorträge und Networking Events.
        </p>
      </section>

      {/* CTA */}
      <section style={{
        padding: "80px",
        background: "#000",
        color: "white",
        textAlign: "center"
      }}>
        <h2>Werde Mitglied</h2>
        <p style={{ marginBottom: "20px" }}>
          Starte deine Karriere im Finance-Bereich.
        </p>

        <button style={{
          padding: "12px 24px",
          background: "white",
          color: "black",
          border: "none",
          cursor: "pointer"
        }}>
          Jetzt bewerben
        </button>
      </section>

    </div>
  );
}

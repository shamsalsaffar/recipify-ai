export const dynamic = "force-dynamic";

async function getSharedRecipe(id) {
  const res = await fetch(`http://localhost:8080/api/share/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) return null;
  if (!res.ok) return null;

  return res.json();
}

export default async function SharePage({ params }) {
  const data = await getSharedRecipe(params.id);

  if (!data) {
    return (
      <main style={styles.body}>
        <div style={styles.card}>
          <h1 style={styles.h1}>Recept hittades inte</h1>
          <p style={styles.text}>
            Länken är ogiltig eller så har backend startats om.
          </p>
        </div>
      </main>
    );
  }

  // ✅ robust: backend kan skicka usedIngredients eller ingredients
  const recipeName = data.recipeName || "Recept";
  const ingredients = data.usedIngredients || data.ingredients || [];
  const steps = data.steps || [];

  return (
    <>
      {/* ✅ Fonts (samma känsla som din web.html) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Patrick+Hand&display=swap"
        rel="stylesheet"
      />

      <main style={styles.body}>
        <div style={styles.card}>
          <h1 style={styles.h1}>{recipeName}</h1>

          <div style={styles.section}>
            <div style={styles.subtitle}>Ingredienser</div>
            <ul style={styles.ul}>
              {ingredients.map((i, idx) => (
                <li key={idx} style={styles.li}>{i}</li>
              ))}
            </ul>
          </div>

          <div style={styles.section}>
            <div style={styles.subtitle}>Tillagning</div>

            {/* ✅ steg i punktformat */}
            <ul style={styles.ul}>
              {steps.map((s, idx) => (
                <li key={idx} style={styles.li}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

const styles = {
  body: {
    minHeight: "100vh",
    margin: 0,
    padding: "2rem",
    background: "linear-gradient(135deg, #fde2f3, #f9a8d4, #fbcfe8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Patrick Hand', cursive",
  },
  card: {
    width: "min(760px, 92vw)",
    background: "rgba(255,255,255,0.92)",
    padding: "2.25rem",
    borderRadius: "24px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
    border: "2px solid rgba(176, 58, 106, 0.15)",
  },
  h1: {
    fontFamily: "'Caveat', cursive",
    fontSize: "3rem",
    textAlign: "center",
    margin: "0 0 1rem 0",
    color: "#b03a6a",
    textShadow: "2px 2px 0 rgba(255, 255, 255, 0.85)",
  },
  section: {
    marginTop: "1.5rem",
  },
  subtitle: {
    fontWeight: 700,
    textDecoration: "underline",
    color: "#a0335e",
    marginBottom: "0.6rem",
    fontSize: "1.2rem",
  },
  ul: {
    paddingLeft: "1.5rem",
    margin: 0,
  },
  li: {
    marginBottom: "0.6rem",
    fontSize: "1.15rem",
    color: "#5c1f38",
    lineHeight: 1.45,
  },
  text: {
    textAlign: "center",
    fontSize: "1.1rem",
    color: "#5c1f38",
    marginTop: "0.75rem",
  },
};


const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function generateRecipe(ingredients, maxSteps) {
  const response = await fetch(`${API_BASE_URL}/api/recipes/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients,
      maxSteps,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate recipe");
  }

  return response.json();
}

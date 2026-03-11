// ============================================================================
// CE FICHIER A DES ERREURS DE LINT VOLONTAIRES
// Le pipeline DOIT échouer quand il lint ce fichier.
// Ton job : identifier les erreurs, les fixer, et faire passer le pipeline.
// ============================================================================

// Erreur 1 : variable non utilisée (@typescript-eslint/no-unused-vars)
const unusedVariable = "je sers à rien";

// Erreur 2 : console.log (no-console)
console.log("Hello from backend");

// Erreur 3 : any type (à ajouter dans les rules si tu veux)
function processData(data: any) {
  return data;
}

// Code correct
export function add(a: number, b: number): number {
  return a + b;
}

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

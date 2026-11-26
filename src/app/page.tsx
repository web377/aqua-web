import { business } from "@content/business";

// Página mínima de la tarea 1a: solo confirma que la base funciona.
export default function Home() {
  return (
    <main id="contenido">
      <h1>{business.tradeName}</h1>
    </main>
  );
}

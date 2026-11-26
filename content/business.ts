// Datos reales del negocio. Es la única fuente: ningún componente debe
// escribir estos valores a mano.
// Los campos en null todavía no los ha entregado la clienta. El componente que
// los muestre debe ocultarlos si son null; nunca se rellenan con datos inventados.

export type Business = {
  tradeName: string;
  legalName: string;
  /** La titular es persona natural. */
  legalPersonType: "natural";
  nit: string;
  address: {
    street: string;
    city: string;
    region: string;
    country: "CO";
  };
  email: string;
  /** Responsable de pagos y reclamos. */
  claimsOfficer: string;
  phone: string | null;
  whatsapp: string | null;
  openingHours: string | null;
};

export const business: Business = {
  tradeName: "Industrias Aqua",
  legalName: "Angélica María Gordillo",
  legalPersonType: "natural",
  nit: "40332191",
  address: {
    street: "Calle 37C # 24-12",
    city: "Villavicencio",
    region: "Meta",
    country: "CO",
  },
  email: "web@aquasuministros.com",
  claimsOfficer: "Jadi Montiel",
  phone: null,
  whatsapp: null,
  openingHours: null,
};

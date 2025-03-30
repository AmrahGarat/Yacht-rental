export const paths = {
  HOME: "/",
  LIST: "/list",
  FAVORITES: "/favorites",
  RESET_PASSWORD: "/reset-password/:token",
  DETAIL: (id = ":id") => `/detail/${id}`,
  PAYMENT: (id = ":id") => `/payment/${id}`,
  RESERVATIONS: "/reservations",
  QUESTIONS: "/faq",
  ADMINPROFILE: "/admin-profile",
  PROFILE: "/profile",
  EVENTS: {
    MAIN: "/events",
    ARTBASEL: "/events/art-basel-miami-2025",
    CANNESF: "/events/cannes-film-festival-2025",
    CANNESL: "/events/cannes-lions-festival-2025",
    MIPCOM: "/events/mipcom-2025",
    ABUDHABI: "/events/abu-dhabi-grand-prix-2025",
    MONACOE: "/events/monaco-e-prix-2025",
  },
  DASHBOARD: {
    MAIN: "/dashboard",
    RENTS: {
      LIST: "/dashboard/rents",
      CREATE: "/dashboard/rents/create",
      EDIT: (id = ":id") => `/dashboard/rent/edit/${id}`,
    },
    RESERVATIONS: {
      LIST: "/dashboard/reservations",
    },
    REVIEWS: {
      LIST: "/dashboard/reviews",
    },
    CHAT: {
      VIEW: "/dashboard/chat",
      USER: (id = ":id") => `/dashboard/chat/${id}`,
    },
  },
};

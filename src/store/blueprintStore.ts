// import { create } from "zustand";
// import { Blueprint } from "../models/blueprint";

// interface BlueprintState {
//   blueprints: Blueprint[];
//   addBlueprint: (bp: Blueprint) => void;
// }

// export const useBlueprintStore = create<BlueprintState>((set) => ({
//   blueprints: JSON.parse(localStorage.getItem("blueprints") || "[]"),

//   addBlueprint: (bp) =>
//     set((state) => {
//       const updated = [...state.blueprints, bp];
//       localStorage.setItem("blueprints", JSON.stringify(updated));
//       return { blueprints: updated };
//     }),
// }));


import { create } from "zustand";
import type { Blueprint } from "../models/blueprint";

interface BlueprintState {
  blueprints: Blueprint[];
  addBlueprint: (bp: Blueprint) => void;
}

export const useBlueprintStore = create<BlueprintState>((set) => ({
  blueprints: JSON.parse(localStorage.getItem("blueprints") || "[]"),

  addBlueprint: (bp) =>
    set((state) => {
      const updated = [...state.blueprints, bp];
      localStorage.setItem("blueprints", JSON.stringify(updated));
      return { blueprints: updated };
    }),
}));

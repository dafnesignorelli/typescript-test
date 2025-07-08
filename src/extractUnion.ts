import { Equal, Expect } from "./helpers/type-utils";

export const programModeEnumMap = {
    GROUP: "group",
    ANNOUNCEMENT: "announcement",
    ONE_ON_ONE: "1on1",
    SELF_DIRECTED: "selfDirected",
    PLANNED_ONE_ON_ONE: "planned1on1",
    PLANNED_SELF_DIRECTED: "plannedSelfDirected",
  } as const;
  
  type ProgramModeMap = typeof programModeEnumMap;
  
  type AllPrograms = ProgramModeMap[ keyof ProgramModeMap]
  type AllPrograms2 = (typeof programModeEnumMap)[ keyof ProgramModeMap]
  type AllPrograms3 = ProgramModeMap["GROUP" |"ANNOUNCEMENT"| "ONE_ON_ONE"| "PLANNED_ONE_ON_ONE" | "PLANNED_SELF_DIRECTED" | "SELF_DIRECTED"]
  
  type test = Expect<
    Equal<
      AllPrograms,
      | "group"
      | "announcement"
      | "1on1"
      | "selfDirected"
      | "planned1on1"
      | "plannedSelfDirected"
    >
  >;
  
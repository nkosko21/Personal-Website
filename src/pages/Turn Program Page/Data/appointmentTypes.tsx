import Appointment from "../Types/Appointment";

export const appointmentTypes: Appointment[] = [
  {
    id: crypto.randomUUID(),
    shortName: "AF",
    longName: "Acrylic Fill",
    turns: .5,
    gradient: {from: 'red', to: 'red', deg: 90}
  },
  {
    id: crypto.randomUUID(),
    shortName: "PF",
    longName: "Pink Fill",
    turns: 1,
    gradient: {from: 'pink', to: 'pink', deg: 90}
  },
  {
    id: crypto.randomUUID(),
    shortName: "PW",
    longName: "Pink & White Fill",
    turns: 1,
    gradient: {from: 'pink', to: 'white', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "F",
    longName: "Gel Fill",
    turns: 1,
    gradient: {from: 'green', to: 'green', deg: 90}
  },
  {
    id: crypto.randomUUID(),
    shortName: "F/S",
    longName: "Full Set",
    turns: 1,
    gradient: {from: 'blue', to: 'pink', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "X",
    longName: "Gel X",
    turns: 1,
    gradient: {from: 'green', to: 'pink', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "M",
    longName: "Manicure",
    turns: .5,
    gradient: {from: 'yellow', to: 'yellow', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "P",
    longName: "Pedicure",
    turns: 1,
    gradient: {from: 'brown', to: 'brown', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "M*",
    longName: "Gel Manicure",
    turns: 1,
    gradient: {from: 'green', to: 'yellow', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "P*",
    longName: "Gel Pedicure",
    turns: 1.5,
    gradient: {from: 'green', to: 'brown', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "GB",
    longName: "Gel Builder",
    turns: 1,
    gradient: {from: 'green', to: 'orange', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "KM",
    longName: "Kid's Gel Manicure",
    turns: .5,
    gradient: {from: 'blue', to: 'yellow', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "KP",
    longName: "Kid's Gel Pedicure",
    turns: 1,
    gradient: {from: 'blue', to: 'green', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "K",
    longName: "Kid's Pedicure",
    turns: .5,
    gradient: {from: 'blue', to: 'brown', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "KC",
    longName: "Kid's Combo",
    turns: 1,
    gradient: {from: 'blue', to: 'black', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "GH",
    longName: "Gel Polish Feet",
    turns: 1,
    gradient: {from: 'green', to: 'brown', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "KF",
    longName: "Kid's Gel/P Feet",
    turns: .5,
    gradient: {from: 'blue', to: 'green', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "KH",
    longName: "Kid's Gel/P Hand",
    turns: 0,
    gradient: {from: 'blue', to: 'white', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "KGP",
    longName: "Kid's Gel/P Hand & Feet",
    turns: 1,
    gradient: {from: 'blue', to: 'gray', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "P/C",
    longName: "Polish Change",
    turns: 0, // Find Out
  },
  {
    id: crypto.randomUUID(),
    shortName: "R",
    longName: "Repair/Removal",
    turns: 0, // Find Out
  },
  {
    id: crypto.randomUUID(),
    shortName: "W",
    longName: "Wax",
    turns: 0, // Find Out
  },
  {
    id: crypto.randomUUID(),
    shortName: '+H',
    longName: 'Plus Half Turn',
    turns: .5,
    gradient: {from: 'gray', to: 'gray', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: '+F',
    longName: 'Plus Full Turn',
    turns: 1,
    gradient: {from: 'gray', to: 'gray', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: 'RQ',
    longName: 'Appointment Request',
    turns: .5,
    gradient: {from: 'brown', to: 'brown', deg: 45}
  }
]
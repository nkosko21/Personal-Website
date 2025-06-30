import Appointment from "../Types/Appointment";

export const appointmentTypes: Appointment[] = [
  {
    id: crypto.randomUUID(),
    shortName: "AF",
    longName: "Acrylic Fill",
    points: .5,
    gradient: {from: 'red', to: 'red', deg: 90}
  },
  {
    id: crypto.randomUUID(),
    shortName: "PF",
    longName: "Pink Fill",
    points: 1,
    gradient: {from: 'pink', to: 'pink', deg: 90}
  },
  {
    id: crypto.randomUUID(),
    shortName: "PW",
    longName: "Pink & White Fill",
    points: 1,
    gradient: {from: 'pink', to: 'white', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "F",
    longName: "Gel Fill",
    points: 1,
    gradient: {from: 'green', to: 'green', deg: 90}
  },
  {
    id: crypto.randomUUID(),
    shortName: "F/S",
    longName: "Full Set",
    points: 1,
    gradient: {from: 'blue', to: 'pink', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "X",
    longName: "Gel X",
    points: 1,
    gradient: {from: 'green', to: 'pink', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "M",
    longName: "Manicure",
    points: .5,
    gradient: {from: 'yellow', to: 'yellow', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "P",
    longName: "Pedicure",
    points: 1,
    gradient: {from: 'brown', to: 'brown', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "M*",
    longName: "Gel Manicure",
    points: 1,
    gradient: {from: 'green', to: 'yellow', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "P*",
    longName: "Gel Pedicure",
    points: 1.5,
    gradient: {from: 'green', to: 'brown', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "GB",
    longName: "Gel Builder",
    points: 1,
    gradient: {from: 'green', to: 'orange', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "AF",
    longName: "Acrylic Fill",
    points: .5,
    gradient: {from: 'purple', to: 'purple', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "KM",
    longName: "Kid's Gel Manicure",
    points: .5,
    gradient: {from: 'blue', to: 'yellow', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "KP",
    longName: "Kid's Gel Pedicure",
    points: 1,
    gradient: {from: 'blue', to: 'green', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "K",
    longName: "Kid's Pedicure",
    points: .5,
    gradient: {from: 'blue', to: 'brown', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "KC",
    longName: "Kid's Combo",
    points: 1,
    gradient: {from: 'blue', to: 'black', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "GH",
    longName: "Gel Polish Feet",
    points: 1,
    gradient: {from: 'green', to: 'brown', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "KF",
    longName: "Kid's Gel/P Feet",
    points: .5,
    gradient: {from: 'blue', to: 'green', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "KH",
    longName: "Kid's Gel/P Hand",
    points: 0,
    gradient: {from: 'blue', to: 'white', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "KGP",
    longName: "Kid's Gel/P Hand & Feet",
    points: 1,
    gradient: {from: 'blue', to: 'gray', deg: 45}
  },
  {
    id: crypto.randomUUID(),
    shortName: "P/C",
    longName: "Polish Change",
    points: 0, // Find Out
  },
  {
    id: crypto.randomUUID(),
    shortName: "R",
    longName: "Repair/Removal",
    points: 0, // Find Out
  },
  {
    id: crypto.randomUUID(),
    shortName: "W",
    longName: "Wax",
    points: 0, // Find Out
  },
]
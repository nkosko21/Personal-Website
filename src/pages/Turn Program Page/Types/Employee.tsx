import Appointment from "./Appointment";
export interface Permission {
  appointment: Appointment;
  level: 0 | 1 | 2;
}

export interface Employee {
  id: string;
  name: string;
  clockedIn: boolean;
  permissions: Permission[];
  turnValue: number;
  appointments: Appointment[];
  lastClockIn?: Date;
  password: string;
}
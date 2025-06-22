import Appointment from "./Appointment";

export default interface Employee {
  id: string;
  name: string;
  clockedIn: boolean;
  permissions: Appointment[];
  turnValue: number;
  appointments: Appointment[];
}
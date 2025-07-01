import Gradient from "./Gradient";

export default interface Appointment {
  id: string;
  shortName: string;
  longName: string;
  turns: number;
  timeAssigned?: string;
  gradient?: Gradient
  request?: boolean
}
export default interface Appointment {
  id: string;
  shortName: string;
  longName: string;
  points: number;
  timeAssigned?: string;
}
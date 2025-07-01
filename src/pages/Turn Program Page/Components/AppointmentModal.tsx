import { Button } from "@mantine/core";
import {Employee} from "../Types/Employee";
import { appointmentTypes } from "../Data/appointmentTypes";

export default function AppointmentModal(props: 
{
  sortedQueue: Employee[],
  employeeCounter: number,
  setEmployeeCounter: any,
  currentAppointment: string,
  handleAppointment: any,
}) {
  if (!props.sortedQueue[props.employeeCounter] || !props.currentAppointment) return <></>
  const hasPermission = (permissionId: string) => props.sortedQueue[props.employeeCounter].permissions?.some(
      (permission) => permission.appointment.id === permissionId);

  const repairId = appointmentTypes.find(a => a.shortName === 'R')?.id;
  const acryllicId = appointmentTypes.find(a => a.shortName === 'AF')?.id ?? '';
  const pedicureId = appointmentTypes.find(a => a.shortName === 'P')?.id ?? '';
  const polishChangeId = appointmentTypes.find(a => a.shortName === 'P/C')?.id;

  if (repairId === props.currentAppointment) {
    if (props.employeeCounter === 0) props.setEmployeeCounter(3);
    if (!hasPermission(acryllicId)) props.setEmployeeCounter(props.employeeCounter + 1)
  } else if (polishChangeId === props.currentAppointment) {
    if (props.employeeCounter === 0) props.setEmployeeCounter(3);
    if (!hasPermission(pedicureId)) props.setEmployeeCounter(props.employeeCounter + 1)
  } else if (!hasPermission(props.currentAppointment)) {
    props.setEmployeeCounter(props.employeeCounter + 1);
  }

  const handleSkip = () => props.setEmployeeCounter((prev: number) => (prev + 1) % props.sortedQueue.length);

  return (
    <div>
      <p 
        style={{ 
          fontSize: '1.2rem',
          margin: 0,
          marginTop: '10px',
          color: '#F1F1F1'
        }}
      >
        It is{' '}
        <span 
          style={{ fontWeight:'bold' }}
        >
          {props.sortedQueue.length > 0 ? props.sortedQueue[props.employeeCounter].name: ''}'s
        </span> 
        {' '}turn
      </p>
      <br/>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: '10px',
        }}
      >
        <Button 
          onClick={handleSkip}
          color='#EF4444'
          radius='md'
          style={{width: '30%', height: '8vh', fontSize: '1.3rem'}}
        >
          Skip
        </Button>
        <Button 
          onClick={() => props.handleAppointment(props.sortedQueue[props.employeeCounter])}
          color='#10B981'  
          radius='md'
          style={{width: '30%', height: '8vh', fontSize: '1.3rem'}}
        >
          Take
        </Button>
      </div>
    </div>
  );
}
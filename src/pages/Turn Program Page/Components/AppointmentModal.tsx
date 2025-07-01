import { Button } from "@mantine/core";
import {Employee} from "../Types/Employee";

export default function AppointmentModal(props: 
  {
    sortedQueue: Employee[],
    employeeCounter: number,
    setEmployeeCounter: any,
    currentAppointment: string,
    handleAppointment: any,
    skipAppointment: any,
  }) {
  if (!props.sortedQueue[props.employeeCounter] || !props.currentAppointment) return <></>
  const hasPermission = props.sortedQueue[props.employeeCounter].permissions?.some(
    (permission) => permission.appointment.id === props.currentAppointment
  );
  console.log(props.sortedQueue)
  console.log(hasPermission)

  if (!hasPermission) {
    props.setEmployeeCounter(props.employeeCounter + 1);
  }

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
          onClick={props.skipAppointment}
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
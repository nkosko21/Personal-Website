import { Modal } from "@mantine/core";
import { appointmentTypes } from "../Data/appointmentTypes";
import MinusModal from "./MinusModal";
import AppointmentModal from "./AppointmentModal";
import {Employee} from "../Types/Employee";
import RequestModal from "./RequestModal";
import Appointment from "../Types/Appointment";
import { IconXboxX } from "@tabler/icons-react";

export default function TurnModal(props: {
  appointmentOpened: boolean,
  currentAppointment: string,
  employeeCounter: number,
  employees: Employee[],
  closeAppointment: any,
  setEmployeeCounter: any,
  handleMinusModal: any,
  setEmployees: any,
}) {
  const getSortedQueue = () => {
    const queue = props.employees
      .filter(e => e.clockedIn)
      .sort((a, b) => {
        const appointmentId = props.currentAppointment;

        const getLevel = (emp: Employee): number => {
          const perm = emp.permissions.find(p => p.appointment.id === appointmentId);
          return perm?.level ?? 0
        };

        const levelA = getLevel(a);
        const levelB = getLevel(b);
        if (levelA !== levelB) return levelB - levelA;

        if (a.turnValue !== b.turnValue) return a.turnValue - b.turnValue;

        const timeA = new Date(a.lastClockIn ?? new Date()).getTime();
        const timeB = new Date(b.lastClockIn ?? new Date()).getTime();
        return timeA - timeB;
      })
    return queue;
  }
  const turnModalTitle = (
    <h1>
      {appointmentTypes.find((a) => a.id === props.currentAppointment)?.longName} 
      <p 
        style={{
          margin: 0,
          width: 'fit-content',
          color: '#CCCCCC',
        }}
      >
        {'('}{appointmentTypes.find((a) => a.id === props.currentAppointment)?.turns} turns{')'}
      </p>
    </h1>
  );

  const skipAppointment = () => {
    if (props.employeeCounter + 1 >= getSortedQueue().length) {
      props.closeAppointment();
      props.setEmployeeCounter(0);
    } else {
      props.setEmployeeCounter((prev: number) => prev + 1);
    }
  }

  const handleAppointment = (employee: Employee, appointment?: string) => {
    const appt = appointment 
      ? appointmentTypes.find(a => a.longName === appointment) 
      : appointmentTypes.find((a) => a.id === props.currentAppointment);
    if (!appt) return;
    
    
    props.setEmployees((prev: Employee[]) =>
      prev.map((e) =>
        e.id === employee.id
          ? {
              ...e,
              turnValue: e.turnValue + appt.turns,
              appointments: [
                ...(e.appointments || []), 
                {...appt, timeAssigned: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
              ],
            }
          : e
      )
    );

    props.setEmployeeCounter(0);
    props.closeAppointment();
  };
    
  return(      
    <Modal 
      opened={props.appointmentOpened} 
      onClose={() => {
        props.closeAppointment(); 
        props.setEmployeeCounter(0);
      }} 
      title={turnModalTitle}
      closeButtonProps={{
          icon: <IconXboxX size={30} stroke={1.5} color='#F1F1F1' style={{marginBottom: '35px'}}/>,
        }}
    >
      {appointmentTypes
        .filter(a => a.shortName === '+H' || a.shortName === '+F')
        .map(a => a.id)
        .some(a => a === props.currentAppointment)
          ? <MinusModal 
              employees={props.employees} 
              handleMinusModal={props.handleMinusModal}
              currentAppointment={props.currentAppointment}
              closeModal={props.closeAppointment}
            />
          : appointmentTypes
            .filter(a => a.shortName == 'RQ')
            .map(a => a.id)
            .some(a => a === props.currentAppointment)
            ? <RequestModal 
                employees={props.employees} 
                handleRequestModal={handleAppointment} 
                closeModal={props.closeAppointment}
                />
            : <AppointmentModal 
                sortedQueue={getSortedQueue()} 
                employeeCounter={props.employeeCounter} 
                setEmployeeCounter={props.setEmployeeCounter} 
                currentAppointment={props.currentAppointment} 
                handleAppointment={handleAppointment} 
                skipAppointment={skipAppointment} 
              />
      }
    </Modal>
    )
}
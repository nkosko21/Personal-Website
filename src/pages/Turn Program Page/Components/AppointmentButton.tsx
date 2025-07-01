import { Button } from "@mantine/core"
import Appointment from "../Types/Appointment";
import './AppointmentButton.css'
import { IconTrashFilled } from "@tabler/icons-react";

export default function AppointmentButton(props:
  {
    appointment: Appointment,
    handleSingleAppointment: any,
    multiSelectMode: boolean,
    multiSelectQueue: string[],
    setMultiSelectQueue: any,
  } ) {
    const handleClick = () => {
      if (!props.multiSelectMode) {
        props.handleSingleAppointment(props.appointment.id)
      } else {
        props.setMultiSelectQueue((prev: string[]) => [...prev, props.appointment.id])
      }
    }
    
    const handleDelete = () => {
      props.setMultiSelectQueue((prev: string[]) => prev.filter(a => a !== props.appointment.id));
    }

    const apptCount = props.multiSelectMode
      ? props.multiSelectQueue.filter(a => a === props.appointment.id).length
      : 0;

    return (
      <Button 
        variant="gradient"
        gradient={props.appointment.gradient}
        onClick={() => handleClick()} 
        className="appointment-button"
        key={props.appointment.id}
        style={{
          border: 
            props.multiSelectMode && props.multiSelectQueue.some(a => a ===props.appointment.id) 
              ? '2px solid ivory' 
              : '',
        }}
        radius='xs'
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p 
            style={{
              fontSize: '1.5rem', 
              fontWeight: 'bolder', 
              marginBottom: '-10px'
            }}
          >
            {props.appointment.shortName}
          </p>
          <p 
            style={{
              fontSize: '.5rem',
              marginBottom: '-5px'
            }}
          >
            {props.appointment.longName}
          </p>
          <p 
            style={{
              fontSize: '.5rem', 
            }}
          >
            {props.appointment.turns}{` turn${props.appointment.turns === 1 ? '' : 's'}`}
          </p>
        </div>
        {props.multiSelectMode && 
          <IconTrashFilled 
            color="#EF4444" 
            onClick={(e) => {
              e.stopPropagation();
              handleDelete()
            }}
            style={{
              position: 'absolute', 
              top: '0%', 
              left: '0%'
            }} 
          />}
        {props.multiSelectMode && 
          <p style={{position: 'absolute', top: '0%', right: '5%'}}>{apptCount}</p>}
      </Button>
    );
}

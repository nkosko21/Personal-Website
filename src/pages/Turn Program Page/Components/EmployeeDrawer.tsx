import { Button, Collapse, Drawer } from "@mantine/core";
import { Employee } from "../Types/Employee";
import AppointmentHistory from "./AppointmentHistory";
import PermissionCheck from "./PermissionCheck";
import { appointmentTypes } from "../Data/appointmentTypes";

export default function  employeeDrawer(props: 
  {
    currentEmployee?: Employee,
    employees: Employee[],
    employeeOpened: boolean,
    permissionOpened: boolean,
    setCurrentEmployee: any,
    setEmployees: any,
    closeEmployee: any,
    closePermission: any,
    openPermission: any,
  }){
    const shortTime = props.currentEmployee?.lastClockIn?.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    
    const employeeTitle = (
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: 'max-content'
        }}
      >
        <h1 style={{fontSize: '3rem'}}>
          {props.currentEmployee?.name}
        </h1>
        {props.currentEmployee?.lastClockIn && (
          <p
            style={{ fontSize: '1rem', color: 'rgb(204, 204, 204)', margin: 0 }}
          >
            {`Clocked in at ${shortTime}`}
          </p>
        )}
      </span>
    );

    const clockIn = (id: string) => {
      if (props.currentEmployee) props.setCurrentEmployee({...props.currentEmployee, clockedIn: true})

      props.setEmployees((prev: Employee[]) =>
        prev.map((e) =>
          e.id === id ? { ...e, clockedIn: true, turnValue: 0, lastClockIn: new Date() } : e
        )
      );
    };

    const clockOut = (id: string) => {
      if (props.currentEmployee) props.setCurrentEmployee({...props.currentEmployee, clockedIn: false})

      props.setEmployees((prev: Employee[]) =>
        prev.map((e) =>
          e.id === id ? { ...e, clockedIn: false, turnValue: 0 } : e
        )
      );
    };


    return(
      <Drawer 
        opened={props.employeeOpened} 
        onClose={() => {
          props.closeEmployee(); 
          props.closePermission();
        }} 
        title={employeeTitle}
        size='lg'
      >
        <Button 
          onClick={props.permissionOpened ? props.closePermission : props.openPermission}
          color='#4A6FA5'
          radius='md'
          style={{width: '40%', height: '8vh', fontSize: '1.3rem'}}
        >
          View Permissions
        </Button>
        <Button 
          onClick={() => props.currentEmployee?.clockedIn ? clockOut(props.currentEmployee.id): clockIn(props.currentEmployee?.id ?? '')}
          color={props.currentEmployee?.clockedIn ? "#C94C4C" : "#81B29A"}
          radius='md'
          style={{
            margin: 0, 
            marginLeft: '1vw', 
            width: '40%', 
            height: '8vh', 
            fontSize: '1.3rem'
          }}
        >
          {props.currentEmployee?.clockedIn ? "Clock Out": "Clock In"}
        </Button>
        <Collapse 
          in={props.permissionOpened}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {appointmentTypes.map((appt) => 
              <PermissionCheck 
                appointment={appt} 
                currentEmployee={props.currentEmployee!} 
                employees={props.employees} 
                setEmployees={props.setEmployees} 
              />
            )}
          </div>
        </Collapse> 
        <br/>
        <AppointmentHistory appointments={props.currentEmployee?.appointments ?? []}/>
      </Drawer>
    )
  }
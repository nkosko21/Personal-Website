import { Button, Collapse, Drawer, TextInput } from "@mantine/core";
import { Employee } from "../Types/Employee";
import AppointmentHistory from "./AppointmentHistory";
import PermissionCheck from "./PermissionCheck";
import { appointmentTypes } from "../Data/appointmentTypes";
import { IconCheck, IconEdit } from "@tabler/icons-react";
import { useState } from "react";
import './EmployeeDrawer.css'

export default function EmployeeDrawer(props: 
  {
    currentEmployee?: Employee,
    employees: Employee[],
    setEmployees: any,
    employeeOpened: boolean,
    permissionOpened: boolean,
    setCurrentEmployee: any,
    closeEmployee: any,
    closePermission: any,
    openPermission: any,
  }){
    const [editValue, setEditValue] = useState(props.currentEmployee?.name);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const shortTime = props.currentEmployee?.lastClockIn?.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    
    const handleSaveEdit = () => {
      props.setEmployees((prev: Employee[]) => 
        prev.map(e => e.id === props.currentEmployee?.id
          ? {
            ...e,
            name: editValue,
          }
          : e
        ));
      props.setCurrentEmployee({...props.currentEmployee, name: editValue})
      setIsEdit(false);
    }

    const clockButton = (
      <Button 
        onClick={() => 
          props.currentEmployee?.clockedIn 
          ? clockOut(props.currentEmployee.id)
          : clockIn(props.currentEmployee?.id ?? '')
        }
        color={props.currentEmployee?.clockedIn ? "#C94C4C" : "#81B29A"}
        radius='xl'
        className="clock-button"
      >
        {props.currentEmployee?.clockedIn ? "Clock Out": "Clock In"}
      </Button>
      );
    
    const employeeTitle = (
      <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          position: 'relative',
          width: '48vw'
        }}
      >
        <h1 className="employee-header">
          {isEdit 
          ? (
          <>
            <TextInput
              value={editValue}
              style={{marginLeft: '-3px'}}
              size='lg'
              radius='md'
              variant='filled'
              onChange={(event) => setEditValue(event.currentTarget.value)}
            />
            <IconCheck 
              onClick={handleSaveEdit} 
              className="icons"
              color="#81B29A"
            />
          </>
          ) : (
            <>
              {props.currentEmployee?.name}
              <IconEdit 
                className="icons"
                style={{marginTop: '10px'}}
                onClick={() => setIsEdit(true)}
                color="#4A6FA5"
              />
            </>
          )}
        </h1>
        {props.currentEmployee?.lastClockIn && (
          <p
            style={{ fontSize: '1rem', color: 'rgb(204, 204, 204)', margin: 0 }}
          >
            {`Clocked in at ${shortTime}`}
          </p>
        )}
        {clockButton}
      </span>
    );

    const clockIn = (id: string) => {
      if (prompt('Enter Password') !== props.currentEmployee?.password) return
      if (props.currentEmployee) props.setCurrentEmployee({...props.currentEmployee, clockedIn: true})

      props.setEmployees((prev: Employee[]) =>
        prev.map((e) =>
          e.id === id ? { ...e, clockedIn: true, turnValue: 0, lastClockIn: new Date() } : e
        )
      );
    };

    const clockOut = (id: string) => {
      if (prompt('Enter Password') !== props.currentEmployee?.password) return
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
          setIsEdit(false);
          setEditValue(props.currentEmployee?.name);
        }} 
        title={employeeTitle}
        size='lg'
        withCloseButton={false}
      >
        <Button 
          onClick={props.permissionOpened ? props.closePermission : props.openPermission}
          color='#4A6FA5'
          radius='md'
          style={{width: '40%', height: '8vh', fontSize: '1.3rem'}}
        >
          View Permissions
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
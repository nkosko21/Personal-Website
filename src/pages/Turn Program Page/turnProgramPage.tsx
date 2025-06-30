import { Button, Checkbox, Collapse, Drawer, em, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import HourGrid from "./HourGrid";
import Employee from "./Types/Employee";
import Appointment from "./Types/Appointment";
import { appointmentTypes } from "./Data/appointmentTypes";
import AppointmentHistory from "./Components/AppointmentHistory";
import './TurnProgramPage.css';

export default function TurnTracker() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [appointmentOpened, { open: openAppointment, close: closeAppointment }] = useDisclosure(false);
  const [employeeOpened, { open: openEmployee, close: closeEmployee }] = useDisclosure(false);
  const [permissionOpened, { open: openPermission, close: closePermission }] = useDisclosure(false);
  const [employeeCounter, setEmployeeCounter] = useState(0);
  const [currentAppointment, setCurrentAppointment] = useState<string>("");
  const [currentEmployee, setCurrentEmployee] = useState<Employee>();
  const sortedQueue: Employee[] = [...employees].sort((a, b) => a.turnValue - b.turnValue);

  const addEmployee = (name: string) => {
    const newEmployee: Employee = {
      id: crypto.randomUUID(),
      name,
      clockedIn: false,
      permissions: [],
      turnValue: 0,
      appointments: [],
    };
    setEmployees([...employees, newEmployee]);
  };

  const clockIn = (id: string) => {
    if (currentEmployee) setCurrentEmployee({...currentEmployee, clockedIn: true})

    setEmployees((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, clockedIn: true, turnValue: 0 } : e
      )
    );
  };

  const clockOut = (id: string) => {
    if (currentEmployee) setCurrentEmployee({...currentEmployee, clockedIn: false})

    setEmployees((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, clockedIn: false, turnValue: 0 } : e
      )
    );
  };

  const handleAppointment = (employee: Employee) => {
    if (sortedQueue.length === 0) return;
    const appointment = appointmentTypes.find((a) => a.id === currentAppointment);
    if (!appointment) return;
    
    
    setEmployees((prev) =>
      prev.map((e) =>
        e.id === employee.id
          ? {
              ...e,
              turnValue: e.turnValue + appointment.points,
              appointments: [
                ...(e.appointments || []), 
                {...appointment, timeAssigned: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
              ],
            }
          : e
      )
    );

    setEmployeeCounter(0);
    closeAppointment();
  };

  const handleChoice = (appointmentId: string) => {
    setCurrentAppointment(appointmentId);
    openAppointment();
  }
  
  const skipAppointment = () => {
    if (employeeCounter + 1 >= sortedQueue.length) {
      closeAppointment();
      setEmployeeCounter(0);
    } else {
      setEmployeeCounter(prev => prev + 1);
    }
  }

  const turnModal = () => {
    console.log(sortedQueue)
    console.log(employeeCounter)
    if (!sortedQueue[employeeCounter] || !currentAppointment) return
    const hasPermission = sortedQueue[employeeCounter].permissions?.some(
      (permission) => permission.id === currentAppointment
    );

    if (!hasPermission) {
      setEmployeeCounter(employeeCounter + 1);
    }

    return (
      <div>
        <p 
          style={{ 
            fontSize: '1.2rem',
            margin: 0 
          }}
        >
          It is{' '}
          <span 
            style={{ fontWeight:'bold' }}
          >
            {sortedQueue.length > 0 ? sortedQueue[employeeCounter].name: ''}'s
          </span> 
          {' '}turn
        </p>
        <Button 
          onClick={skipAppointment}
        >
          Skip
        </Button>
        <Button onClick={() => handleAppointment(sortedQueue[employeeCounter])}>
          Take
        </Button>
      </div>
    );
  }

  const handleDeleteAppointment = (appointment: Appointment, employeeId: string) => {
    const points = appointmentTypes.find((a) => a.id === appointment.id)?.points || 0;
    setEmployees((prev) =>
      prev.map((e) =>
        e.id === employeeId
          ? {
              ...e,
              turnValue: e.turnValue - points,
              appointments: e.appointments.filter((a) => a !== appointment),
            }
          : e
      )
    );
  }

  const handleSwapAppointment = (appointment: Appointment) => {
    setCurrentAppointment(appointment.id);
    openAppointment();
  }

  const turnModalTitle = (
    <h1>
      {appointmentTypes.find((a) => a.id === currentAppointment)?.longName} 
      <p 
        style={{
          margin: 0,
          width: 'fit-content'
        }}
      >
        {'('}{appointmentTypes.find((a) => a.id === currentAppointment)?.points}pts{')'}
      </p>
    </h1>
  );
  
  const permissionCheck = (appointment: Appointment) => {

    return (
      <Checkbox 
        style={{
          width:'fit-content',
          margin: 10,
        }}
        checked={employees.find((emp) => emp.id === currentEmployee?.id)?.permissions!.includes(appointment)}
        key={appointment.id}
        label={appointment.longName}
        onChange={(event) => event.currentTarget.checked 
          ? setEmployees((prev) =>
              prev.map((e) =>
                e.id === currentEmployee?.id
                  ? {
                      ...e,
                      permissions: [...e.permissions, appointment],
                    }
                  : e
              )
            )
          : setEmployees((prev) =>
              prev.map((e) =>
                e.id === currentEmployee?.id
                  ? {
                      ...e,
                      permissions: e.permissions.filter((appt) => appt.id !== appointment.id),
                    }
                  : e
              )
            )
        }
      />
    );
  }  

  const employeeDrawer = () => {
    const employeeTitle = (
      <span
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: 'max-content'
        }}
      >
        <h1 style={{fontSize: '2rem'}}>
          {currentEmployee?.name}
        </h1>
        <Button 
          onClick={() => currentEmployee?.clockedIn ? clockOut(currentEmployee.id): clockIn(currentEmployee?.id ?? '')}
          style={{margin: 0, marginLeft: '1vw'}}
          color={currentEmployee?.clockedIn ? "#C94C4C" : "#81B29A"}
        >
          {currentEmployee?.clockedIn ? "Clock Out": "Clock In"}
        </Button>
      </span>
    );
    return(
        <Drawer opened={employeeOpened} onClose={() => {closeEmployee(); closePermission()}} title={employeeTitle}>
          <Button onClick={permissionOpened ? closePermission : openPermission}>View Permissions</Button>
          <Collapse in={permissionOpened}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              {appointmentTypes.map((appt) => permissionCheck(appt))}
            </div>
          </Collapse> 
          <AppointmentHistory appointments={currentEmployee?.appointments ?? []}/>
        </Drawer>
    )
  }

  return (
    <div className='turn-program-container'>
      <Modal 
        opened={appointmentOpened} 
        onClose={() => {
          closeAppointment(); 
          setEmployeeCounter(0);
        }} 
        title={turnModalTitle}
      >
        {turnModal()}
      </Modal>
      {employeeDrawer()}
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div className="main-tables">
          <HourGrid 
            employeeList={employees} 
            handleDeleteAppointment={handleDeleteAppointment} 
            handleSwapAppointment={handleSwapAppointment}
          />
        </div>
        <div className="buttons-container">
          <div className='appointment-types-container'>
            {appointmentTypes.map((a) => (
              <Button 
                variant="gradient"
                gradient={a.gradient}
                onClick={() => handleChoice(a.id)} 
                className="appointment-button"
                key={a.id}
              >
                <p style={{fontSize: '1.5rem', color: 'white'}}>{a.shortName}</p>
                {/* <p style={{fontSize: '.5rem',}}>{a.longName}</p> */}
              </Button>
            ))}
          </div>
          <Button 
            color ='#BFA2DB' 
            onClick={() => addEmployee(prompt("Employee name:") || "")}
          >
            <p style={{color: '#F1F1F1'}}>
              Add Employee
            </p>
          </Button>
          <div className="employees-container">
            {employees.map((e) => (
              <Button 
                onClick={() => {
                  setCurrentEmployee(e);
                  openEmployee();
                }}
                className="employee-button"
                key={e.id}
              >
                {e.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

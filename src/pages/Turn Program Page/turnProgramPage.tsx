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
  const sortedQueue: Employee[] = [...employees].filter(emp => emp.clockedIn).sort((a, b) => a.turnValue - b.turnValue);

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
              turnValue: e.turnValue + appointment.turns,
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
            margin: 0,
            marginTop: '10px',
            color: '#F1F1F1'
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
            onClick={skipAppointment}
            color='#EF4444'
            radius='md'
            style={{width: '30%', height: '8vh', fontSize: '1.3rem'}}
          >
            Skip
          </Button>
          <Button 
            onClick={() => handleAppointment(sortedQueue[employeeCounter])}
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

  const handleDeleteAppointment = (appointment: Appointment, employeeId: string) => {
    const turns = appointmentTypes.find((a) => a.id === appointment.id)?.turns || 0;
    setEmployees((prev) =>
      prev.map((e) =>
        e.id === employeeId
          ? {
              ...e,
              turnValue: e.turnValue - turns,
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
          width: 'fit-content',
          color: '#CCCCCC',
        }}
      >
        {'('}{appointmentTypes.find((a) => a.id === currentAppointment)?.turns} turns{')'}
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
        size='lg'
        color='#4A6FA5'
        // variant='outline'
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
        <h1 style={{fontSize: '3rem'}}>
          {currentEmployee?.name}
        </h1>
      </span>
    );


    return(
        <Drawer 
          opened={employeeOpened} 
          onClose={() => {
            closeEmployee(); 
            closePermission();
          }} 
          title={employeeTitle}
          size='lg'
        >
          <Button 
            onClick={permissionOpened ? closePermission : openPermission}
            color='#4A6FA5'
            radius='md'
            style={{width: '40%', height: '8vh', fontSize: '1.3rem'}}
          >
            View Permissions
          </Button>
          <Button 
            onClick={() => currentEmployee?.clockedIn ? clockOut(currentEmployee.id): clockIn(currentEmployee?.id ?? '')}
            color={currentEmployee?.clockedIn ? "#C94C4C" : "#81B29A"}
            radius='md'
            style={{
              margin: 0, 
              marginLeft: '1vw', 
              width: '40%', 
              height: '8vh', 
              fontSize: '1.3rem'
            }}
          >
            {currentEmployee?.clockedIn ? "Clock Out": "Clock In"}
          </Button>
          <Collapse 
            in={permissionOpened}
          >
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
          <br/>
          <AppointmentHistory appointments={currentEmployee?.appointments ?? []}/>
        </Drawer>
    )
  }

  const handleEmployeeClick = (employee: Employee) => {
    setCurrentEmployee(employee);
    openEmployee();
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
            handleEmployeeClick={handleEmployeeClick}
          />
        </div>
        <div className="buttons-container">
          <div className='appointment-types-container'>
            {appointmentTypes.map((a) => (
              <Button 
                variant="gradient"
                gradient={a.gradient}
                // color='#C9A26D'
                onClick={() => handleChoice(a.id)} 
                className="appointment-button"
                key={a.id}
                radius='xs'
              >
                <p style={{fontSize: '1.5rem'}}>{a.shortName}</p>
                {/* <p style={{fontSize: '.5rem',}}>{a.longName}</p> */}
              </Button>
            ))}
          </div>
          <div className='settings-container'>
            <Button 
              onClick={() => addEmployee(prompt("Employee name:") || "")}
              radius='md'
              className="settings-button"
              color="#4A6FA5"
            >
              <p>
                Add Employee
              </p>
            </Button>
          </div>
          <div className="employees-container">
            {employees.map((e) => (
              <Button 
                onClick={() => handleEmployeeClick(e)}
                className="employee-button"
                key={e.id}
                color={e.clockedIn ? '	#4ADE80' : '#A08A6D'}
              >
                <p style={{fontSize: '1.3rem'}}>{e.name}</p>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

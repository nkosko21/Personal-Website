import { Button, Card, Checkbox, Collapse, Drawer, em, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import HourGrid from "./HourGrid";
import Employee from "./Types/Employee";
import Appointment from "./Types/Appointment";
import { appointmentTypes } from "./Data/appointmentTypes";
import AppointmentHistory from "./Components/AppointmentHistory";

export default function TurnTracker() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [queue, setQueue] = useState<Employee[]>([]);
  const [appointmentOpened, { open: openAppointment, close: closeAppointment }] = useDisclosure(false);
  const [employeeOpened, { open: openEmployee, close: closeEmployee }] = useDisclosure(false);
  const [permissionOpened, { open: openPermission, close: closePermission }] = useDisclosure(false);
  const [employeeCounter, setEmployeeCounter] = useState(0);
  const [currentAppointment, setCurrentAppointment] = useState<string>("");
  const [currentEmployee, setCurrentEmployee] = useState<Employee>();

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
    const employee = employees.find((e) => e.id === id);
    if (employee && !queue.some((q) => q.id === id)) {
      setQueue([...queue, { ...employee, clockedIn: true, turnValue: 0 }]);
    }
  };

  const clockOut = (id: string) => {
    if (currentEmployee) setCurrentEmployee({...currentEmployee, clockedIn: false})

    setEmployees((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, clockedIn: false, turnValue: 0 } : e
      )
    );
    setQueue(queue.filter((e) => e.id !== id));
  };

  const sortedQueue = [...queue].sort((a, b) => a.turnValue - b.turnValue);

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
    setQueue((prev) =>
      prev.map((e) =>
        e.id === employee.id
          ? { ...e, turnValue:  e.turnValue + appointment.points}
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

  const turnModal = () => {
    if (!sortedQueue[employeeCounter]) return
    const hasPermission = sortedQueue[employeeCounter].permissions?.some(
      (permission) => permission.id === currentAppointment
    ) ?? false;

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
          onClick={
            () => employeeCounter + 1 > sortedQueue.length 
              ? setEmployeeCounter(prev => Math.min(prev + 1, sortedQueue.length - 1)) 
              : closeAppointment()
          }
        >
            Skip
          </Button>
          <Button onClick={() => handleAppointment(sortedQueue[employeeCounter])}>
            Take
          </Button>
      </div>
    );
  }

  const handleDeleteAppointment = (appointmentId: string, employeeId: string) => {
    const points = appointmentTypes.find((a) => a.id === currentAppointment)?.points || 0;
    setEmployees((prev) =>
      prev.map((e) =>
        e.id === employeeId
          ? {
              ...e,
              turnValue: e.turnValue - points,
              appointments: e.appointments.filter((a) => a.id !== appointmentId),
            }
          : e
      )
    );
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
    return(
        <Drawer opened={employeeOpened} onClose={() => {closeEmployee(); closePermission()}} title={currentEmployee?.name}>
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
          <Button 
            onClick={() => currentEmployee?.clockedIn ? clockOut(currentEmployee.id): clockIn(currentEmployee?.id ?? '')}
          >
            {currentEmployee?.clockedIn ? "Clock Out": "Clock In"}
          </Button>
        </Drawer>
    )
  }

  return (
    <div style={{
      backgroundColor: 'mistyrose',
      height: '100vh'
    }}>
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
      <div>
        <h2 className="text-xl font-bold">Employees</h2>
        {employees.map((e) => (
          <Button 
            onClick={() => {
              setCurrentEmployee(e);
              openEmployee();
            }} 
            style={{ 
              height: '12vh', 
              width: '18vh',
              margin: '1vh',
            }}
          >
            {e.name}
          </Button>
        ))}
        <Button onClick={() => addEmployee(prompt("Employee name:") || "")}>Add Employee</Button>
      </div>

      <div 
        style={{ 
          display: "flex", 
          flexDirection: 'row', 
          flexWrap: 'wrap'
        }}
      >
        <h2 className="text-xl font-bold">Appointments</h2>
        {appointmentTypes.map((a) => (
          <Button 
            onClick={() => handleChoice(a.id)} 
            style={{ 
              height: '12vh', 
              width: '12vh',
              margin: '1vh',
            }}
          >
            {a.shortName}
          </Button>
        ))}
      </div>
      {HourGrid(employees, handleDeleteAppointment)}
    </div>
  );
}

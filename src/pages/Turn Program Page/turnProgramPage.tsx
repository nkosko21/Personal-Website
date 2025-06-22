import { Button, Card, Drawer, em, Modal } from "@mantine/core";
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
  const [EmployeeOpened, { open: openEmployee, close: closeEmployee }] = useDisclosure(false);
  const [employeeCounter, setEmployeeCounter] = useState(0);
  const [currentAppointment, setCurrentAppointment] = useState<string>("");
  const [currentEmployee, setCurrentEmployee] = useState<Employee>();
  const hours = Array.from({ length: 11 }, (_, i) => 9 + i); // 9am to 7pm

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
        <Button onClick={() => employeeCounter + 1 > sortedQueue.length ? setEmployeeCounter(prev => Math.min(prev + 1, sortedQueue.length - 1)) : closeAppointment()}>
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

  const employeeDrawer = () => {
    // const stack = useDrawersStack(['employee-profile']);
  
    return(
      // <Drawer.Stack>
        <Drawer opened={EmployeeOpened} onClose={closeEmployee} title={<h1>{currentEmployee?.name}</h1>}>
        <AppointmentHistory appointments={currentEmployee?.appointments ?? []}/>
        <Button 
          onClick={() => currentEmployee?.clockedIn ? clockOut(currentEmployee.id): clockIn(currentEmployee?.id ?? '')}
        >
          {currentEmployee?.clockedIn ? "Clock Out": "Clock In"}
        </Button>
        </Drawer>
  
      // </Drawer.Stack>
      
    )
  }

  return (
    <div style={{
      backgroundColor: 'mistyrose',
      height: '100vh'
    }}>
      <Modal 
        opened={appointmentOpened} 
        onClose={closeAppointment} 
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

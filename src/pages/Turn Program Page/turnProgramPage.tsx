import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import HourGrid from "./HourGrid";
import { Employee } from "./Types/Employee";
import Appointment from "./Types/Appointment";
import { appointmentTypes } from "./Data/appointmentTypes";
import TurnModal from "./Components/TurnModal";
import EmployeeDrawer from "./Components/EmployeeDrawer";
import './TurnProgramPage.css'

export default function TurnTracker() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [appointmentOpened, { open: openAppointment, close: closeAppointment }] = useDisclosure(false);
  const [employeeOpened, { open: openEmployee, close: closeEmployee }] = useDisclosure(false);
  const [permissionOpened, { open: openPermission, close: closePermission }] = useDisclosure(false);
  const [employeeCounter, setEmployeeCounter] = useState(0);
  const [currentAppointment, setCurrentAppointment] = useState<string>("");
  const [currentEmployee, setCurrentEmployee] = useState<Employee>();
  const sortedQueue: Employee[] = 
    employees.filter(emp => emp.clockedIn)
    .map(emp => ({
      ...emp,
      turnValue: Math.floor(emp.turnValue),
    }))
    .sort((a, b) => {
      if (a.turnValue !== b.turnValue) {
        return a.turnValue - b.turnValue;
      }

      const aTime = new Date(a.lastClockIn ?? '').getTime();
      const bTime = new Date(b.lastClockIn ?? '').getTime();
      return aTime - bTime;
    });

  const addEmployee = (name: string, password: string) => {
    const newEmployee: Employee = {
      id: crypto.randomUUID(),
      name,
      clockedIn: false,
      permissions: [],
      turnValue: 0,
      appointments: [],
      password
    };
    setEmployees([...employees, newEmployee]);
  };


  const handleChoice = (appointmentId: string) => {
    setCurrentAppointment(appointmentId);
    openAppointment();
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

  const handleEmployeeClick = (employee: Employee) => {
    setCurrentEmployee(employee);
    openEmployee();
  }
  
  const handleMinusModal = (emp: string, amount: number) => {
    setEmployees(prev => 
      prev.map(prevEmp => 
        prevEmp.name === emp 
        ? {...prevEmp, turnValue: prevEmp.turnValue + amount}
        : prevEmp));
  }

  return (
    <div className='turn-program-container'>
      <TurnModal 
        appointmentOpened={appointmentOpened} 
        currentAppointment={currentAppointment} 
        employeeCounter={employeeCounter} 
        employees={employees} 
        closeAppointment={closeAppointment} 
        setEmployeeCounter={setEmployeeCounter} 
        handleMinusModal={handleMinusModal} 
        setEmployees={setEmployees} 
      />
      <EmployeeDrawer
        currentEmployee={currentEmployee}
        setCurrentEmployee={setCurrentEmployee}
        employees={employees} 
        employeeOpened={employeeOpened}
        permissionOpened={permissionOpened} 
        closeEmployee={closeEmployee} 
        closePermission={closePermission} 
        openPermission={openPermission} 
        setEmployees={setEmployees}
      />
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
                <span style={{display: 'flex', flexDirection: 'column'}}>
                  <p style={{fontSize: '1.5rem', fontWeight: 'bolder', marginBottom: '-10px'}}>{a.shortName}</p>
                  <p style={{fontSize: '.5rem', marginBottom: '-3px'}}>{a.longName}</p>
                  <p style={{fontSize: '.5rem',}}>{a.turns}{` turn${a.turns === 1 ? '' : 's'}`}</p>
                </span>
              </Button>
            ))}
          </div>
          <div className='settings-container'>
            <Button 
              onClick={() => addEmployee(prompt("Employee name:") || "", prompt("Password") || '')}
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

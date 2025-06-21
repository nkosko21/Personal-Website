import { Button, Card, em, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";

interface Employee {
  id: string;
  name: string;
  clockedIn: boolean;
  permissions: string[];
  turnValue: number;
}

interface Appointment {
  id: string;
  name: string;
  points: number;
}

export default function TurnTracker() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [queue, setQueue] = useState<Employee[]>([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [employeeCounter, setEmployeeCounter] = useState(0);

  const [currentAppointment, setCurrentAppointment] = useState<string>("");

  const addEmployee = (name: string) => {
    const newEmployee: Employee = {
      id: crypto.randomUUID(),
      name,
      clockedIn: false,
      permissions: [],
      turnValue: 0,
    };
    setEmployees([...employees, newEmployee]);
  };

  const deleteEmployee = (id: string) => {
    setEmployees(employees.filter((e) => e.id !== id));
    setQueue(queue.filter((e) => e.id !== id));
  };

  const addAppointment = (name: string, points: number) => {
    const newAppointment: Appointment = {
      id: crypto.randomUUID(),
      name,
      points,
    };
    setAppointments([...appointments, newAppointment]);
  };

  const deleteAppointment = (id: string) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  const clockIn = (id: string) => {
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
    const appointment = appointments.find((a) => a.id === currentAppointment);
    if (!appointment) return;
    
    setEmployees((prev) =>
      prev.map((e) =>
        e.id === employee.id
          ? { ...e, turnValue: e.turnValue + appointment.points }
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
    close();
  };

  const handleChoice = (appointmentId: string) => {
    setCurrentAppointment(appointmentId);
    open();
  }

  const turnModal = () => {
    console.log(employeeCounter)

    return (
      <div>
        <h1>{sortedQueue.length > 0 ? sortedQueue[employeeCounter].name: ''}</h1>
        <Button onClick={() => setEmployeeCounter(prev => Math.min(prev + 1, sortedQueue.length - 1))}>
            Skip
          </Button>
          <Button onClick={() => handleAppointment(sortedQueue[employeeCounter])}>
            Take
          </Button>
      </div>);
  }

  return (
    <div className="p-4 space-y-4">
      <Modal opened={opened} onClose={close} title="Take or skip">
        {turnModal()}
      </Modal>
      <Card>
        <h2 className="text-xl font-bold">Employees</h2>
        {employees.map((e) => (
          <div key={e.id} className="flex items-center justify-between">
            <div>
              {e.name} - {e.clockedIn ? "Clocked In" : "Clocked Out"} - Turn: {e.turnValue}
            </div>
            <div className="space-x-2">
              <Button onClick={() => (e.clockedIn ? clockOut(e.id) : clockIn(e.id))}>
                {e.clockedIn ? "Clock Out" : "Clock In"}
              </Button>
              <Button variant="destructive" onClick={() => deleteEmployee(e.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
        <Button onClick={() => addEmployee(prompt("Employee name:") || "")}>Add Employee</Button>
      </Card>

      <Card>
        <h2 className="text-xl font-bold">Appointments</h2>
        {appointments.map((a) => (
          <div key={a.id} className="flex items-center justify-between">
            <div>
              {a.name} - {a.points} points
            </div>
            <div className="space-x-2">
              <Button onClick={() => handleChoice(a.id)}>
                Choose
              </Button>
              <Button variant="destructive" onClick={() => deleteAppointment(a.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
        <Button
          onClick={() => {
            const name = prompt("Appointment name:");
            const points = parseInt(prompt("Points:") || "0");
            if (name) addAppointment(name, points);
          }}
        >
          Add Appointment
        </Button>
      </Card>

      <Card>
        <h2 className="text-xl font-bold">Queue</h2>
        {sortedQueue.map((e) => (
          <div key={e.id}>{e.name} - Turn: {e.turnValue}</div>
        ))}
      </Card>
    </div>
  );
}

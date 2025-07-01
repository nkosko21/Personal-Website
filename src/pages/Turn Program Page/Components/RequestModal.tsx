import { Button, Select } from "@mantine/core";
import {Employee} from "../Types/Employee";
import { useState } from "react";
import { appointmentTypes } from "../Data/appointmentTypes";

export default function RequestModal(props: 
  {
    employees: Employee[],
    handleRequestModal: any,
    closeModal: any,
  }) {
  const [selectedEmployee, setSelectedEmployee] = useState<string>('');
  const [selectedAppointment, setSelectedAppointment] = useState<string>('');

  const handleSubmit = () => {
    if (!selectedEmployee) return
    const employee = props.employees.find(e => e.name === selectedEmployee)

    props.handleRequestModal(employee, selectedAppointment, true);
    props.closeModal();
  }

  return(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <Select
        placeholder="Pick Employee"
        data={props.employees.map((emp) => emp.name)}
        searchable
        style={{width: '80%', marginBottom: '10px', marginTop: '10px'}}
        size='lg'
        value={selectedEmployee}
        onChange={(option) => setSelectedEmployee(option ?? '')}
        radius='md'
      />
      <Select
        placeholder="Pick Appointment Type"
        data={appointmentTypes.map((appt) => appt.longName)}
        searchable
        style={{width: '80%', marginBottom: '10px'}}
        size='lg'
        value={selectedAppointment}
        onChange={(option) => setSelectedAppointment(option ?? '')}
        radius='md'
      />
      <Button
        radius='md'
        color="#4A6FA5"
        size='lg'
        onClick={handleSubmit}
      >
        submit
      </Button>
    </div>
  );
}
import { Button, Select } from "@mantine/core";
import {Employee} from "../Types/Employee";
import { useState } from "react";
import { appointmentTypes } from "../Data/appointmentTypes";

export default function MinusModal(props: 
  {
    employees: Employee[],
    handleMinusModal: any,
    currentAppointment: string,
    closeModal: any,
  }) {
  const [selectedEmployee, setSelectedEmployee] = useState<string>('');
  const value = appointmentTypes
    .filter(a => a.shortName === '+H')
    .map(a => a.id)
    .some(a => a === props.currentAppointment)
     ? .5
     : 1;

  const handleSubmit = () => {
    if (!selectedEmployee) return

    props.handleMinusModal(selectedEmployee, value);
    props.closeModal();
  }

  return(
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <Select
        placeholder="Pick Employee"
        data={props.employees.map((emp) => emp.name)}
        searchable
        style={{width: '70%'}}
        size='lg'
        value={selectedEmployee}
        onChange={(option) => setSelectedEmployee(option ?? '')}
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
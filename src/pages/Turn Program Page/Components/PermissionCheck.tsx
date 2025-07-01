import { Checkbox } from "@mantine/core";
import Appointment from "../Types/Appointment";
import { Permission, Employee } from "../Types/Employee";
import { useState } from "react";
import { IconCheck, IconStar } from "@tabler/icons-react";

export default function PermissionCheck(props: {
  appointment: Appointment,
  currentEmployee: Employee,
  employees: Employee[],
  setEmployees: any,
}) {
  const [checkedState, setCheckedState] = useState<Permission["level"]>
    (props.currentEmployee.permissions.filter(p => p.appointment.id === props.appointment.id)[0]?.level ?? 0);

  const handleChange = () => {
    const newState = ((checkedState + 1) % 3) as 0 | 1 | 2;

    setCheckedState(newState);

    props.setEmployees((prev: Employee[]) =>
      prev.map((e) =>
        e.id === props.currentEmployee?.id
          ? {
              ...e,
              permissions: e.permissions.some(perm => perm.appointment.id === props.appointment.id)
              ? e.permissions.map((perm) =>
                perm.appointment.id === props.appointment.id
                  ? { ...perm, level: newState}
                  : perm)
              : [...e.permissions, {appointment: props.appointment, level: newState}]
            }
          : e
      )
    )
  }

  return (
    <Checkbox 
      style={{
        width:'fit-content',
        margin: 10,
      }}
      checked={checkedState === 1}
      indeterminate={checkedState === 2}
      key={props.appointment.id}
      label={props.appointment.longName}
      size='lg'
      icon={checkedState === 1 ? IconCheck   : IconStar}
      color={checkedState === 1 ? '#4A6FA5' : 'yellow'}
      onChange={handleChange}
      />
    );
  }  
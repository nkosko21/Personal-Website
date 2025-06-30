import React from 'react';
import './HourGrid.css';
import Employee from './Types/Employee';
import { Button, em, Popover, Text } from '@mantine/core';

export default function HourGrid(props : 
  {
    employeeList: Employee[],
    handleDeleteAppointment: any,
    handleSwapAppointment: any
  }) {
  const currentEmployees = [...props.employeeList].filter(emp => emp.clockedIn);
  const sortedEmployeeList = [...currentEmployees].sort((a, b) => a.turnValue - b.turnValue);

  const getAppointments = (employee: Employee) => {
    return(
      <tr>
        <td className="hour-cell body-cell">
          <div className='employee-title'>
            {employee.name}
          </div>
          <div className='sub-title'>
            {employee.turnValue}pts
          </div>
        </td>
        {Array.from({ length: 15 }, (_, i) => (
          i < employee.appointments.length 
            ? <td className="hour-cell body-cell" key={i}>
              <Popover position="top" withArrow >
                <Popover.Target>
                  <Text>
                    {employee.appointments[i].longName}
                  </Text>
                </Popover.Target>
                <Popover.Dropdown>
                  <span className='sub-title'>{employee.appointments[i].timeAssigned ?? ''}</span>
                  <br/>
                  <Button onClick={() => props.handleDeleteAppointment(employee.appointments[i], employee.id)}>
                    Delete
                  </Button>
                  <br/>
                  <Button 
                    onClick={() => {
                      props.handleSwapAppointment(employee.appointments[i], employee.id);
                      props.handleDeleteAppointment(employee.appointments[i], employee.id);
                    }}
                  >
                    Swap
                  </Button>
                </Popover.Dropdown>
              </Popover>
            </td>
            : <td className="hour-cell body-cell" key={i}></td>
        ))}
      </tr>
    )
  }
  return (
    <div className="hour-grid-container">
      <table className="hour-grid-table">
        <tbody>
          {sortedEmployeeList.length > 0
            ? sortedEmployeeList.map((employee) => (
                getAppointments(employee)
            ))
            : getAppointments({id: '0', name: '', clockedIn: false, permissions: [], turnValue: 0, appointments: []})
        }
        </tbody>
      </table>
    </div>
  );
}

import React from 'react';
import './HourGrid.css';
import Employee from './Types/Employee';
import { Button, em, Popover, Text } from '@mantine/core';

export default function HourGrid(employeeList: Employee[], handleDeleteAppointment: any) {
  const currentEmployees = [...employeeList].filter(emp => emp.clockedIn);
  const sortedEmployeeList = [...currentEmployees].sort((a, b) => a.turnValue - b.turnValue);

  const getAppointments = (employee: Employee) => {
    return(
      <tr>
        <td className="hour-cell body-cell">
          <div className='employee-title'>
            {employee.name.split(' ').map((name, index) => 
              index === 0 ? name : name.charAt(0)
            )}
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
                  <Button onClick={() => {console.log('s'); handleDeleteAppointment(employee.appointments[i].id, employee.id)}}>
                    Delete
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
          {sortedEmployeeList.map((employee) => (
              getAppointments(employee)
          ))}
        </tbody>
      </table>
    </div>
  );
}

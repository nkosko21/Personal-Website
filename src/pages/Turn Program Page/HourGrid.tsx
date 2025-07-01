import React from 'react';
import './HourGrid.css';
import Employee from './Types/Employee';
import { Button, em, Popover, Text } from '@mantine/core';

export default function HourGrid(props : 
  {
    employeeList: Employee[],
    handleDeleteAppointment: any,
    handleSwapAppointment: any,
    handleEmployeeClick: any,
  }) {
  const currentEmployees = [...props.employeeList].filter(emp => emp.clockedIn);
  const sortedEmployeeList = [...currentEmployees].sort((a, b) => a.turnValue - b.turnValue);

  const getAppointments = (employee: Employee) => {
    return(
      <tr key={employee.id}>
        <td 
          className="hour-cell body-cell"
           onClick={() => props.handleEmployeeClick(employee)}
        >
          <div className='employee-title'>
            {employee.name}
          </div>
          <div className='sub-title'>
            {employee.turnValue} turns
          </div>
        </td>
        {Array.from({ length: 15 }, (_, i) => (
          i < employee.appointments.length 
            ? <td 
                className="hour-cell body-cell" 
                key={i}
                style={{
                  background: `linear-gradient(45deg, ${employee.appointments[i].gradient?.from}, ${employee.appointments[i].gradient?.to})`,
                }}
              >
              <Popover position="top" withArrow >
                <Popover.Target>
                  <p style={{fontWeight: 'bold', fontSize: '1rem'}}>
                    {employee.appointments[i].longName}
                    <br/>
                    {`(${employee.appointments[i].shortName})`}
                  </p>
                </Popover.Target>
                <Popover.Dropdown bg='#4A4553' bd='2px solid #5E5B6A'>
                  <span className='appointment-time-subtitle'>{employee.appointments[i].timeAssigned ?? ''}</span>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <Button 
                      onClick={() => 
                        props.handleDeleteAppointment(employee.appointments[i], employee.id)
                      }
                      color='#EF4444'
                      style={{margin: 0, marginTop: 5}}
                    >
                      Delete
                    </Button>
                    <div style={{width: '10px'}}/>
                    <Button 
                      onClick={() => {
                        props.handleSwapAppointment(employee.appointments[i], employee.id);
                        props.handleDeleteAppointment(employee.appointments[i], employee.id);
                      }}
                      color='#10B981'
                      style={{margin: 0, marginTop: 5}}
                    >
                      Swap
                    </Button>
                  </div>
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
            ? sortedEmployeeList.reverse().map((employee) => (
                getAppointments(employee)
            ))
            : getAppointments({id: '0', name: '', clockedIn: false, permissions: [], turnValue: 0, appointments: []})
        }
        </tbody>
      </table>
    </div>
  );
}

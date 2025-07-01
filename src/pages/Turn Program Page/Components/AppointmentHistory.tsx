import { Table } from '@mantine/core';
import Appointment from '../Types/Appointment';

export default function AppointmentHistory({ appointments }: { appointments: Appointment[] }) {
  let turnsTally = 0;
  const rows = appointments.map((appt) => {
    turnsTally+= appt.turns;
    console.log(turnsTally)

    return <Table.Tr key={appt.id}>
      <Table.Td>{appt.timeAssigned}</Table.Td>
      <Table.Td>{appt.longName}{'('}{appt.shortName}{')'}</Table.Td>
      <Table.Td>{appt.turns}</Table.Td>
      <Table.Td>{turnsTally}</Table.Td>
    </Table.Tr>
  });

  return (
    <Table style={{fontSize: '1.5rem'}}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Time Assigned</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>#</Table.Th>
          <Table.Th>Turns Total</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
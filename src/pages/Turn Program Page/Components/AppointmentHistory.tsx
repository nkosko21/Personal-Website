import { Table } from '@mantine/core';
import Appointment from '../Types/Appointment';

export default function AppointmentHistory({ appointments }: { appointments: Appointment[] }) {
  let pointsTally = 0;
  const rows = appointments.map((appt) => {
    pointsTally+= appt.points;
    console.log(pointsTally)

    return <Table.Tr key={appt.id}>
      <Table.Td>{appt.timeAssigned}</Table.Td>
      <Table.Td>{appt.longName}{'('}{appt.shortName}{')'}</Table.Td>
      <Table.Td>{appt.points}</Table.Td>
      <Table.Td>{pointsTally}</Table.Td>
    </Table.Tr>
  });

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Time Assigned</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>#</Table.Th>
          <Table.Th>Points Total</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
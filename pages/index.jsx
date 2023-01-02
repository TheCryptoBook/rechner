import { useState } from "react";
import {
  BodyContainer,
  InputZeile,
  Text,
  Span,
  Table,
  Tr,
  Th,
  Td,
} from "../components/Style-Components";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Home() {
  const [workingHours, setWorkingHours] = useState({
    hour: "",
    minute: "",
  });

  const [result, setResult] = useState([]);

  const [summe, setSumme] = useState(0);

  const handleChange = ({ currentTarget: input }) => {
    setWorkingHours({ ...workingHours, [input.name]: input.value });
  };

  const calculate = () => {
    const hour = workingHours.hour === "" ? 0 : parseInt(workingHours.hour);
    const minute =
      workingHours.minute === "" ? 0 : parseInt(workingHours.minute);
    const currentSum = Number(summe);

    const convert = (60 * hour + minute) / 60;
    const numberFixed = convert.toFixed(2);
    const fixedToNumber = Number(numberFixed);

    const workingTime = `${hour}:${minute === 0 ? "00" : minute}`;

    const lastSum = (currentSum + fixedToNumber).toFixed(2);
    setResult([
      ...result,
      {
        time: workingTime,
        dezimal: numberFixed,
      },
    ]);

    setSumme(lastSum);
    setWorkingHours({
      hour: "",
      minute: "",
    });
  };

  const reset = (setResult, setSumme) => {
    setResult([]);
    setSumme(0);
  };

  return (
    <BodyContainer>
      <InputZeile>
        <Input
          name={"hour"}
          placeholder={"Stunden"}
          value={workingHours.hour}
          onChange={handleChange}
        />
        <Input
          name={"minute"}
          placeholder={"Minute"}
          value={workingHours.minute}
          onChange={handleChange}
        />
      </InputZeile>
      <InputZeile>
        <Button buttonName={"Berechnen"} onClick={calculate} />
        <Button
          deleteButton={true}
          buttonName={"Reset"}
          onClick={() => reset(setResult, setSumme)}
        />
      </InputZeile>

      <div>
        <Text>
          Gesammtzeit: <Span>{summe}</Span>
        </Text>
      </div>

      <Table>
        <Tr>
          <Th>Tag</Th>
          <Th>Arbeitszeit</Th>
          <Th>Dezimal</Th>
        </Tr>
        {result.map((day, index) => (
          <Tr>
            <Td>{index + 1}</Td>
            <Td>{day.time}</Td>
            <Td>{day.dezimal}</Td>
          </Tr>
        ))}
      </Table>
    </BodyContainer>
  );
}

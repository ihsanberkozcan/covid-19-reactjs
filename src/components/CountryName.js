import { Typography } from "antd";
const { Title } = Typography;

export const CountryName = ({ country }) => {
  return <Title level={2}>{country}</Title>;
};

import { Statistic, Card, Row, Col } from "antd";

export const InfoBox = ({ countryInfo, vaccine }) => {
  return (
    <div className="site-statistic-demo-card" style={{ marginBottom: "15px" }}>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 12 }} lg={{ span: 6 }}>
          <Card>
            <Statistic
              title="Cases"
              value={countryInfo.cases}
              valueStyle={{ color: "#FFC300" }}
            />
          </Card>
        </Col>
        <Col xs={{ span: 12 }} lg={{ span: 6 }}>
          <Card>
            <Statistic
              title="Recovered"
              value={countryInfo.recovered}
              valueStyle={{ color: "#5463FF" }}
            />
          </Card>
        </Col>
        <Col xs={{ span: 12 }} lg={{ span: 6 }}>
          <Card>
            <Statistic
              title="Deaths"
              value={countryInfo.deaths}
              valueStyle={{ color: "#FF1818" }}
            />
          </Card>
        </Col>
        <Col xs={{ span: 12 }} lg={{ span: 6 }}>
          <Card>
            <Statistic
              title="Vaccine"
              value={vaccine}
              valueStyle={{ color: "#139487" }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

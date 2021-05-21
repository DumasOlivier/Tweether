import { useState } from 'react';
import { getUserInfo, createUser } from '../web3/users';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'reactstrap';

const IndexPage = () => {
  const [userId, setuserId] = useState(null);

  const logUser = async () => {
    const userInfo = await getUserInfo(1);
    setuserId(JSON.stringify(userInfo));
  };

  const createUser = async () => {
    const tx = await createUser('Olivier');
    console.log(tx);
  };

  return (
    <Container>
      <h1 className="text-center mt-5">Tweether.</h1>
      <Row>
        <Col className="d-flex justify-content-center">
          <Button color="primary" className="mt-3" onClick={() => logUser()}>
            Get user with ID 1
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mt-4" style={{ wordBreak: 'break-all' }}>
            {userId && <div>UserId = {userId}</div>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default IndexPage;

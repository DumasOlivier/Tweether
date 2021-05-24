import { useState } from 'react';
import { getUserInfo, createUser } from '../web3/users';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const IndexPage = () => {
  const [userId, setuserId] = useState(null);
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const logUser = async () => {
    const userInfo = await getUserInfo(1);
    setuserId(JSON.stringify(userInfo));
  };

  const createNewUser = async () => {
    const tx = await createUser(username);
    console.log(tx);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    if (username.length === 0) {
      setUsernameError('Please enter a username.');
    } else {
      setUsernameError('');
      createNewUser();
    }
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
          <div className="mt-4 text-center" style={{ wordBreak: 'break-all' }}>
            {userId && <div>UserId = {userId}</div>}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mx-auto mt-4" xl={4} lg={4} md={4} sm={10}>
          <Form>
            <FormGroup>
              <Label className="mb-2" for="username">
                Create a new User
              </Label>
              <Input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => handleChange(e)}
                placeholder="Enter a username..."
              />
            </FormGroup>
            <Button onClick={() => handleSubmit()} className="mt-3 w-100">
              Submit
            </Button>
            <div className="mt-3">
              <p className="text-danger">
                {usernameError.length > 0 && usernameError}
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default IndexPage;

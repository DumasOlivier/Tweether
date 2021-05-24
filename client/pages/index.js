import { useState } from 'react';
import { getUserInfo, createUser } from '../web3/users';
import { getTweetInfo, createTweet } from '../web3/tweets';
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
  const [tweetId, setTweetId] = useState(null);
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [tweetText, setTweetText] = useState('');
  const [tweetError, setTweetError] = useState('');

  const logUser = async () => {
    const userInfo = await getUserInfo(1);
    setuserId(JSON.stringify(userInfo));
  };

  const logTweet = async () => {
    const tweetInfo = await getTweetInfo(1);
    setTweetId(JSON.stringify(tweetInfo));
  };

  const createNewUser = async () => {
    if (username.length === 0) {
      return;
    }
    const tx = await createUser(username);
    console.log('User created !', tx);
  };

  const createNewTweet = async () => {
    if (tweetText.length === 0) {
      return;
    }
    const tx = await createTweet(tweetText);
    console.log('Tweet created !', tx);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleTweetChange = (e) => {
    setTweetText(e.target.value);
  };

  const handleSubmit = () => {
    if (username.length === 0) {
      setUsernameError('Please enter a username.');
    } else {
      setUsernameError('');
      createNewUser();
    }
  };

  const handleSubmitTweet = () => {
    if (tweetText.length === 0) {
      setTweetError('Please enter some text for your tweet.');
    } else {
      setTweetError('');
      createNewTweet();
    }
  };

  return (
    <Container>
      <h1 className="text-center mt-5">Tweether.</h1>

      {/* Get User */}
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

      {/* Create User */}
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

      <hr className="my-5" />

      {/* Get Tweet */}
      <Row>
        <Col className="d-flex justify-content-center">
          <Button color="primary" className="mt-3" onClick={() => logTweet()}>
            Get the first Tweet
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mt-4 text-center" style={{ wordBreak: 'break-all' }}>
            {tweetId && <div>Tweet = {tweetId}</div>}
          </div>
        </Col>
      </Row>

      {/* Create Tweet */}
      <Row>
        <Col className="mx-auto mt-4" xl={4} lg={4} md={4} sm={10}>
          <Form>
            <FormGroup>
              <Label className="mb-2" for="username">
                Create a Tweet
              </Label>
              <Input
                type="text"
                name="tweetTewt"
                id="tweetText"
                value={tweetText}
                onChange={(e) => handleTweetChange(e)}
                placeholder="Enter some text..."
              />
            </FormGroup>
            <Button onClick={() => handleSubmitTweet()} className="mt-3 w-100">
              Submit
            </Button>
            <div className="mt-3">
              <p className="text-danger">
                {tweetError.length > 0 && tweetError}
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default IndexPage;

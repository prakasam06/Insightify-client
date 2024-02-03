import { useEffect } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';

export const PollResponse = () => {
  const params = useParams().pollId;
  useEffect(() => {
   0
    const chatSocket = io('http://localhost:3000/chat/pollresp');

    chatSocket.emit('joinPollRoom', params);

    chatSocket.on('connection', (socket) => {
      console.log('A user connected to the chat namespace');
      socket.on('chatMessage', (message) => {
        console.log('Message received on chat namespace:', message);
        socket.emit('receiveMessage', message);
      });
      socket.on('receiveMessage', (message) => {
        console.log('Message received:', message);
      });
    });

    return () => {
      chatSocket.emit('leavePollRoom', params);
      chatSocket.off('receiveMessage');
      chatSocket.disconnect();
    };
  }, [params]);

  const sendMessage = (message) => {
    io('http://localhost:3000/chat/pollresp').emit('getResponse', {
      params,
      message,
    });
  };

  return (
    <div>
      <h2>Chat for Poll ID: {params}</h2>
      <button onClick={() => sendMessage('Hello, this is a test message!')}>
        Send Test Message
      </button>
    </div>
  );
};

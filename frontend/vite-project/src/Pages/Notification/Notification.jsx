import React from 'react';
import Footer from '../../Components/footer/Footer';
import './Notification.css';

const Notification = () => {
  const orders = [
    { id: 1, item: 'Laptop', price: 300, date: '2023-12-01' },
    { id: 2, item: 'Mobile Phone', price: 150, date: '2023-12-05' },
    // Add more order items as needed
  ];

  const notifications = [
    { id: 1, message: 'Your order for Laptop has been confirmed.' },
    { id: 2, message: 'Collection scheduled for 2023-12-07.' },
    // Add more notifications as needed
  ];

  const pastConversations = [
    { id: 1, subject: 'Inquiry about Laptop', date: '2023-11-29' },
    { id: 2, subject: 'Collection reschedule request', date: '2023-12-03' },
    // Add more conversations as needed
  ];

  return (
    <div>
    <div className="notification-container">
      <h1>Notifications</h1>

      <section className="orders">
        <h2>Your Orders</h2>
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <span>{order.item}</span> - <span>${order.price}</span> on <span>{order.date}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="notifications">
        <h2>New Notifications</h2>
        <ul>
          {notifications.map(notification => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      </section>

      <section className="collection-journey">
        <h2>Collection Journey Map</h2>
        <p>Your collection is scheduled for 2023-12-07. Check your email for more details.</p>
      </section>

      <section className="live-chat">
        <h2>Live Chat</h2>
        <p>Need assistance? Chat with our support team!</p>
        <button>Start Live Chat</button>
      </section>

      <section className="past-conversations">
        <h2>Past Conversations</h2>
        <ul>
          {pastConversations.map(conversation => (
            <li key={conversation.id}>
              <span>{conversation.subject}</span> - <span>{conversation.date}</span>
            </li>
          ))}
        </ul>
      </section>

      
    </div>
    <Footer />
    </div>
  );
};

export default Notification;
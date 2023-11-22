# CureHealth Frontend

## Problem Description

The CureHealth telehealth platform aims to revolutionize remote medical consultations by providing individuals with seamless access to timely medical assistance, employing chat, audio calls, and video calls. Key features include a Chat Bot, Email Sending, Chatroom , Video Call with Doctor, Regional Language Support, and much more.

## Key Features and Functionalities
### 1. Doctor Connect for Critical Cases
- The platform facilitates direct connections to doctors through real-time audio or video calls for critical cases.

### 2. Regional Language Support (optional)
- Multilingual capabilities are enabled using the Google Translate API, allowing users to access medical assistance in their regional languages.

### 3. Chatbot
- Initially explored DialogFlow and OpenAI API; settled on Botpress for customized chatbot features.

### 4. Chatroom
- Initially tried socket.io; implemented ChatEngine.io for open-source chat features, though backend storage is under development.

### 5. Video
- Explored Agora but switched to ZEGOCLOUD for seamless video calling.

### 6. Authentication using JWT
- Implemented JWT authentication for secure authentication without leaking user information.

### 7. Vertical Sidebar
- Created a Vertical Sidebar with animations using framer-motion.

### 8. Private Routing Implementation
- Implemented private routes to restrict access to key features for unauthenticated users.

### 9. Email Sending
- Implemented email sending features for user feedback to admin and to book appointment with doctors along with appointment confirmation to users.

### 10. Regional Language Support
- Enabled multilingual capabilities using the Google Translate API.

### 11. Informational Pages
- Provided informative pages for unauthenticated users on topics like urgent care, primary care, mental health, and dermatology.

### 12. Making Appointments
- Implemented a feature for logged-in users to make appointments with available doctors for that particular disease.

## Main Challenges Faced and Final Solutions

### 1. Chatbot
- **Challenge:** DialogFlow and OpenAI API were paid, Rasa required significant ML understanding.
- **Solution:** Adopted Botpress for customization.

### 2. Chatroom
- **Challenge:** Socket.io integration issues with Django.
- **Solution:** Implemented ChatEngine.io; ongoing work on backend storage.

### 3. Video
- **Challenge:** Difficulty integrating Agora with Django and React.
- **Solution:** Adopted ZEGOCLOUD for seamless video calling.

## Technologies Used in Frontend

- React
- React Router
- Framer Motion
- JWT Decode
- React Chat Engine
- ZEGOCLOUD
- Google Translate API

### Prerequisites:

1. **Node.js and npm**: Install Node.js (which includes npm) from the [official website](https://nodejs.org/).
2. **Setup**: Setup Vite project using the below command
  ```bash
   npm create vite@latest
   ```

## Packages Installation Process (Option 1)
1.  **Install Required Packages**:
```bash
npm install \
  @zegocloud/zego-uikit-prebuilt@^1.8.15 \
  agora-rtc-sdk@^3.6.11 \
  agora-rtc-sdk-ng@^4.19.2 \
  framer-motion@^10.16.4 \
  jwt-decode@^3.1.2 \
  react@^18.2.0 \
  react-chat-engine@^1.11.28 \
  react-chat-engine-advanced@^0.1.28 \
  react-chat-engine-pretty@^0.1.8 \
  react-dom@^18.2.0 \
  react-helmet@^6.1.0 \
  react-icons@^4.11.0 \
  react-multi-carousel@^2.8.4 \
  react-router-dom@^6.17.0 \
  react-social-icons@^6.4.0 \
  react-use-websocket@^3.0.0
```
2. Use `npm run dev` to start the development server.
   
## Packages Installation Process (Option 2)

1. Install Node.js and npm on your machine.
2. Clone the CureHealth frontend repository.
3. Navigate to the project directory.
4. Run `npm install` to install all the required packages.
5. Use `npm run dev` to start the development server.
6. Access the CureHealth frontend on `http://localhost:3000` in your web browser.

## Contributions
- [Vaibhav Mittal](https://github.com/Vebstere) 
- [Krish Dave](https://github.com/KrishDave1)
- [Valmik Belgaonkar](https://github.com/valmikGit)
- [Chirag MV](https://github.com/ChiragMV)

## Contact Us
For any additional information or inquiries, please contact us on our website [gmail](synergybackend12@gmail.com).

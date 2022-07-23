# ICard Mobile Application

## Installation

Type in terminal (assuming that the developers have already install Node.js)

```bash
npm install
```

## Running Application

Type in terminal to start Metro Bundler

```bash
npm start
```

### Expo Go

Make sure to download the Expo Go App (Android).

Open Expo Go and scan the QR Code on the screen (Android) or use the Camera app (iOS).

If the screen display with "Something went wrong", try starting the Metro Bundler again with

```bash
npm run start-tunnel
```

## Testing

Write snapshot test inside `__tests__` folder

Update the snapshot every time expected UI changes happens

Type in terminal to test

```bash
npm test
```

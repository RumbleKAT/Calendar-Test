# Vue2 ToastUI Calendar Example

This project shows a minimal setup of [TOAST UI Calendar](https://github.com/nhn/tui.calendar) using Vue 2.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start a static server and open the calendar:
   ```bash
   npm start
   ```
   Then navigate to [http://localhost:8080](http://localhost:8080).

## Running Tests

Run the unit tests with:
```bash
npm test
```

## Event Validation

When creating events interactively, the calendar uses a `beforeCreateEvent` hook
to ensure required fields are provided. An alert is shown if the title or start
and end dates are missing, and the event will not be created.

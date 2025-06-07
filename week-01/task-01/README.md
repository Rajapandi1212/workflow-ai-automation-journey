**Task 1 (User Signup Workflow Automation)**:

---

**Goal:**
Implement a backend API where when a user signs up, it triggers an automated workflow to:

1. Simulate saving the user data
2. Send a Slack message via Incoming Webhook

---

**Problem Statement:**
Create a POST `/signup` endpoint that accepts user info (name, email), then:

* Simulates saving this data (e.g., by logging or a timeout)
* Sends a notification message to Slack using a webhook URL stored in environment variables
* Responds with JSON `{ "message": "Signup workflow completed" }`

---

**Expected API usage:**
POST request to `/signup` with JSON payload like:

```json
{ "name": "Raj", "email": "raj@example.com" }
```

---

**Expected response:**

```json
{
  "message": "Signup workflow completed"
}
```

---

**Notes:**

* The data save is simulated, no real database needed
* Slack integration uses an Incoming Webhook (URL in `.env`)
* Email sending step is omitted for simplicity
* Demonstrates event-driven backend automation triggered by user action

---

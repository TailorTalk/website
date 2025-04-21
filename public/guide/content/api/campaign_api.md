# Whatsapp Template API

The Template API allows you to send WhatsApp template messages to leads or customer. These messages will be recorded in the chat history, ensuring that agents have full context if the lead responds.

## API Endpoint

`https://service.tailortalk.ai/leads/campaign/v1/send_whatsapp_template_message`

## Headers

| Key            | Value                     |                                
|---------------|-------------------------|
| Authorization | Agent `<token>`   | 


You can find `agent_token` in `Manage Agent` page.

<img src="../images/agent_access_token.png" alt="text" width="70%" />



## Request Body

| Parameter   | Required | Description |
|-------------|----------|-------------|
| lead_contact | ✅       | lead contact number |
| lead_name | ❌       | lead name |
| template   | ✅       |  whatsapp template message name |
| template_params     |❌        | Parameters for the WhatsApp template body |

### Example Request Body

```json
{
    "lead_contact": "9816923811",
    "lead_name": "shiva",
    "template_name": "test_template",
    "template_params": ["24", "Delhi"]
}
```

## Notes

- Ensure that the agent access token is included in the request headers.
- Messages sent via this API will be visible in the lead's chat history.
- If the lead responds, the agent will respond based on the template message context.

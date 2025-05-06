# API Tool

The **API Tool** enables your TailorTalk AI agent to interact with external RESTful services by configuring endpoints, headers, parameters, and request bodies. This empowers your agent to fetch real‑time data or send information to other systems, enhancing automation and personalization.

<img src="../images/api_tool.png" alt="TailorTalk Agent API Tool Interface" width="50%" />

### Adding API Information to Your TailorTalk Agent

- **API Name:**  
  A friendly label for the endpoint (e.g., _Current Weather_, _Order Submission_).

- **Request Type:**  
  Choose **GET** to retrieve data or **POST** to submit data.

- **URL:**  
  The full endpoint URL (e.g., `https://api.openweathermap.org/data`).

- **Headers:**  
  Define any HTTP headers as key‑value pairs, such as `Authorization: Bearer <token>` or custom keys.

- **Parameters / Body:**  
  - For **GET** requests, specify **Parameters** (query string).  
  - For **POST** requests, define **Body** fields.  
  Each argument includes:  

  | Property       | Description                                   |
  | -------------- | --------------------------------------------- |
  | **Name**       | Field name (e.g., `q`, `units`, `apikey`)     |
  | **Type**       | Data type (`int` or `str`)                    |
  | **Required**   | Whether the field is mandatory                |
  | **Description**| Brief explanation of the field’s purpose      |

- **Description (Optional):**  
  A longer note to help other developers or agents understand this API’s role.

---

### Supported Request Types

| Request Type | Use Case                              |
| ------------ | ------------------------------------- |
| **GET**      | Fetch data (e.g., weather, user info) |
| **POST**     | Submit data (e.g., create order)      |

---

### Use Cases for a Sales AI Agent

- **Product Catalog Lookup:**  
  Fetch detailed product specs, pricing tiers, and availability in real time when customers ask about features or stock.

- **Pricing & Quotations:**  
  Generate customized quotes by pulling pricing rules, discounts, and tax rates, then return a formatted proposal.

- **Inventory Checks:**  
  Verify item availability across warehouses or stores before committing to orders or deliveries.

- **Order Creation & Tracking:**  
  Place orders on behalf of customers and retrieve shipment status updates to keep prospects informed.

- **Upsell & Cross‑sell Suggestions:**  
  Call recommendation engines to surface complementary products based on customer interests or purchase history.

By configuring the **API Tool** with these sales‑focused endpoints, your TailorTalk agent can drive more effective, personalized engagements—streamlining everything from discovery to close.  








# Contract Management Platform

## 🔗 Live Demo 
👉 https://contract-management-platform-jgxe.onrender.com/ 
_

---

## 📌 Overview
The **Contract Management Platform** is a frontend-only application built from scratch as part of an assignment to demonstrate **product thinking, UI design, state management, and clean code architecture**.

No backend or UI designs were provided. All architecture, UI flow, and state handling were independently designed and implemented.

---

## 🎯 Assignment Objective
Build a frontend-based Contract Management Platform that demonstrates:
- Product thinking
- UI/UX clarity
- Controlled state management
- Clean, scalable architecture

---

## 🛠 Tech Stack
- **React** – Component-based UI
- **TypeScript** – Type safety & maintainability
- **Vite** – Fast dev server & optimized builds
- **React Router** – Client-side routing
- **Tailwind CSS** – Utility-first styling

**Why this stack?**  
This stack ensures fast development, predictable state handling, and a clean separation of concerns without unnecessary complexity.

---


### Design Decisions
- Clear separation between UI, state, and logic
- Centralized contract & blueprint state using Zustand
- Strong TypeScript typing for core entities
- Modular and reusable components

---

## ⚙️ Functional Features

### 1️⃣ Blueprint Creation
- Create reusable contract blueprints
- Supported field types:
  - Text
  - Date
  - Signature
  - Checkbox
- Basic positioning of fields
- Stored metadata:
  - Field type
  - Label
  - Position

📸 **Screenshot – Blueprints Page**
![Blueprints Page](./src/assets/Screenshot%202026-01-21%20140929.png)

---

### 2️⃣ Contract Creation from Blueprint
- Select an existing blueprint
- Generate a contract from it
- All fields are inherited from the blueprint
- Users can fill values for each field

📸 **Screenshot – Contract Creation Page**
![Contract Page](./src/assets/Screenshot%202026-01-21%20141916.png)

---

### 3️⃣ Contract Lifecycle Management
Each contract follows a strict lifecycle:


Rules enforced:
- No skipping lifecycle steps
- UI shows current status clearly
- Only valid actions are enabled
- Locked contracts are read-only
- Revoked contracts cannot continue

---

### 4️⃣ Contract Dashboard
- Table view of all contracts
- Displays:
  - Contract name
  - Blueprint name
  - Status
  - Created date
  - Action buttons
- Filter by:
  - Active
  - Pending
  - Signed

📸 **Screenshot – Dashboard**
![Dashboard](./src/assets/Screenshot%202026-01-21%20141949.png)

---

## 🎨 UI Guidelines
- No external UI templates used
- Focus on:
  - Clarity
  - Logical flow
  - Usability
- Visual polish kept secondary to structure and UX

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 
- npm

### Installation
```bash
git clone https://github.com/VaishnaviBhawar/Contract-Manager.git
cd Contract-Manager
npm install



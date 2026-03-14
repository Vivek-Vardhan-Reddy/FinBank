<div align="center">
  
  <!-- animated header effect -->
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=1A4D8C&center=true&vCenter=true&width=435&lines=FinBank;Banking+Transaction+System" alt="FinBank" />

  <p align="center">
    <strong>✨ modern · full‑stack banking experience ✨</strong>
  </p>

  <!-- badges: tech stack with icons & flat style -->
  <p>
    <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
    <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Spring Boot" />
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
    <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
    <img src="https://img.shields.io/badge/Apache_Tomcat-F8DC75?style=for-the-badge&logo=apache-tomcat&logoColor=black" alt="Tomcat" />
  </p>

  <!-- cool line break -->
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="80%">
</div>

<br>

## 🌟 **About FinBank**
> **Banking Transaction Management System** – a full‑stack application that lets users register, log in, transfer money, view transaction history, and check balances in real time.

FinBank combines a **Spring Boot** REST API with a **React** frontend, **MySQL** database, and **Bootstrap** styling. Every new account starts with **₹1000**, and the interface updates dynamically after login.  

<br>

## 🏦 **Core Features**

<details open>
<summary><b>🔐 User Authentication</b></summary>
<br>
✔︎ Register new users & secure login<br>
✔︎ Dynamic navbar (changes after login)<br>
✔︎ Private route protection – users access only their own dashboard
</details>

<details open>
<summary><b>💰 Account & Transfers</b></summary>
<br>
✔︎ New accounts receive ₹1000 welcome balance<br>
✔︎ Check balance at any time<br>
✔︎ Transfer money between accounts (sender ≠ receiver)<br>
✔︎ Validations: insufficient balance, same account<br>
✔︎ Sender balance ↓ · receiver balance ↑
</details>

<details open>
<summary><b>📋 Transaction History</b></summary>
<br>
✔︎ See every transaction where you are sender <i>or</i> receiver<br>
✔︎ Clear overview of `fromAccount` ↔ `toAccount`
</details>

<details open>
<summary><b>📊 Dashboard</b></summary>
<br>
✔︎ Displays your profile: **User ID**, **Name**, **Email**<br>
✔︎ clean, user‑friendly layout
</details>

<br>

## ⚙️ **Tech Stack at a glance**

<div align="center">

| 🧩 Component      | 🔧 Technology            |                                        |
|-------------------|--------------------------|----------------------------------------|
| **Backend**       | Java + Spring Boot       | REST API, business logic               |
| **Frontend**      | React + Bootstrap        | responsive UI, private routing         |
| **Database**      | MySQL                    | persistent account & transaction data  |
| **Server**        | Apache Tomcat            | deployment                             |

</div>

<br>

## 🚀 **Getting Started**

```bash
# 1. clone the repository
git clone https://github.com/Vivek-Vardhan-Reddy/FinBank.git

# 2. backend setup (Spring Boot)
cd FinBank/backend
./mvnw spring-boot:run

# 3. frontend setup (React)
cd ../frontend
npm install
npm start

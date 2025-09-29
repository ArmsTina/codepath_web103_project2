import { pool } from "./database.js";
import "./dotenv.js";
import operatorsData from "../data/operators.js";

async function createOperatorsTable() {
  const createTableQuery = `
    DROP TABLE IF EXISTS operators;

    CREATE TABLE IF NOT EXISTS operators (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        position VARCHAR(10) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        submittedBy VARCHAR(255) NOT NULL,
        submittedOn TIMESTAMP NOT NULL
    )
`;
  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 operators table created successfully");
  } catch (err) {
    console.error("⚠️ error creating operators table", err);
  }
}

const seedOperatorsTable = async () => {
  await createOperatorsTable();

  operatorsData.forEach((operator) => {
    const insertQuery = {
      text: "INSERT INTO operators (name, position, image, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6)",
    };

    const values = [
      operator.name,
      operator.position,
      operator.image,
      operator.description,
      operator.submittedBy,
      operator.submittedOn,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting operators", err);
        return;
      }

      console.log(`✅ ${operator.name} added successfully`);
    });
  });
};

seedOperatorsTable();

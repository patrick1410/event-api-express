import { execSync } from "child_process";
import path from "path";

const collectionPath = path.resolve("postman/collections/Events API.json");
const environmentPath = path.resolve(
  "postman/environments/Local.postman_environment.json"
);
const negativeCollectionPath = path.resolve(
  "postman/collections/Events API Negative.json"
);

const runTest = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    process.exit(1);
  }
};

const testPositive = `newman run "${collectionPath}" -e "${environmentPath}"`;
const testNegative = `newman run "${negativeCollectionPath}" -e "${environmentPath}"`;

runTest(testPositive);
runTest(testNegative);

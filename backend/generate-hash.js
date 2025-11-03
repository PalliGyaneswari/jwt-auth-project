const bcrypt = require("bcryptjs");

(async () => {
  const hash = await bcrypt.hash("password", 10);
  console.log("Generated hash:", hash);
})();

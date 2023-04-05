const mongoose = require("mongoose");

beforeAll(function (done) {
  mongoose.connect("mongodb://0.0.0.0/tenant_talk", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.on("open", function () {
    done();
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

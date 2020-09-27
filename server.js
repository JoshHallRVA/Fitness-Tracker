const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("Develop/public"));

mongoose
	.connect(
		process.env.MONGODB_URI ||
			"mongodb+srv://Buttown42069:<Buttown42069>@fitnesscluster.7igl8.mongodb.net/<FitnessTracker>?retryWrites=true&w=majority",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		}
	)
	.then(() => console.log("MongoDB successfully connected"))
	.catch((err) => console.log(err));

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});

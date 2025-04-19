const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const cors = require("cors");

const mongoose = require("mongoose");

const StockData = require("./models/StockData");

dotenv.config();

// how to use cores

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: "GET, POST",
};

app.use(cors(corsOptions));
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

function convertToArray(data) {
  const stockDataArray = [];

  for (const date in data) {
    if (data.hasOwnProperty(date)) {
      const dayData = data[date];

      const dataPoint = {
        date: date,
        open: parseFloat(dayData["1. open"]),
        high: parseFloat(dayData["2. high"]),
        low: parseFloat(dayData["3. low"]),
        close: parseFloat(dayData["4. close"]),
        volume: parseInt(dayData["5. volume"]),
      };

      stockDataArray.push(dataPoint);
    }
  }

  stockDataArray.sort((a, b) => new Date(b.date) - new Date(a.date));

  return stockDataArray;
}

app.get("/apidata", async (req, res) => {
  try {
    const symbol = req.query.symbol || "IBM";
    const apiKey = process.env.ALPHA_API_KEY;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${apiKey}`;

    const response = await axios.get(url);
    const rawData = response.data["Monthly Time Series"];

    const stockDataArray = convertToArray(rawData);

    console.log("Market data fetched and converted successfully");
    const firstTen = [];
    for (let i = 0; i < 10; i++) {
      firstTen.push(stockDataArray[i]);
    }
    // res.json(firstTen);

    // await StockData.insertMany(stockDataArray);
    // for (let i = 0; i < stockDataArray.length; i++) {
    //   const stockData = new StockData(stockDataArray[i]);
    //   stockDataArray[i].date = new Date(stockDataArray[i].date);
    //   await stockData.save();
    //   // console.log(`Stock data for ${symbol} saved successfully at ${stockDataArray[i].date}`);
    // }
    res.json(stockDataArray);
  } catch (error) {
    console.error("Error fetching market data:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getApiData", async (req, res) => {
  const apiData = await StockData.find({});
  res.json(apiData);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

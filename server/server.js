const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const companyRoutes = require('./routes/companyRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use('/api/companies', companyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

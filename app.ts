import express, { Request, Response, NextFunction } from 'express';

const app = express();
const PORT = 3131;

interface LocationWithTimezone {
    country: string;
    capital: string;
    currency: string;
  };
  
  const getCountries = (request: Request, response: Response, next: NextFunction) => {
    let countries: LocationWithTimezone[] = [
      {
        country: 'Germany',
        capital: 'Berlin',
        currency: 'Euro'
      },
      {
        country: 'China',
        capital: 'Beijing',
        currency: 'Renminbi'
      },
      {
        country: 'Argentina',
        capital: 'Buenos Aires',
        currency: 'Argentine peso'
      },
      {
        country: 'Japan',
        capital: 'Tokyo',
        currency: 'Yen'
      },
      {
        country: 'Canada',
        capital: 'Ottawa',
        currency: 'Canadian dollar'
      },
      {
        country: 'United States of America',
        capital: 'Washington, D.C.',
        currency: 'United States dollar'
      }
      
    ];
  
    response.status(200).json(countries);
  };
  
// initial GET endpoint
app.get("/", (request, response) => {
    response.json({ message: "Root!" });
  });

//  GET countries endpoint
  app.get('/countries', getCountries);

app.listen(PORT, () => {
    console.log(`App running on localhost:${PORT}`);
});
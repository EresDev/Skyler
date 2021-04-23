# Skyler

Skyler is a web application for weather that provides current temperature in a given location.

This application consumes two APIs.
1. [openweathermap.org](https://openweathermap.org/current)  API provides conversion of address to latitude and longitude.
2. [mapbox.com](https://docs.mapbox.com/api/search/geocoding) API provides weather forecast for given latitude longitude.

You can sign up for a free account with limited request numbers to try this application.

## How to deploy?


```git clone https://github.com/EresDev/Skyler ```

```$ cd Skyler```

You need to get the API keys for above mentioned two APIs. Once you have the API keys for both, rename the .env-sample to .env file and add these API keys in there.

Now install the application.

```npm install```

Start the server.

```npm run start```


## License

Licensed under the [MIT License](LICENSE)
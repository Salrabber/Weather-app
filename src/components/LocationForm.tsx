import { useState } from "react";
import "../styles/LocationForm.scss";
import axios from "axios";
import { API_KEY } from "../variables";
import { WeatherData } from "../models";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";
import { UseCards } from "../hooks/cards";

interface LocationFormProps {
  fetchData: (card: WeatherData) => void;
}

export function LocationForm({ fetchData }: LocationFormProps) {
  const [value, setValue] = useState("");
  const {error, setError} = UseCards()
  const [loading, setLoading] = useState(false)

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (value.trim().length === 0) {
      setError("Please, enter valid City name");
      return;
    }
    try{
      setError('');
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}&units=metric`
      );
      fetchData(response.data);
      setLoading(false);
      setValue("");
    }catch(e: unknown){
      const error = e as Error;
      setLoading(false);
      setError(error.message);
    }
    
  };

  return (
    <div className="wrapper">
      <form className="col-md-6" onSubmit={submitHandler}>
        <label form="validationCustom03" className="form-label">
          Enter City
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom03"
          onChange={changeHandler}
          value={value}
          autoComplete="off"
        />
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </form>
      {loading && <Loader />}
      {error && (
        <ErrorMessage errorMsg={error} close={() => setError("")} />
      )}
    </div>
  );
}

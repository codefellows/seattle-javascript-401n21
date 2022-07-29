import { Handler } from 'express';

/*
  In this example, we first declare a funcion and then explicitly export it

  Because we'll be building out an API that works with JSON, let's format
  our response as a JSON object
*/

export const handle404: Handler = (req, res) => {
  const errorObject = {
    status: 404,
    message: 'Sorry, we could not find what you were looking for',
  };

  res.status(404).json(errorObject);
};

export default handle404;

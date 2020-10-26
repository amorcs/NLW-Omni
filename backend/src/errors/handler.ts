import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";

const errorHandler: ErrorRequestHandler = (error, request, response, next)=>{
    interface ValidationError{
        [key: string]: string[];
    }
    if(error instanceof ValidationError){
        let errors: ValidationError ={}
        error.inner.forEach(err=>{
            errors[err.path] = err.errors;
        });
        return response.status(400).json({ message : 'Validations fails', errors})
    }
    console.error(error);
    return response.status(500).json({message: "Internal server Error"})
};
export default errorHandler;

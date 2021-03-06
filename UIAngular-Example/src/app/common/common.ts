import { throwError } from 'rxjs';
import { HttpErrorResponse } from "@angular/common/http";

export function transformError(error: HttpErrorResponse | string) {
  let errorMessage: string = 'An unknown error has occured';
  if(typeof error === 'string'){
    errorMessage = error;
  } else if (error.error instanceof ErrorEvent){
    errorMessage = `Error! ${error.error.message}`;
  } else if (error.status){
    errorMessage = `Request failed with ${error.status} - ${error.statusText}`;
  }
  return throwError(errorMessage);
}

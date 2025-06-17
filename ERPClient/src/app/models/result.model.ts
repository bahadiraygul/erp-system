export class ResultModel<T> {
    data : T | null = null;
    errorMessage : string | null = null;
    isSuccessful : boolean = false;
}
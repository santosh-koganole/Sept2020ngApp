export class LoggerService {
    log(message:string) : void {
        console.log (new Date());
        console.log (message);
    }
}
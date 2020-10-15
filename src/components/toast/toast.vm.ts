export enum ToastType{
    error = "error",
    warn = "warn",
    info = "info",
    success = "success",
}
export interface ToastMessage{
    isActive: boolean;
    message: string;
    type: ToastType;
}
export class ToastVM {

    static VISIBLE_WAITING_TIME = 2000
    static WAITING_TIME_BETWEEN_MESSAGE = 500

    private isBusy = false
    private pendingMessages: ToastMessage[] = []
    private transitionName!: string
    message: ToastMessage = {
        isActive: false,
        message: "",
        type: ToastType.info
    }


    private pushToast(message: string, type: ToastType){
        this.pendingMessages.push({
            isActive: false,
            message,
            type
        })
        return this
    }

    error(message: string){
        return this.pushToast(message, ToastType.error)
    }

    info(message: string){
        return this.pushToast(message, ToastType.info)
    }

    warn(message: string){
        return this.pushToast(message, ToastType.warn)
    }

    success(message: string){
        return this.pushToast(message, ToastType.success)
    }

    show(){
       if(this.isBusy == false){
            this.next()
       }
    }

    finish(){
        this.isBusy = false
        this.next()
    }

    private next(){
        const current = this.pendingMessages.shift()!
        if(current){
            current.isActive = true
            this.message = current
            this.isBusy = true
        }
    }

    constructor(transitionName: string){
        this.transitionName = transitionName
    }

}
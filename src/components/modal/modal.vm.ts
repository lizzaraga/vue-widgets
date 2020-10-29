export enum ModalPosition{
    top = 'top', middle = 'middle'
}

export class ModalVM{
    public title = ""
    public modalClasses = ["x-modal"]
    public position: ModalPosition = ModalPosition.top;
    public hasHeader = true
    public hasFooter = true
    public backdropTransitionName = "x-modal-backdrop-fade"
    public modalTransitionName = "x-modal-slide-up"
    public isOpen = false

    constructor(title: string){
        this.title = title
    }

    pushClass(className: string){
        this.modalClasses.push(className)
        return this
    }

    openModal(){
        this.isOpen = true
    }
    closeModal(){
        this.isOpen = false
    }
}
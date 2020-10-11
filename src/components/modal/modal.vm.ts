export enum ModalPosition{
    top = 'top', middle = 'middle'
}

export class ModalVM{
    public title = ""
    private _modalClasses = ["x-modal"]
    public get modalClasses(): string[] {
        return this._modalClasses;
    }
    public position: ModalPosition = ModalPosition.top;
    public hasHeader = true
    public hasFooter = true
    public backdropTransitionName = "x-modal-backdrop-fade"
    public modalTransitionName = "x-modal-slide-up"
    public isOpen = false

    constructor(title: string){
        this.title = title
        console.log(this)
    }

    openModal(){
        this.isOpen = true
    }
    closeModal(){
        this.isOpen = false
    }
}
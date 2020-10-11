export enum SidebarPosition{
    left = 'left',
    right = 'right'
}

export class SidebarVM{
    public backdropTransitionName = "x-sidebar-backdrop-fade"
    public sidebarTransitionName = "x-sidebar-slide-"
    public isOpen = false
    private _sidebarClasses = ["x-sidebar"]
    public get sidebarClasses(): string[] {
        return this._sidebarClasses;
    }
    private position = SidebarPosition.left
    
    constructor(position: SidebarPosition = SidebarPosition.left){
        this.position = position
        this.sidebarTransitionName += this.position
    }

    openSidebar(){
        this.isOpen = true
    }
    closeSidebar(){
        this.isOpen = false
    }
}
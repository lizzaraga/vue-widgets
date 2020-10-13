
export class TabbarVM {

    private listeners: { (index?: number): void}[] = []
    // USE THIS TO CUSTOMIZE YOUR TABBAR INDICATOR
    private childBounds!: DOMRect; private parentBounds!: DOMRect 
    private childBoundsListener!: {(parentBounds: DOMRect, bounds: DOMRect): void}
    private _childrenCount = 0
    
    public get childCount(): number {
        return this._childrenCount
    }
    
    private _index?: number;    
    public get index(): number | undefined {
        return this._index
    }

    public set index(v: number | undefined) {
        this._index = v;
        this.listeners.forEach(f => f(v))
    }
    
    public tabbarClasses = ["x-tabbar"]
    

    constructor(index: number | undefined = undefined ){
        this.index = index
    }

    jumpTo(index?: number ){
        this.index = index
    }

    addIndexChangedListener(listener: (index?: number)  => void){
        this.listeners.push(listener)
    }

    setChildBoundsListener(listener: (parentBounds: DOMRect, bounds: DOMRect) => void){
        this.childBoundsListener = listener
    }

    updateChildBounds(bounds: DOMRect){
        this.childBounds = bounds
        if(this.childBoundsListener != null && this.parentBounds != null)
            this.childBoundsListener(this.parentBounds, bounds)
    }

    setParentBounds(parentBounds: DOMRect){
        this.parentBounds = parentBounds
        if(this.childBoundsListener != null && this.childBounds != null)
            this.childBoundsListener(parentBounds, this.childBounds)
    }

    dispose(){
        this.listeners = []
    }
}
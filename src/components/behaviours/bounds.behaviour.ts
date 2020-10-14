export class BoundsBehaviour{
    // USE THIS TO CUSTOMIZE YOUR TABBAR INDICATOR
    protected childBounds!: DOMRect; private parentBounds!: DOMRect 
    protected childBoundsListener!: {(parentBounds: DOMRect, bounds: DOMRect): void}

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

}
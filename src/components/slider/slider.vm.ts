import { BoundsBehaviour } from '../behaviours/bounds.behaviour';

export class SliderVM extends BoundsBehaviour{
    protected _index = 0
    protected _lastInnerIndex = 0
    
    public set index(v: number) {
        this._lastInnerIndex = this._index
        this._index = v;
        this.updateDirection()
    }
    public get index(): number {
        return this._index
    }
    
    protected _direction = "next"
    
    public get direction(): string {
        return this.direction
    }
    
    public childrenCount = 0
    
    // Animation
    public animationName = ""
    protected prevAnimationName = ""
    protected nextAnimationName = ""

    // Classes
    public sliderClasses = ['x-slider']

    constructor(index = 0, prevAnimName = "prev", nextAnimName = "next"){
        super()
        this.prevAnimationName = prevAnimName
        this.nextAnimationName = nextAnimName
        this._index = index
    }
    
    forceIndexUpdate(index: number){
        this._index = index
    }

    next(){
        this._index ++
    }

    prev(){
        this._index --
    }

    protected updateDirection(){
        if(this.index >= this.childrenCount)
            this._index = 0
        if(this.index >= this._lastInnerIndex){
            this._direction = "next"
            this.animationName = this.nextAnimationName
        }
        else{
            this._direction = "prev"
            this.animationName = this.prevAnimationName
        }
    }
}
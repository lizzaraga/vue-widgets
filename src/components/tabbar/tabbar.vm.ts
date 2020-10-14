import { BoundsBehaviour } from '../behaviours/bounds.behaviour';

export class TabbarVM extends BoundsBehaviour {

    private listeners: { (index?: number): void}[] = []
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
        super()
        this.index = index
    }

    jumpTo(index?: number ){
        this.index = index
    }

    addIndexChangedListener(listener: (index?: number)  => void){
        this.listeners.push(listener)
    }

    
    dispose(){
        this.listeners = []
    }
}
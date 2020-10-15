import { SliderVM } from '../slider/slider.vm';

export default class CarouselVM extends SliderVM{

    public timeout: number = 4000
    private timeoutId: number = 0

    startTimer(){
        this.timeoutId = window.setInterval(() => {
            this.index ++
        }, this.timeout);
    }

    stopTimer(){
        const self = this
        window.clearInterval(self.timeoutId)
    }

    
    forceIndexUpdate(index: number){
        super.forceIndexUpdate(index)
        this.stopTimer()
        this.startTimer()
    }

    
}
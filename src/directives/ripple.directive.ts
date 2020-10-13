export function rippleDirective(el: HTMLElement, binding: any){
    document.addEventListener('DOMContentLoaded', () => {
        
        

        const clickHandler = (e: MouseEvent) => {
            const div = document.createElement('div')
            div.style.position = 'absolute'
            div.style.opacity = '0.7'
            div.style.transform = 'scale(0)'
            div.style.transformOrigin = div.style.webkitTransformOrigin = "center"
            div.style.borderRadius = '50%'
            div.style.backgroundColor = "dodgerblue"
            div.style.transition = "all 0.3s linear"
            div.style.zIndex = "1"
            
            el.style.position = 'relative'
            el.style.overflow = 'hidden'
            el.appendChild(div)
            const elRect = el.getBoundingClientRect()
            console.log(elRect)
            const maxDim = Math.max(elRect.width, elRect.height)
            div.style.height = div.style.width = `${maxDim}px`
            div.style.left = `${(e.clientX - elRect.left) - maxDim/2}px`
            div.style.top = `${(e.clientY - elRect.top) - maxDim/2}px`
            
            div.style.opacity = '0'
            div.style.transform = 'scale(1.4)'

            setTimeout(() => {
                div.style.opacity = '0'
                div.style.transform = 'scale(1.2)'
                el.removeChild(div)
            }, 300);
        }
        el.addEventListener('mousedown', clickHandler)
    })
}
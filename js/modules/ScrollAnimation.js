export default class{
    constructor(elements){
        this.elements=document.querySelectorAll(elements);
        this.handleScroll=this.handleScroll.bind(this)
        this.activeClass="active";
    }


    handleScroll(){
        this.elements.forEach((item)=>{

            const {scrollTop, clientHeight} = document.documentElement;
            const topElement=item.getBoundingClientRect().top;

            if(scrollTop > (scrollTop + topElement).toFixed() - clientHeight * 0.5){
               item.classList.add(this.activeClass)
            }
        })
    }


    eventScroll(){
        window.addEventListener('scroll', this.handleScroll)
    }

    start(){
        if(this.elements.length){
            this.handleScroll()
            this.eventScroll()
        }
    }
}
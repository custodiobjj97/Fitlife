export default class linkSmoot{
    constructor(links){
      this.links=document.querySelectorAll(links);
      this.activeLinkSmooth=this.activeLinkSmooth.bind(this)
    }
    

    activeLinkSmooth(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({ behavior: "smooth", block: "start"});
        
    }


    eventLinks(){
        this.links.forEach((item)=>{item.addEventListener('click',this.activeLinkSmooth)})
    }
    


    start(){
        if(this.links.length){
            this.eventLinks()
        }
    }
}

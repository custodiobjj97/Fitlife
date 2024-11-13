export default class MenuMobile{
    constructor(toggle,menu,icon){
        this.toggle=document.querySelector(toggle);
        this.menu=document.querySelector(menu);
        this.icon=document.querySelector(icon)
        this.html=document.documentElement;
        this.events=['click','touchstart'];
        this.activeClass="open";
       
    }

    mobileOpen(event){
        if(event.type === "touchstart"){
            event.preventDefault()
        };

        this.menu.classList.toggle(this.activeClass);
        this.icon.classList.toggle(this.activeClass);
    };

    ousideClick(event){
       
        if(!this.menu.contains(event.target)){
            this.menu.classList.remove(this.activeClass);
            this.icon.classList.remove(this.activeClass);
        }

        return () =>{
            this.html.removeEventListener('click', this.ousideClick)
        }
    }



    eventMobile(){
      this.events.forEach((userEvent)=>{this.toggle.addEventListener(userEvent, this.mobileOpen)});
      this.html.addEventListener('click', this.ousideClick)
      
    };


    bindEvents(){
        this.mobileOpen=this.mobileOpen.bind(this);
        this.ousideClick= this.ousideClick.bind(this)
    }

    start(){
        if(this.menu){
            this.bindEvents()
            this.eventMobile();
        }
    }
}
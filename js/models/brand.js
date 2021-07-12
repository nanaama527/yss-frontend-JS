class Brand{


    static all = []

    constructor({id, name}){
    
        this.id = id
        this.name = name
        Brand.all.push(this)
        

    }

    
   brandCard =()=>{ console.log(this)
        
        return `
  
            <h2 id="${this.id}" data-id="${this.id}">${this.name}</h2>
            `
    
    }
    renderBrand =(brand)=> {  
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card")
        cardDiv.setAttribute("data-id", brand.id)
        cardDiv.id = brand.id 
        cardDiv.innerHTML = this.brandCard()
    
        cardDiv.addEventListener("click", (event) => { 
            console.log(" Classiana! ", event.target)
            API.fetchBrandSneakers()

        })
        
      const life = document.querySelector('.container')
      life.append(cardDiv)

    } 

}
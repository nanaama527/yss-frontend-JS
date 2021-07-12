class API {
    //static all = ["hey"]
    static BRAND_API = "http://localhost:3000/brands"
    static getBrands(){
    
        fetch(this.BRAND_API).then(response => response.json())
        .then(brandsDatabase => { console.log(brandsDatabase);
              
            brandsDatabase.forEach(brand => {  console.log(brand) 
                const brandtoRender = new Brand(brand)
                brandtoRender.renderBrand(brand)
            }) 
        
        })

    }


    
   
    static fetchBrandSneakers(){

        const brandID = 2

        fetch(`${this.BRAND_API}/${brandID}/sneakers`).then(response => response.json())
        .then(brandSneakers => { console.log(brandSneakers);
      
          const sneakersDiv = document.querySelector("#the-sneaker-room")
            console.log(sneakersDiv);
                sneakersDiv.innerHTML = ""
                

          brandSneakers.forEach(sneaker => {  console.log(sneaker) 
            
            //const sneakerOnFrontend = new Sneaker(sneaker)
            //sneakerOnFrontend.renderSneaker(sneaker)
          
        }) 
      
        }) 

    }

         
}
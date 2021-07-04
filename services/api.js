class API {
    static BRAND_API = "http://localhost:3000/brands"
    static getBrands(){
    
        fetch(this.BRAND_API).then(response => response.json())
        .then(brandsDatabase => { console.log(brandsDatabase);
              
            brandsDatabase.forEach(brand => {  console.log(brand) 
            }) 
        
        })

    }
    
    
    
    
         
}
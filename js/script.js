const handleCategory2 = async() => {

    const data1 = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data2 = await data1.json();

    const tabContainer = document.getElementById("tab-container"); 
    data2.data.forEach((category) => {
        const div = document.createElement("div");
     
        div.innerHTML=`
        <button onclick = "newPurpose2('${category.category_id}')" class="btn btn-active">${category.category}</button>        
        `;

        tabContainer.appendChild(div); 
    });
    
    
};



const newPurpose2 = async(categoryId) => {

    const data1 = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data2 = await data1.json();
    const cardContainer = document.getElementById("card-container"); 

    cardContainer.innerHTML="";

    data2.data?.forEach((videos) => {
        const div = document.createElement("div");
     
        div.innerHTML=`

            <div class="card w-96 bg-base-100 shadow-xl">

                <figure>
                    <img class="h-[216px] w-[384px]"  src=${videos?.thumbnail}/>
                </figure>

                <div class="card-body">

                    <div class="card-footer  justify-between mt-8">  


                        <div class="flex">
                            <div class="avatar online">
                                <div class="w-14 rounded-full">
                                    <img src= ${videos?.authors[0].profile_picture} alt="">
                                </div>
                            </div>

                            <div>
                                <h2 class="card-title">${videos?.title}</h2>
                                <div class="flex">
                                    <h6>${videos?.authors[0].profile_name}</h6>
                                <div class="badge badge-secondary p-2">${videos?.authors[0].verified}</div> 
                            </div>                         
                            </div>
                        </div>                        
                        <h3>${videos?.others.views?videos.others.views:" "}</h3>

                        
                    </div>

                </div>


            </div>




        
        
        `;
        

        cardContainer.appendChild(div); 
    });

}; 


handleCategory2(); 
newPurpose2 ("1000");


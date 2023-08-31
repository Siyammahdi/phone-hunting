const loadData = async(productSearch, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${productSearch}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll)
} 


const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    const showAllBtn = document.getElementById('showAll-btn')


    if(phones.length > 6){
        showAllBtn.classList.remove('hidden')
    }
    else{
        showAllBtn.classList.add('hidden')
    }


console.log('is show all', isShowAll)
    phones = phones.slice(0, 6)

    // Clearing the previous search results
    phoneContainer.innerHTML = ''

    // Showing the product cards
    phones.forEach(phone => {
        phoneCard = document.createElement('div')
        phoneCard.innerHTML = `
                <div id="product-cards" class="card w-auto mb-20 bg-base-100 shadow-xl pt-10">
                    <figure><img class="rounded-2xl" src="${phone.image}" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-evenly mt-5">
                        <button class="btn btn-primary">Specification</button>
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
        `
        phoneContainer.appendChild(phoneCard)

        toggleLoadingSpinner(false)

    });
} 


// Search 

const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadData(searchText, isShowAll)
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner')
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }
    else{
        loadingSpinner.classList.add('hidden')
    }
}



// Show All

const  handleShowAll = () =>{
    handleSearch(true)
}








// Theme Customization

document.getElementById('light-mode').addEventListener('click', function(){
    const htmlTag = document.getElementById('html-tag')
    htmlTag.removeAttribute('data-theme')
    htmlTag.setAttribute('data-theme', value ='winter')


})

document.getElementById('dark-mode').addEventListener('click', function(){
    const htmlTag = document.getElementById('html-tag')
    htmlTag.removeAttribute('data-theme')
    htmlTag.setAttribute('data-theme', value ='night')
    // productCards.setAttribute('id', value ='')
})



/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

const formatPrice = (price)=>{
    const newPrice = new window.Intl.NumberFormat('en-En',{
        style:"currency",
        currency:"GBP",
    }).format(price)
    return newPrice;
}

//web api fetch

//conectarnos al server
window
.fetch(`${baseUrl}/api/avo`)
//procesar la respuesta y convertirla en JSON
.then(response => response.json())
//JSON -> Data -> Renderizar info browser
.then(respuestaJSON =>{
    const todosLosItems = [];
    respuestaJSON.data.forEach(element => {
        //crear imagen
        const imagen = document.createElement('img');                
        imagen.src = `${baseUrl}${element.image}`
        imagen.className = 'imagen';
        //crear titulo
        const title = document.createElement('h2');       
        title.textContent = element.name;
        title.className = 'text-xl'
        //crear precio
        const price = document.createElement('div');        
        price.textContent = formatPrice(element.price);
        price.className = 'flex-row tex-gray-600'; 


        const container = document.createElement('div');
        container.append(imagen,title,price);
        container.className = 'container'
        
        todosLosItems.push(container);
    });

    appNode.append(...todosLosItems);
})





let citybtn=document.querySelector("#citytype_city");
let typesbtn=document.querySelector("#citytype_types");
let addlist=document.querySelector(".addlist")
let typeslist=document.querySelector(".typeslist")


citybtn.addEventListener("click", ()=>{
    citybtn.style.borderBottom="1px solid blueviolet";
    typesbtn.style.borderBottom="0px";
    addlist.classList.remove("flag")
    typeslist.classList.add("flag")
})
typesbtn.addEventListener("click", ()=>{
    citybtn.style.borderBottom="0px"
    typesbtn.style.borderBottom="1px solid blueviolet"
    typeslist.classList.remove("flag")
    addlist.classList.add("flag")
})

let data=[
    {
        refId:"#14001111",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/14001111/CV%2014_watermarked_image_1024.jpeg",
        name:"4 Bhk Villa With Private Pool",
        location:"Sinquerim, Goa, India",
        specs:["VILLA","4 BEDROOMS","4 BATHROOMS","12 MAX GUESTS","WIFI","KITCHEN","SWIMMING POOL","AC"],
        price:"24245",
    },
    {
        refId:"#15367434",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/15367434/img_20150722_123631_watermarked_image_1024.jpeg",
        name:"Fully Furnished Bunglow At Colva Beach!!",
        location:"Colva, Goa, India",
        specs:["VILLA","4 BEDROOMS","5 BATHROOMS","8 MAX GUESTS","KITCHEN"],
        price:"6300",
    },
    {
        refId:"#48556786",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/48556786/img-20120114-00193_watermarked_image_1024.jpeg",
        name:"3 Bhk Bungalow At Mapusa, Goa!!",
        location:"Mapusa, Goa, India",
        specs:["VILLA","3 BEDROOMS","3 BATHROOMS","WIFI","14 MAX GUESTS","KITCHEN","AC","PETS NOT ALLOWED"],
        price:"5600",
    },
    {
        refId:"#22151384",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/22151384/21f6579ce48511e7862f0a92a929817e_watermarked_image_1024.jpeg",
        name:"Portugues Style Villa",
        location:"Benaulim, Goa, India",
        specs:["HOMESTAY","8 BEDROOMS","8 BATHROOMS","32 MAX GUESTS","WIFI","KITCHEN","SWIMMING POOL","AC"],
        price:"11120",
    },
    {
        refId:"#18132048",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/18132048/bedroom-balcony_watermarked_image_1024.jpeg",
        name:"Holiday Homes In Palolem - Single Bedroom",
        location:"Palolem Beach, Goa, India",
        specs:["APARTMENT","1 BEDROOMS","1 BATHROOMS","4 MAX GUESTS","WIFI","KITCHEN","SWIMMING POOL","AC"],
        price:"5250",
    },
    {
        refId:"#21364640",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/21364640/gallery-10_watermarked_image_1024.jpeg",
        name:"Deluxe Room Stay",
        location:"Calangute, Goa, India",
        specs:["PRIVATE ROOM","4 MAX GUESTS","WIFI","SWIMMING POOL","AC"],
        price:"5075",
    },
    {
        refId:"#15352539",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/15352539/f_watermarked_image_1024.jpeg",
        name:"Family Ac Room Stay",
        location:"Calangute, Goa, India",
        specs:["PRIVATE ROOM","4 MAX GUESTS","WIFI","SWIMMING POOL","AC","PARKING SPACE"],
        price:"3332",
    },
    {
        refId:"#24274408",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/24274408/2174940_orig_watermarked_image_1024.jpeg",
        name:"Exclusive Stay",
        location:"Siolim, Goa, India",
        specs:["PRIVATE ROOM","2 MAX GUESTS","WIFI","SWIMMING POOL","AC","PARKING SPACE"],
        price:"6300",
    },
    {
        refId:"#24274408",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/24274408/2174940_orig_watermarked_image_1024.jpeg",
        name:"Exclusive Stay",
        location:"Siolim, Goa, India",
        specs:["PRIVATE ROOM","2 MAX GUESTS","WIFI","SWIMMING POOL","AC","PARKING SPACE"],
        price:"6300",
    },
    {
        refId:"#23070187",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/23070187/copy-of-img_8951_watermarked_image_1024.jpeg",
        name:"Room Stay - Divar Island Guesthouse Retreat",
        location:"Orlim Goa, Goa, India",
        specs:["PRIVATE ROOM","3 MAX GUESTS","WIFI","SWIMMING POOL","AC","CARETAKER"],
        price:"6125",
    },
    {
        refId:"#29462286",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/29462286/view2_watermarked_image_1024.jpeg",
        name:"3 Bedroom Penthouse Apartment With A Panoramic View",
        location:"Ribandar, Goa, India",
        specs:["PRIVATE ROOM","3 BEDROOMS","3 BATHROOMS","10 MAX GUESTS","WIFI","KITCHEN","AC","PARKING SPACE"],
        price:"6875",
    },
    {
        refId:"#32582132",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/32582132/kiddies-pool_watermarked_image_1024.jpeg",
        name:"Villa Stay",
        location:"Arpora, Goa, India",
        specs:["VILLA","1 BEDROOMS","1 BATHROOMS","6 MAX GUESTS","SWIMMING POOL","AC"],
        price:"6875",
    },
    {
        refId:"#29968385",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/29968385/12_watermarked_image_1024.jpeg",
        name:"A/C Room Accommodation Near Candolim - Victoria Villa Guesthouse",
        location:"Candolim, Goa, India",
        specs:["PRIVATE ROOM","2 MAX GUESTS","PETS NOT ALLOWED","AC"],
        price:"6875",
    },
    {
        refId:"#24101244",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/24101244/img_0382_watermarked_image_1024.jpeg",
        name:"Goan Paradise Villa With Pool",
        location:"Sinquerim, Goa, India",
        specs:["VILLA","3 BEDROOMS","4 BATHROOMS","6 MAX GUESTS","WIFI","KITCHEN","SWIMMING POOL","AC"],
        price:"13334",
    },
    {
        refId:"#10519707",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/10519707/fd1e2655ac7c11e99e4f0a8e1b1ce4da_watermarked_image_1024.jpeg",
        name:"Classic Room",
        location:"Betalbatim, Goa, India",
        specs:["PRIVATE ROOM","2 MAX GUESTS","WIFI","SWIMMING POOL","AC"],
        price:"13334",
    },
    {
        refId:"#84691018",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/84691018/iqlbu19z3o5j8c_9fpam6fcdlmgkjizmbked3am5oi4_watermarked_image_1024.jpeg",
        name:"Luxurious Three Bedroom Villa",
        location:"Arpora, Goa, India",
        specs:["RESORT","3 BEDROOMS","3 BATHROOMS","10 MAX GUESTS","KITCHEN"],
        price:"15568",
    },
    {
        refId:"#10901778",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/10901778/casaimage2jpg_watermarked_image_1024.jpeg",
        name:"Stay In The Beautiful,Lush Area",
        location:"Bardez, Goa, India",
        specs:["VILLA","1 BEDROOMS","1 BATHROOMS","4 MAX GUESTS","KITCHEN","SWIMMING POOL","AC"],
        price:"31451",
    },
    {
        refId:"#26620172",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/26620172/c4e96d79424811e99d250a8e1b1ce4da_watermarked_image_1024.jpeg",
        name:"Exquisite 3br Villa With Private Plunge Pool & Jacuzzi",
        location:"Sangolda, Goa, India",
        specs:["VILLA","3 BEDROOMS","3 BATHROOMS","8 MAX GUESTS","WIFi","KITCHEN","SWIMMING POOL","AC"],
        price:"19990",
    },
    {
        refId:"#12250859",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/12250859/989d3e133dd111ebbcb50a5f3ca25ae5_watermarked_image_1024.jpeg",
        name:"1 Bedroom Ac Apartment In Dabolim, Goa",
        location:"Dabolim, Goa, India",
        specs:["APARTMENT","1 BEDROOMS","1 BATHROOMS","2 MAX GUESTS","WIFi","KITCHEN","AC"],
        price:"19990",
    },
    {
        refId:"#20443465",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/20443465/candolim-villa-7_watermarked_image_1024.jpeg",
        name:"Colonial Style Villa",
        location:"Dabolim, Goa, India",
        specs:["VILLA","5 BEDROOMS","3 BATHROOMS","6 MAX GUESTS","KITCHEN","SWIMMING POOL","AC"],
        price:"77000",
    },
    {
        refId:"#33501537",
        image:"https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/33501537/8b72c67d970611e8b16c0a8e1b1ce4da_watermarked_image_1024.jpeg",
        name:"Varca 3 Bedroom Villa's",
        location:"Varca, Goa, India",
        specs:["VILLA","3 BEDROOMS","2 BATHROOMS","6 MAX GUESTS","KITCHEN","WIFI","SWIMMING POOL","AC"],
        price:"37000",
    },
]

data.forEach(function(elem){
    let div=document.createElement("div");
    div.setAttribute("class","swiper-slide")
    let img=document.createElement("img");
    img.src=elem.image;
    let p1=document.createElement("p");
    p1.innerText=`Ref Id #${elem.refId}`
    let p2=document.createElement("p");
    p2.innerText=elem.name;
    let p3=document.createElement("p");
    p3.innerText=elem.location
    let p4=document.createElement("p");
    let spec="";
    for (let i=0;i<3;i++) {
        spec=spec+elem.specs[i]+" | "
    }
    p4.innerText=spec+"..."
    let p5=document.createElement("p");
    p5.innerText=`₹${elem.price} per night`

    div.append(img,p1,p2,p3,p4,p5);
    document.querySelector(".holidayhome").append(div)
})

for (let i=0;i<data.length;i++) {
    let main=document.createElement("div");
    main.setAttribute("class","swiper-slide")
    let imgdiv=document.createElement("div");
    let img=document.createElement("img");
    img.src=data[i].image
    let pos=document.createElement("div");
    let p1=document.createElement("p");
    p1.innerText=data[i].name
    let p2=document.createElement("p");
    p2.innerText=data[i].location
    let p3=document.createElement("p");
    p3.innerText="Rated 4.5/5"
    let p4=document.createElement("p");
    p4.innerText="Excellent Stay"
    let p5=document.createElement("p");
    p5.innerText="The house and rooms are very beautiful..."

    pos.append(p1,p2)
    imgdiv.append(img,pos);
    main.append(imgdiv,p3,p4,p5);
    document.querySelector(".holidayhome2").append(main);
}

document.querySelector("#searchbtn").addEventListener("click", function(){
    window.location.href= "product_1.html"
})
const events = [
    {
        id: 1,
        event: "Nordeķis" ,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum.`,
        location: "Iļģuciems, Rīga",
        distance: ["10km", "5km"],
        date: "20.06.2021",
        image: "https://images.unsplash.com/photo-1613206334619-c6bb9c203ef0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
        registrationOpen: true,
        map: "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/24.0563,56.9663,12.93,0/300x200?access_token=pk.eyJ1IjoibWFydDhpbnMiLCJhIjoiY2tvbXl2Y2NvMDM5ejJwbXhzaTdubmRxciJ9.EQuuWigA6rPRkMB_ihNFEg"
    },
    {
        id: 2,
        event: "Imantas priedes" ,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum.`,
        location: "Imanta, Rīga",
        distance: ["10km", "5km"],
        date: "03.07.2021",
        image: "https://images.unsplash.com/photo-1570004119777-2b1786b0e5bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
        registrationOpen: true,
        map: "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/24.0169,56.9572,13.13,0/300x200?access_token=pk.eyJ1IjoibWFydDhpbnMiLCJhIjoiY2tvbXl2Y2NvMDM5ejJwbXhzaTdubmRxciJ9.EQuuWigA6rPRkMB_ihNFEg"
    },
    {
        id: 3,
        event: "Mežaparka brikšņi" ,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum.`,
        location: "Mežaparks, Rīga",
        distance: ["20km", "10km", "5km"],
        date: "01.09.2021",
        image: "https://images.unsplash.com/photo-1588943680936-7754ec833045?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80",
        registrationOpen: false,
        map: "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/24.149,57.0104,12.49,0/300x200?access_token=pk.eyJ1IjoibWFydDhpbnMiLCJhIjoiY2tvbXl2Y2NvMDM5ejJwbXhzaTdubmRxciJ9.EQuuWigA6rPRkMB_ihNFEg"
    },
    {
        id: 4,
        event: "Panikas skrējiens" ,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum.`,
        location: "Ķengarags, Rīga",
        distance: ["15km", "10km", "5km"],
        date: "14.10.2021",
        image: "https://images.unsplash.com/photo-1598012268972-217e6036c419?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        registrationOpen: false,
        map: "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/24.1433,56.9375,13.94,0/300x200?access_token=pk.eyJ1IjoibWFydDhpbnMiLCJhIjoiY2tvbXl2Y2NvMDM5ejJwbXhzaTdubmRxciJ9.EQuuWigA6rPRkMB_ihNFEg"
    },
    {
        id: 5,
        event: "Sarkandaugavas lasis" ,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
        recusandae alias error harum maxime adipisci amet laborum.`,
        location: "Ķengarags, Rīga",
        distance: ["20km", "10km", "5km"],
        date: "07.12.2021",
        image: "https://images.unsplash.com/photo-1486218119243-13883505764c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
        registrationOpen: true,
        map: "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/24.1242,56.9955,13.38,0/300x200?access_token=pk.eyJ1IjoibWFydDhpbnMiLCJhIjoiY2tvbXl2Y2NvMDM5ejJwbXhzaTdubmRxciJ9.EQuuWigA6rPRkMB_ihNFEg"
    }
]

const runners = [
    {
        id: 1,
        age: "33",
        distance: "10km",
        email: "martins_skinkis@inbox.lv",
        event: "Imantas priedes",
        firstName: "Mārtiņš",
        gender: "Vīrietis",
        lastName: "Šķiņķis"
    },
    {
        id: 2,
        age: "31",
        distance: "5km",
        email: "aiga_skinkis@inbox.lv",
        event: "Nordeķis",
        firstName: "Aiga",
        gender: "Sieviete",
        lastName: "Liere"
    },
    {
        id: 3,
        age: "37",
        distance: "5km",
        email: "laura@inbox.lv",
        event: "Nordeķis",
        firstName: "Laura",
        gender: "Sieviete",
        lastName: "Berzina"
    },
    {
        id: 4,
        age: "21",
        distance: "20km",
        email: "pakavs@inbox.lv",
        event: "Sarkandaugavas lasis",
        firstName: "Uldis",
        gender: "Vīrietis",
        lastName: "Berzins"
    }
            
]

export {events, runners};
export const HomePage=()=>{

    const objLi=[
            {"liList":7},
            {"liList":2},
            {"liList":1},
            {"liList":3},
            {"liList":10},
            {"liList":5},
        ]

        // liList >4 >> green color  <4 >> pink color 
    const paraStyle={
        fontSize:"30px",
        color:"navy",
        backgroundColor:"peru",
        width:"50%",
        textAlign:"center",
        textDecoration:"underline",
        fontStyle:"italic",
        padding:"15px",
        margin:"10px",
        border:"10px ridge green"
    }
    const listStyle={
        color:"red"
    }

    return(
        <>
        <ul>
           {
            objLi.map((element)=><li style={listStyle}>{element.liList}</li>)
           }
        </ul>
        <h1 style={{color:"blue"}}>HomePage</h1> 
        <img src="" alt="" />
        <div style={{display:"flex",gap:"5%"}}>
        <p style={paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iusto eius facilis consequatur deleniti vero, maiores ea sed perspiciatis aspernatur incidunt placeat ratione minima quibusdam, porro nam voluptates asperiores dolor esse molestias! A mollitia eos tempora sapiente, temporibus officiis consequuntur!</p>
        <p style={{fontSize:"30px",color:"navy",backgroundColor:"peru",width:"50%",textAlign:"center",textDecoration:"underline",fontStyle:"italic",padding:"15px",margin:"10px",border:"10px ridge green"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iusto eius facilis consequatur deleniti vero, maiores ea sed perspiciatis aspernatur incidunt placeat ratione minima quibusdam, porro nam voluptates asperiores dolor esse molestias! A mollitia eos tempora sapiente, temporibus officiis consequuntur!</p>
        </div>
        
        </>
    )
}
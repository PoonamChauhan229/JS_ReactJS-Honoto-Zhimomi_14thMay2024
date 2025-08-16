import ActionCard from './ActionCard'

const ActionDisplay = () => {
    const actions=[
        {
            title:"Live From Space",
            producer:"Mac Miller",
            poster:"https://mui.com/static/images/cards/live-from-space.jpg",
            id:1
        },
        {
            title:"Live From Saturn",
            producer:"Mac Saturn",
            poster:"https://m.media-amazon.com/images/I/91AwiX6Z6BL.jpg",
            id:2
        },
        {
            title:"Live From Mars",
            producer:"Mac Mars",
            poster:"https://mui.com/static/images/cards/live-from-space.jpg",
            id:3
        },
        {
            title:"Live From Jupiter",
            producer:"Mac Jupiter",
            poster:"https://m.media-amazon.com/images/I/91AwiX6Z6BL.jpg",
            id:4        
        },
        {
            title:"Live From Venus",
            producer:"Mac Venus",
            poster:"https://mui.com/static/images/cards/live-from-space.jpg",
            id:5
        },
        {
            title:"Live From Pluto",
            producer:"Mac Pluto",
            poster:"https://m.media-amazon.com/images/I/91AwiX6Z6BL.jpg",
            id:6
        },
    ]
  return (
    <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
        {
            actions.map((element,index)=><ActionCard {...element} element={element}/>)
        }
    </div>
  )
}

export default ActionDisplay
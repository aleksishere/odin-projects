function Menu() {

    const menuObjects = [
        {title: 'Mushroom Skewer', 
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis itaque nostrum atque temporibus. Autem perspiciatis tenetur quaerat, deleniti libero, voluptates fuga accusantium fugiat expedita, explicabo commodi ex eligendi non eaque.', 
        img: 'https://www.zeldadungeon.net/wiki/images/1/1d/Mushroom_Skewer_-_TotK_icon.png'},
        {title: 'Steamed Fruit', 
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis itaque nostrum atque temporibus. Autem perspiciatis tenetur quaerat, deleniti libero, voluptates fuga accusantium fugiat expedita, explicabo commodi ex eligendi non eaque.', 
        img: 'https://www.zeldadungeon.net/wiki/images/9/93/Steamed_Fruit_-_TotK_icon.png'},
        {title: 'Buttered Stambulb', 
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis itaque nostrum atque temporibus. Autem perspiciatis tenetur quaerat, deleniti libero, voluptates fuga accusantium fugiat expedita, explicabo commodi ex eligendi non eaque.', 
        img: 'https://www.zeldadungeon.net/wiki/images/8/82/Buttered_Stambulb_-_TotK_icon.png'},
        {title: 'Deep-Fried Bird Roast', 
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis itaque nostrum atque temporibus. Autem perspiciatis tenetur quaerat, deleniti libero, voluptates fuga accusantium fugiat expedita, explicabo commodi ex eligendi non eaque.', 
        img: 'https://www.zeldadungeon.net/wiki/images/5/57/Deep-Fried_Bird_Roast_-_TotK_icon.png'},
    ];

    return (
        <>
        <article>
            {menuObjects.map((item, index) => {
                return(
                    <div className="card cardMenu" key={index}>
                        <div>
                            <div className="cardTitle">{item.title}</div>
                            <div>{item.text}</div>
                        </div>
                        <div><img src={item.img} alt="" /></div>
                    </div>
                )
            })}
        </article>
        </>
    )
}

export default Menu
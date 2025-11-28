function Home() {

    const homeObjects = [
        {text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis itaque nostrum atque temporibus. Autem perspiciatis tenetur quaerat, deleniti libero, voluptates fuga accusantium fugiat expedita, explicabo commodi ex eligendi non eaque.', img: 'https://www.zelda.com/tears-of-the-kingdom/_images/features/features-skies-medium-up.jpg'},
        {text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis itaque nostrum atque temporibus. Autem perspiciatis tenetur quaerat, deleniti libero, voluptates fuga accusantium fugiat expedita, explicabo commodi ex eligendi non eaque.', img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/zelda-breath-of-the-wild-botw-dishes-cooking.jpg'},
        {text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis itaque nostrum atque temporibus. Autem perspiciatis tenetur quaerat, deleniti libero, voluptates fuga accusantium fugiat expedita, explicabo commodi ex eligendi non eaque.', img: 'https://www.cheatsheet.com/wp-content/uploads/2021/12/Legend-of-Zelda-Breath-of-the-Wild-Satori-Mountain-Lord-of-the-Mountain.png'},
    ];

    return (
        <>
        <article>
            {homeObjects.map((item, index) => {
                return(
                    <div className="card cardHome" key={index}>
                        <div>{item.text}</div>
                        <div><img src={item.img} alt="" /></div>
                    </div>
                )
            })}
        </article>
        </>
    )
}

export default Home
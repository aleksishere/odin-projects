function Contact() {

    const contactObjects = [
        {title: 'Hey!', 
        text: 'I just want to thank zeldawiki.wiki, zeldadungeon.net, Hylia Serif team and The Odin Project community! Quick reminder that all characters, images are property of Nintendo.', 
        img: 'https://cdn.wikimg.net/en/zeldawiki/images/thumb/6/6f/ST_Princess_Zelda_Artwork.png/443px-ST_Princess_Zelda_Artwork.png'},
        {title: 'Thanks!', 
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum possimus maxime repellat molestiae cumque nam eligendi cum harum ea tempore, magnam quae sit amet totam, corporis aut odit obcaecati.', 
        img: 'https://static.wikia.nocookie.net/zelda_gamepedia_en/images/d/de/ST_Link_Artwork.png'}
    ];

    return (
        <>
        <article>
            {contactObjects.map((item, index) => {
                return(
                    <div className="card cardMenu" key={index}>
                        <div>
                            <div className="cardTitle">{item.title}</div>
                            <div>{item.text}</div>
                        </div>
                        <div><img className="contactImg" src={item.img} alt="" /></div>
                    </div>
                )
            })}
        </article>
        </>
    )
}

export default Contact